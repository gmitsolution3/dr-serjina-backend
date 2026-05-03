import { IPaginationOptions } from "../../types";
import { IAppointment } from "./appointment.interface";
import Appointment from "./appointment.model";


export const createAppointment = async (payload: IAppointment) => {
  const result = await Appointment.create(payload);
  return result;
};

export const getAppointments = async (
  options: IPaginationOptions,
) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder === "asc" ? 1 : -1;

  const sortCondition: Record<string, 1 | -1> = {
    [sortBy]: sortOrder,
  };

  const appointmentList = await Appointment.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Appointment.countDocuments();
  
  const totalPage = limit === 0 ? 1 : Math.ceil(total / limit);

  return {
    meta: {
      page,
      limit,
      total,
      totalPage,
    },
    appointmentList,
  };
};

export const updateAppointment = async (
  id: string,
  payload: Partial<IAppointment>,
) => {
  const result = await Appointment.updateOne(
    { _id: id },
    { $set: payload },
  );

  return result;
};

export const deleteAppointment = async (id: string) => {
  const result = await Appointment.deleteOne({ _id: id });
  return result;
};
