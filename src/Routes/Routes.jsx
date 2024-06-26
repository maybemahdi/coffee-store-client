import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Details from "../Pages/Details";
// import Layout from "../Root/Layout";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Users from "../Pages/Users";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home/>,
  //   errorElement: <h1>404 page not found</h1>,
  // },
  {
    path: "/",
    element: <Home />,
    loader: () =>
      fetch("https://coffee-store-server-sigma-teal.vercel.app/coffees"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-sigma-teal.vercel.app/coffees/${params.id}`
      ),
  },
  {
    path: "/coffee-details/:id",
    element: <Details />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-sigma-teal.vercel.app/coffees/${params.id}`
      ),
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("https://coffee-store-server-sigma-teal.vercel.app/users"),
  },
]);
