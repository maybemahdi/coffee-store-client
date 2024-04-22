import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="font-rancho my-12 mx-auto w-[85%]">
      <div className="flex items-center flex-col gap-4 justify-center">
        <h3 className=" text-[28px] text-[#331A15] font-bold ">
          Our Popular Products
        </h3>
        <Link to={"/addcoffee"}>
          <button className="bg-[#E3B577] px-3 py-2 border border-black rounded-md hover:bg-[#b68d58] transition-all duration-500 text-white font-semibold">
            Add a Coffee
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
