import { Types } from "mongoose";

export interface ITreatmentAndService {
  _id: Types.ObjectId;
  name: string;
  imageUrl: string;
  public_id: string;
}