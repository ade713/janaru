"use client";

import { SubmitButton } from "@/components/submit-button";
import { addEntori } from "@/actions/actions";

export function EntoriForm() {
  const handleAddEntori = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entoriData = Object.fromEntries(formData.entries());

    e.currentTarget.reset();

    await addEntori(entoriData);
  };

  return (
    <form onSubmit={handleAddEntori} className="h-1/2 text-center">
      <label htmlFor="content" />
      <textarea
        className="w-full h-full border-2 rounded-md border-green-900/40 bg-yellow-100 mb-3 resize-none"
        id="content"
        name="content"
        placeholder="What's up today?"
        maxLength={500}
      />
      <SubmitButton>Submit Entori</SubmitButton>
    </form>
  );
}
