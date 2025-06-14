import { SafeUser } from '../models/user.model.ts';
import { ErrorResponse } from './general.service.ts';

// getAllUsers

export type GetAllUsersSuccessResponse = SafeUser[];

export type GetAllUsersResponse = GetAllUsersSuccessResponse | ErrorResponse;
