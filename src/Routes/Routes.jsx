import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:5000/coffees"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: "/coffee-details/:id",
    element: <Details />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
]);
