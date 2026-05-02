import { Types } from "mongoose";

interface IName {
  english: string;
  bangla: string;
}

interface IChamberLocation {
  name: string;
  location: string;
  designation: string;
  isPrimary: boolean;
}

interface IContactNumber {
  number: string;
  isPrimary: boolean;
}

interface IStats {
  serviceProvided: number;
  yearsOfExperience: number;
  criticalProblemSolved: number;
  professionalTraining: number;
}

export interface IProfile {
  _id: Types.ObjectId;
  name: IName;
  specializedIn: string;
  shortDescription: string;
  longDescription: string;
  educationalQualification: string[];
  profileImage: string;

  contactNumbers: IContactNumber[];
  chamber: IChamberLocation[];
  chamberTime: string;
  appointmentTime: string;
  onlineConsultancyTime: string;

  specialTrainings: string[];
  specializations: string[];

  treatmentAndExperties: string[];

  stats: IStats;
}
