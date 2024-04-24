import TodoImg from "./../assets/images/projects/todo.png";
import EstoreImg from "./../assets/images/projects/estore.png";
import TrgstImg from "./../assets/images/projects/trgst.png";
import othImg from "./../assets/images/projects/othrika.png";
import pouchImg from "./../assets/images/projects/pouch.png";

const projectData = [
  {
    name: "TRGST",
    img: TrgstImg,
    live: "https://trgst.store/",
    code: "https://github.com/trgst/trgst_frontend",
  },
  {
    name: "Othrika",
    img: othImg,
    live: "https://othrika-store-staging.vercel.app",
    code: "https://github.com/trgst/othrika_store_frontend",
  },
  {
    name: "Pouch Pay",
    img: pouchImg,
    live: "https://pouchpay.vercel.app",
    code: "https://github.com/pouchPay/pouchPay_frontend",
  },
  {
    name: "Todo App",
    img: TodoImg,
    live: "https://todo-carniel-app.vercel.app/",
    code: "https://github.com/carniel-carl/todo",
  },
  {
    name: "eStore",
    img: EstoreImg,
    code: "https://github.com/carniel-carl/eStore",
  },
];

export default projectData;
