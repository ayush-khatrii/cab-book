import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string(),
  phone: z.string(),
  pickup: z.string(),
  dropoff: z.string(),
  date: z.string(),
  time: z.string(),
  cabType: z.string(),
});
