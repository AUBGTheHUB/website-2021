import mongoose, { Schema, Document } from 'mongoose';

export interface EventInterface extends Document {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  img: Buffer;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  img: { type: Buffer, required: false }
});

const Event = mongoose.model<EventInterface>('Event', EventSchema);
export default Event;
