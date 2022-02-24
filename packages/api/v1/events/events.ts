import { Router } from 'express';
import {getAllEvents, getEventById, updateEventById, deleteEventById, createEvent} from "../../src/controllers/eventController";

export const eventRoutes = Router();

eventRoutes.get('/api/v1/events', getAllEvents);
eventRoutes.post('/api/v1/events', createEvent)
eventRoutes.get('/api/v1/events/:id', getEventById);
eventRoutes.put('/api/v1/events/:id', updateEventById);
eventRoutes.delete('/api/v1/events/:id', deleteEventById);
