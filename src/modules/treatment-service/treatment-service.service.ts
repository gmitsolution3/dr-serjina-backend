import { ITreatmentAndService } from "./treatment-service.interface";
import TreatmentAndService from "./treatment-service.model";

export const createTreatmentService = async (
  payload: ITreatmentAndService,
) => {
  const result = await TreatmentAndService.create(payload);
  return result;
};

export const getTreatmentServices = async () => {
  const result = await TreatmentAndService.find({});
  return result;
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