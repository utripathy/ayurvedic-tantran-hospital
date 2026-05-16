import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  email: z
    .email("Enter valid email"),

  message: z
    .string()
    .min(10, "Message too short"),
});

export type AppointmentFormData =
  z.infer<typeof appointmentSchema>;