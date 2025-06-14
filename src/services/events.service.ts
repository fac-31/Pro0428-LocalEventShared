import { ZodFormattedError } from '../../deps.ts';

import { EventMode } from '../models/event.model.ts';
import { ErrorResponse } from './general.service.ts';

// getAllEvents

export type GetAllEventsSuccessResponse = Event[];

export type GetAllEventsErrorResponse = {
  error: string;
  details: ZodFormattedError<{ mode?: EventMode}> | undefined;
};

export type GetAllEventsResponse =
  | GetAllEventsSuccessResponse
  | GetAllEventsErrorResponse;

// getEventById

export type GetEventByIdSuccessResponse = Event;

export type GetEventByIdResponse = GetEventByIdSuccessResponse | ErrorResponse;
