// general use

export type MessageResponse = {
  message: string;
};

export type ErrorResponse = {
  error: string;
};

export type GeneralResponse = MessageResponse | ErrorResponse;
