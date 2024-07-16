import { z } from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(5, 'Title must be more than 5 characters'),
    description: z.string().min(5, 'Description must be more than 5 characters').max(400, 'Description must be less than 400 characters'),
    location: z.string().min(5, 'Location must be more than 5 characters').max(400, 'Location must be less than 400 characters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
  })