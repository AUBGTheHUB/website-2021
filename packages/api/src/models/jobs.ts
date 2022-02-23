import mongoose, {Schema, Document } from "mongoose";

export interface JobInterface extends Document{
  title: string;
  companyName: string;
  description: string;
  location: string;
  link: string;
  date: Date;
  socialMedia: string[];
}

const JobSchema: Schema = new Schema ({
  title: {type: String, required: true},
  companyName: {type: String, required: true},
  description: {type: String, required: true},
  location: {type: String, required: true},
  link: {type: String, required: true},
  date: {type: Date, required: true},
  socialMedia: {type: [String], required: false}
});

const Job = mongoose.model<JobInterface>("Job", JobSchema);
export default Job;
