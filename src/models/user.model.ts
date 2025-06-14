import { z } from '../../deps.ts';
import { ObjectId } from '../../deps.ts';

// --- SCHEMAS ---
export const UserSignUpSchema = z.object({
  name_first: z.string().optional(),
  name_last: z.string().optional(),
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100), // plain-text
});

export const UserLogInSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100), // plain-text
});

export const UserUpdateSchema = UserSignUpSchema.partial();

// --- TYPES ---
export type UserUpdateSchema = z.infer<typeof UserUpdateSchema>;
export type UserSignUpInput = z.infer<typeof UserSignUpSchema>;
export type UserLogInInput = z.infer<typeof UserLogInSchema>;

export interface UserInDB {
  _id: ObjectId;
  name_first?: string;
  name_last?: string;
  email: string;
  username: string;
  password: string; // hashed
  saved_events: ObjectId[];
  role: 'user' | 'admin';
}

export type NewUser = Omit<UserInDB, '_id'>;
export type SafeUser = Omit<UserInDB, 'password'>;

// -- Type helper function
export const toSafeUser = (user: UserInDB): SafeUser => {
  const { password: _password, ...safeUser } = user;
  return safeUser;
};
