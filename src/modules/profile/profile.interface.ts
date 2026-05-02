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

interface ISocialLinks {
  name: string;
  url: string;
}

export interface IProfile {
  _id: string;
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

  socialLinks: ISocialLinks[]
}
