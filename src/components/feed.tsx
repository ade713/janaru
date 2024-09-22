import { Entori } from "./entori";

export function Feed() {
  const entoris = [
    {
      date: "September 21, 2024",
      content: `
        Do you remember
        The 21st night of September?
        Love was changin' the minds of pretenders
        While chasin' the clouds away
      `,
    },
    {
      date: "September 21, 2024",
      content: `
        Our hearts were ringin'
        In the key that our souls were singin'
        As we danced in the night, remember
        How the stars stole the night away, oh, yeah
      `,
    },
    {
      date: "September 21, 2024",
      content: `
        Hey, hey, hey
        Ba-dee-ya, say, do you remember?
        Ba-dee-ya, dancin' in September
        Ba-dee-ya, never was a cloudy day
      `,
    },
    {
      date: "September 21, 2024",
      content: `
        Now December
        Found the love that we shared in September
        Only blue talk and love, remember
        The true love we share today
      `,
    },
    {
      date: "September 21, 2024",
      content: `
        There was a
        Ba-dee-ya (dee-ya, dee-ya), say, do you remember?
        Ba-dee-ya (dee-ya, dee-ya), dancin' in September
        Ba-dee-ya (dee-ya, dee-ya), golden dreams were shiny days
      `,
    },
  ];

  return (
    <section className="col-span-6 overflow-scroll mr-6">
      <h2 className="text-xl text-center mb-5">Your Entoris</h2>
      <div className="scroll">
        {entoris.map((entori, i) => (
          <Entori key={i} date={entori.date} content={entori.content} />
        ))}
      </div>
    </section>
  );
}
