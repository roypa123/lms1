import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  // add more fields from your backend
});

export const AuthResponseSchema = z.object({
  success: z.boolean(),
  user: UserSchema.optional().nullable(),
  message: z.string().optional(),
});

// Types inferred from schemas
export type User = z.infer<typeof UserSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;