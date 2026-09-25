"use client";

import { useActionState } from "react";
import InputField from "@/components/ui/InputFields";
import newsletterAction, { NewsletterState } from "./actions";

const initialState: NewsletterState = { email: "" };

export default function EmailForm() {
  const [state, formAction, pending] = useActionState(
    newsletterAction,
    initialState,
  );

  return (
    <form action={formAction} className="flex gap-8 w-full max-w-2xl">
      <InputField
        className="border-b-2 focus:outline-none w-full"
        label=""
        type="email"
        name="email"
        placeholder="Indtast e-mail"
        status={state?.error ? [state.error] : undefined}
      />
      <button
        type="submit"
        disabled={pending}
        className="px-4 py-2 font-bold cursor-pointer border-b-2 border-t-2 hover:text-(pink-accent) hover:border-(pink-accent)"
      >
        {pending ? "Sending..." : "Suscribe"}
      </button>

      {state?.message && (
        <p className="text-green-500 text-sm">{state.message}</p>
      )}
    </form>
  );
}
