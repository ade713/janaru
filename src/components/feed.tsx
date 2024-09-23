import { Entori } from "./entori";
import { checkAuth, getEntorisByAuthorId } from "@/lib/server-utils";

export async function Feed() {
  const session = await checkAuth();
  const entorisData = await getEntorisByAuthorId(session.user.id);

  return (
    <section className="col-span-6 overflow-scroll mr-6">
      <h2 className="text-xl text-center mb-5">Your Entoris</h2>
      <div className="scroll">
        {entorisData.map((entori, i) => {
          const dateString = entori.createdAt.toDateString();
          return <Entori key={i} date={dateString} content={entori.content} />;
        })}
      </div>
    </section>
  );
}
