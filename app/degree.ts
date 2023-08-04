import { z } from 'zod'

const addDegreeFormSchema = z.object({
  type: z.string(),
  field: z.string(),
  country: z.string(),
  university: z.string(),
  accomplishments: z.array(z.object({
    name: z.string(),
    type: z.string(),
    certificate: z.string(),
    link: z.string(),
    id: z.string(),
    publisher: z.string(),
    title: z.string(),
  })),  
})