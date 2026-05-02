import { Schema, model } from "mongoose";
import { IProfile } from "./profile.interface";

const nameSchema = new Schema(
  {
    english: { type: String, required: true, trim: true },
    bangla: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const chamberLocationSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    designation: { type: String, required: true },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false },
);

const contactNumberSchema = new Schema(
  {
    number: { type: String, required: true },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false },
);

const statsSchema = new Schema(
  {
    serviceProvided: { type: Number, default: 0 },
    yearsOfExperience: { type: Number, default: 0 },
    criticalProblemSolved: { type: Number, default: 0 },
    professionalTraining: { type: Number, default: 0 },
  },
  { _id: false },
);

const socialLinkSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false },
);

const profileSchema = new Schema<IProfile>(
  {
    _id: {
      type: String,
      default: "ROOT_PROFILE",
      immutable: true,
    },
    name: { type: nameSchema, required: true },

    specializedIn: { type: String, required: true, trim: true },

    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },

    educationalQualification: {
      type: [String],
      default: [],
    },

    profileImage: { type: String, required: true },

    contactNumbers: {
      type: [contactNumberSchema],
      default: [],
    },

    chamber: {
      type: [chamberLocationSchema],
      default: [],
    },

    chamberTime: { type: String },
    appointmentTime: { type: String },
    onlineConsultancyTime: { type: String },

    specialTrainings: {
      type: [String],
      default: [],
    },

    specializations: {
      type: [String],
      default: [],
    },

    treatmentAndExperties: {
      type: [String],
      default: [],
    },

    stats: { type: statsSchema, default: {} },

    socialLinks: {
      type: [socialLinkSchema],
      default: [],
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);

const Profile = model<IProfile>("Profile", profileSchema);
export default Profile;
