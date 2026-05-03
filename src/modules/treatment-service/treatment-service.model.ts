import { Schema, model } from "mongoose";
import { ITreatmentAndService } from "./treatment-service.interface";

const serviceSchema = new Schema<ITreatmentAndService>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);


const TreatmentAndService = model<ITreatmentAndService>("TreatmentAndService", serviceSchema);
export default TreatmentAndService;