import z from "zod";


export const directusMinicursusSlideOutputSchema = z.object({
  titel: z.string(),
  inhoud: z.string(),
  afbeelding: z
    .object({
      id: z.string(),
    })
    .optional()
    .nullable(),
});

export const directusMiniCursusOutputSchema = z.object({
  slug: z.string(),
  titel: z.string(),
  slides: z.array(directusMinicursusSlideOutputSchema),
});

export const directusMiniCursusesOutputSchema = z.object({
  titel: z.string(),
  afbeelding: z
    .object({
      id: z.string(),
    })
    .optional()
    .nullable(),
  minicursussen: z.array(directusMiniCursusOutputSchema),
});
