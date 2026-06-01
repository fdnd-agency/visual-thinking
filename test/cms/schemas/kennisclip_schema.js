import z from "zod";

export const directusCategoryOutputSchema = z.object({
    slug: z.string(),
    titel: z.string(),
    youtube_link: z.string(),
    beschrijving: z.string().optional()
})

export const directusKennisclipOoutputSchema = z.object({
    titel: z.string(),
    beschrijving: z.string(),
    kennisclips: z.array(directusCategoryOutputSchema)
})

