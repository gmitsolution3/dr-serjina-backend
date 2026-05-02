import TreatmentAndExperties from "../treatment-experties/treatment-experties.model";
import { IProfile } from "./profile.interface";
import Profile from "./profile.model";

const PROFILE_ID = "ROOT_PROFILE";

export const updateOrCreateProfile = async (payload: IProfile) => {
  const query = {
    _id: PROFILE_ID,
  };

  const options = {
    upsert: true,
  };

  const updatedProfile = await Profile.updateOne(
    query,
    {
      $set: payload,
    },
    options,
  );

  return updatedProfile;
};

export const getProfileDetail = async () => {
  const profileDetail = await Profile.findOne({
    _id: PROFILE_ID,
  });

  const treatmentAndExperties = await TreatmentAndExperties.find({});

  const mappedTreatmentAndExperties = treatmentAndExperties.map(
    (treatment) => treatment.name,
  );

  if (profileDetail) {
    profileDetail.treatmentAndExperties = mappedTreatmentAndExperties;
  }

  return profileDetail;
};
