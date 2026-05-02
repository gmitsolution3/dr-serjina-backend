import { ITreatmentAndExperties } from "./treatment-experties.interface";
import TreatmentAndExperties from "./treatment-experties.model";

export const createTreatmentAndExperties = async (
  payload: ITreatmentAndExperties,
) => {
  const result = await TreatmentAndExperties.create(payload);

  return result;
};

export const getTreatmentAndExperties = async () => {
  const result = await TreatmentAndExperties.find({});

  return result;
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
