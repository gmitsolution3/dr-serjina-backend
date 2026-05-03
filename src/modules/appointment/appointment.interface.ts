import { Types } from "mongoose";

export interface IAppointment {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  dob: Date;
  age: number;
  gender: string;
  address: string;
  consultancyMethod: string;
  disease: string;
  appointmentDate: Date;
}