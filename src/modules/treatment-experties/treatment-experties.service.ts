import { IPaginationOptions } from "../../types";
import { ITreatmentAndExperties } from "./treatment-experties.interface";
import TreatmentAndExperties from "./treatment-experties.model";

export const createTreatmentAndExperties = async (
  payload: ITreatmentAndExperties,
) => {
  const result = await TreatmentAndExperties.create(payload);

  return result;
};

export const getTreatmentAndExperties = async (
  options: IPaginationOptions,
) => {
  const page = Number(options.page) ?? 1;
  const limit = Number(options.limit) ?? 10;
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy as string;
  const sortOrder = options.sortOrder === "asc" ? 1 : -1;

  const sortCondition: Record<string, 1 | -1> = {
    [sortBy]: sortOrder,
  };

  const expertiesList = await TreatmentAndExperties.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await TreatmentAndExperties.countDocuments();

  const totalPage = limit === 0 ? 1 : Math.ceil(total / limit);

  return {
    meta: {
      page,
      limit,
      total,
      totalPage
    },
    expertiesList,
  };
};

export const updateTreatmentAndExperties = async (
  id: string,
  payload: ITreatmentAndExperties,
) => {
  const { name } = payload;

  const query = {
    _id: id,
  };

  const data = {
    $set: {
      name,
    },
  };

  const result = await TreatmentAndExperties.updateOne(query, data);

  return result;
};

export const deleteTreatmentAndExperties = async (id: string) => {
  const result = await TreatmentAndExperties.deleteOne({
    _id: id,
  });

  return result;
};
