import { EntoriForm } from "./entori-form";

export function CreateEntori() {
  return (
    <section className="col-span-3 flex flex-col h-full">
      <h2 className="text-xl text-center mb-5">Create Entori</h2>
      <EntoriForm />
    </section>
  );
}
