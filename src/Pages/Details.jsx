import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const coffee = useLoaderData();
//   const { id } = useParams();
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="flex my-12 mx-auto w-[85%] gap-10 md:flex-row flex-col items-center justify-center">
      <div className="basis-1/2 w-full h-[590px]">
        <img className="h-full w-full rounded-lg" src={photo} alt="" />
      </div>
      <div className="basis-1/2 font-bold font-rancho text-[32px]">
        <p>Name: {name}</p>
        <p>Chef: {chef}</p>
        <p>Taste: {taste}</p>
        <p>Name: {supplier}</p>
        <p>Chef: {category}</p>
        <p>Taste: {details}</p>
      </div>
    </div>
  );
};

export default Details;
