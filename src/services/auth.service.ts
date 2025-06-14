import { ErrorResponse } from './general.service.ts';
import { SafeUser, UserInDB } from '../models/user.model.ts';
import {
  InsertOneResult,
  OptionalId,
  typeToFlattenedError,
} from '../../deps.ts';

// me

export type MeSuccessResponse = {
  message: string;
  user: SafeUser;
};

export type MeResponse = MeSuccessResponse | ErrorResponse;

// login

export type LoginSuccessResponse = {
  token: string;
};

export type LoginErrorDetails = typeToFlattenedError<{
  username: string;
  password: string;
}, string>;

export type LoginErrorResponse = {
  errors: LoginErrorDetails;
};

export type LoginResponse =
  | LoginSuccessResponse
  | LoginErrorResponse
  | ErrorResponse;

// signup

export type SignupSuccessResponse = InsertOneResult<OptionalId<UserInDB>>;

export type SignupErrorDetails = typeToFlattenedError<{
  password: string;
  email: string;
  username: string;
  name_first?: string | undefined;
  name_last?: string | undefined;
}, string>;

export type SignupErrorResponse = {
  errors: SignupErrorDetails;
};

export type SignupResponse =
  | SignupSuccessResponse
  | SignupErrorResponse
  | ErrorResponse;
