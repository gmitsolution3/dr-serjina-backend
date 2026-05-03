import { IPaginationOptions } from "./../../types";
import { ITreatmentAndService } from "./treatment-service.interface";
import TreatmentAndService from "./treatment-service.model";

export const createTreatmentService = async (
  payload: ITreatmentAndService,
) => {
  const result = await TreatmentAndService.create(payload);
  return result;
};

export const getTreatmentServices = async (
  options: IPaginationOptions,
) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy as string;
  const sortOrder = options.sortOrder === "asc" ? 1 : -1;

  const sortCondition: Record<string, 1 | -1> = {
    [sortBy]: sortOrder,
  };

  const serviceList = await TreatmentAndService.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await TreatmentAndService.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
      totalPage: Math.ceil(total / limit),
    },
    serviceList,
  };
};

export const updateTreatmentService = async (
  id: string,
  payload: Partial<ITreatmentAndService>,
) => {
  const query = { _id: id };

  const data = {
    $set: payload,
  };

  const result = await TreatmentAndService.updateOne(query, data);

  return result;
};

export const deleteTreatmentService = async (id: string) => {
  const result = await TreatmentAndService.deleteOne({ _id: id });
  return result;
};
