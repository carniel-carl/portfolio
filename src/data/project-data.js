import TodoImg from "./../assets/images/projects/todo.png";
// import EstoreImg from "./../assets/images/projects/estore.png";
// import TrgstImg from "./../assets/images/projects/trgst.png";
import greenImg from "./../assets/images/projects/greens.png";
// import pouchImg from "./../assets/images/projects/pouch.png";
import pouchSwapImg from "./../assets/images/projects/pouchswap.png";
import zubionImg from "./../assets/images/projects/zubion.png";
import jollofImg from "./../assets/images/projects/jollofdiary.png";

const projectData = [
  {
    name: "Creator Economy IQ",
    img: jollofImg,
    live: "https://www.thejollofdiary.com/",
    code: "https://github.com/trgst/trgst_frontend",
    description:
      "Creator Economy IQ is a premier data and business insights resource platform, illuminating the business and commercial aspects of the African creator economy.",
    stack: [
      "Nextjs",
      "TailwindCss",
      "Typescript",
      "Prisma",
      "MongoDb",
      "NextAuth",
      "Disqus",
    ],
  },
  {
    name: "Greens review",
    img: greenImg,
    live: "https://www.greensreviews.store/",
    code: "https://github.com/carniel-carl/greenspace",
    description:
      "An Ecommerce platform to sell phone cables, managed by a custom built inventory admin dashboard.",
    stack: [
      "Nextjs",
      "TailwindCss",
      "Typescript",
      "ShadCn",
      "NextAuth",
      "MongoDb",
      "Prisma",
    ],
  },
  {
    name: "Zubion Logistics",
    img: zubionImg,
    live: "https://www.zubionlogistics.com/",
    code: "https://github.com/carniel-carl/zubion",
    description:
      "Looking for a way to save time and money on your Amazon business? Zubion Logistics FBA fulfillment services take care of everything from picking and packing to shipping to your customers",
    stack: ["Nextjs", "TailwindCss", "Typescript", "ShadCn", "Google Form"],
  },

  {
    name: "Pouch Swap",
    img: pouchSwapImg,
    live: "https://www.pouchswap.xyz/",
    code: "https://github.com/Bravark/pouch-swap-web",
    description:
      "The fastest, safest and cheapest token swapping and bridging protocol.",
    stack: ["Nextjs", "TailwindCss", "Typescript", "ShadCn"],
  },
  // {
  //   name: "TRGST",
  //   img: TrgstImg,
  //   live: "https://trgst.store/",
  //   code: "https://github.com/trgst/trgst_frontend",
  //   description: "Trgst is a dummy clothing Ecommerce platform. ",
  //   stack: ["React", "React Router", "SASS/SCSS", "AntDesign"],
  // },
  {
    name: "Todo App",
    img: TodoImg,
    live: "https://todo-carniel-app.vercel.app/",
    code: "https://github.com/carniel-carl/todo",
    description:
      "A Demo project built with react for task management with persistent data storage.",
    stack: ["ReactJs", "SASS/SCSS", "State Management"],
  },
  // {
  //   name: "Othrika",
  //   img: othImg,
  //   live: "https://othrika-store-staging.vercel.app",
  //   code: "https://github.com/trgst/othrika_store_frontend",
  // },
  // {
  //   name: "Pouch Pay",
  //   img: pouchImg,
  //   live: "https://pouchpay.vercel.app",
  //   code: "https://github.com/pouchPay/pouchPay_frontend",
  // },

  // {
  //   name: "eStore",
  //   img: EstoreImg,
  //   code: "https://github.com/carniel-carl/eStore",
  // },
];

export default projectData;
