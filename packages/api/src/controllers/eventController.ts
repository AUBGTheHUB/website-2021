import { Request, Response } from 'express';
import Event from '../models/event';

export const getAllEvents = async (req: Request, res: Response) => {
  const events = await Event.find({});

  return res.status(201).json({
    events: events
  });
};

export const createEvent = async (req: Request, res: Response) => {
  const eventData = req.body;

  const e = new Event(eventData);
  await e.validate().catch((error) => {
    return res.status(400).json({ message: error });
  });

  const event = await Event.create(eventData);

  return res.status(200).json({
    event: event
  });
};

export const getEventById = async (req: Request, res: Response) => {
  const eventId = req.params.id;
  Event.findOne({ _id: eventId })
    .exec()
    .then((event) => {
      return res.status(200).json({ event: event });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};

export const updateEventById = async (req: Request, res: Response) => {
  const eventId = req.params.id;
  const eventData = req.body;

  const e = new Event(eventData);
  await e.validate().catch((error) => {
    return res.status(400).json({ message: error });
  });

  Event.findByIdAndUpdate({ _id: eventId }, eventData, { new: true })
    .exec()
    .then((event) => {
      return res.status(200).json({ event: event });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};

export const deleteEventById = async (req: Request, res: Response) => {
  const eventId = req.params.id;

  Event.findByIdAndDelete({ _id: eventId })
    .exec()
    .then((event) => {
      return res.status(200).json({ event: event });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};
