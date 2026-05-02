import { Schema, model } from "mongoose";
import { ITreatmentAndExperties } from "./treatment-experties.interface";

const treatmentAndExpertiesSchema =
  new Schema<ITreatmentAndExperties>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
    },
    {
      strict: true,
      versionKey: false,
      timestamps: true,
    },
  );

const TreatmentAndExperties = model<ITreatmentAndExperties>(
  "TreatmentAndExperties",
  treatmentAndExpertiesSchema,
);

export default TreatmentAndExperties;