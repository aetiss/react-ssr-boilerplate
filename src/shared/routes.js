import Home from "./home/Home";
import collections from "./collections/collections";
import productDetails from "./productDetails/productDetails";

const routes = [
  // {
  //   path: "/",
  //   exact: true,
  //   component: Home
  // },
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/collections/:id",
    component: collections,
    exact: true,
    metaProps: {
      trending: {
        name: "title",
        value: "Top Trending products"
      }
    }
  },
  {
    path: "/products/:id",
    component: productDetails,
    exact: true
  }
];

export default routes;
