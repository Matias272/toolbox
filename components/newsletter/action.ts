"use server";

import z from "zod";
import { subscribeNewsletter } from "@/lib/api";

const newsletterSchema = z.object({
  email: z.string().email("Indtast en gyldig e-mailadresse"),
});

export type NewsletterState = {
  email?: string;
  error?: string;
  message?: string;
  success?: boolean;
};

export default async function newsletterAction(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = formData.get("email") as string;
  const validated = newsletterSchema.safeParse({ email });

  if (!validated.success) {
    return {
      email,
      error: validated.error.flatten().fieldErrors.email?.[0],
    };
  }

  try {
    await subscribeNewsletter(validated.data.email);
    return { email: "", message: "Tak for din tilmelding!", success: true };
  } catch {
    return {
      email,
      error: "Der opstod en fejl. Prøv igen.",
    };
  }
}
