import { Schema, model } from "mongoose";
import { IAppointment } from "./appointment.interface";

const appointmentSchema = new Schema<IAppointment>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"], // optional but recommended
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    consultancyMethod: {
      type: String,
      required: true,
      enum: ["online", "offline"], // adjust if needed
    },

    disease: {
      type: String,
      required: true,
      trim: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  },
);

const Appointment = model<IAppointment>(
  "Appointment",
  appointmentSchema,
);

export default Appointment;