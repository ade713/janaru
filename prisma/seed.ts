import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData1: Prisma.UserCreateInput = {
  email: "example1@gmail.com",
  name: "Earth Wind-Fire",
  hashedPassword: "",
  entoris: {
    create: [
      {
        content: `
          Do you remember
          The 21st night of September?
          Love was changin' the minds of pretenders
          While chasin' the clouds away
        `,
      },
      {
        content: `
          Our hearts were ringin'
          In the key that our souls were singin'
          As we danced in the night, remember
          How the stars stole the night away, oh, yeah
        `,
      },
      {
        content: `
          Hey, hey, hey
          Ba-dee-ya, say, do you remember?
          Ba-dee-ya, dancin' in September
          Ba-dee-ya, never was a cloudy day
        `,
      },
      {
        content: `
          Now December
          Found the love that we shared in September
          Only blue talk and love, remember
          The true love we share today
        `,
      },
      {
        content: `
          There was a
          Ba-dee-ya (dee-ya, dee-ya), say, do you remember?
          Ba-dee-ya (dee-ya, dee-ya), dancin' in September
          Ba-dee-ya (dee-ya, dee-ya), golden dreams were shiny days
        `,
      },
    ],
  },
};
const userData2: Prisma.UserCreateInput = {
  email: "example2@gmail.com",
  name: "DMX",
  hashedPassword: "",
  entoris: {
    create: [
      {
        content: `
          Hey yo I'm slipping, I'm falling, I can't get up
          Hey yo I'm slipping, I'm falling, I can't get up
          Hey yo I'm slipping, I'm falling, I gotsta get up
          Get back on my feet so I can tear shhhh
        `,
      },
      {
        content: `
          I been through mad different phases
          Like mazes to find my way
          And now I know that happy days are not far away
          If I'm strong enough I'll live long enough
          To see my kids doing something more constructive with their time, than bids
        `,
      },
      {
        content: `
          know because I've been there
          Now I'm in there (uh)
          Sit back and look at what it took for me to get there (Uh)
          First came the (woo!) the drama with my mama
          She got on some fly (what!)
       `,
      },
    ],
  },
};
const userData3: Prisma.UserCreateInput = {
  email: "example3@gmail.com",
  name: "Future",
  hashedPassword: "",
  entoris: {},
};

const usersData = [userData1, userData2, userData3];

async function main() {
  console.log(`Start seeding ...`);

  usersData.forEach(async (userData) => {
    const hashedPassword = await bcrypt.hash("example", 10);
    userData.hashedPassword = hashedPassword;

    await prisma.user.create({
      data: userData,
    });
  });

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
