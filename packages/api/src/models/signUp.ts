import mongoose, { Schema, Document } from 'mongoose';

export interface SignUpInterface extends Document {
  fullName: string;
  email: string;
  hasTeam: boolean;
  teamName: string;
  age: number;
  location: string;
  school: string;
  source: string; // how did you hear about us?
  participatedBefore: boolean;
  hackathons: string; // not required
  experience: boolean;
  programmingLevel: string;
  strongestSides: string;
  tSize: string;
  lookingForInternship: boolean;
  jobInterests: string;
  infoConsent: boolean;
  jobOffersConsent: boolean;
}

const SignUpSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  hasTeam: { type: Boolean, required: true },
  teamName: { type: String, required: false },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  school: { type: String, required: true },
  source: { type: String, requried: true },
  participatedBefore: { type: Boolean, required: true },
  hackathons: { type: String, required: false },
  experience: { type: Boolean, required: true },
  programmingLevel: { type: String, required: false },
  strongestSides: { type: String, required: true },
  tSize: { type: String, required: true },
  lookingForInternship: { type: Boolean, required: true },
  jobInterests: { type: String, required: false },
  infoConsent: { type: Boolean, required: true },
  jobOffersConsent: { type: Boolean, required: true }
});

const SignUp = mongoose.model<SignUpInterface>('SignUp', SignUpSchema);
export default SignUp;
