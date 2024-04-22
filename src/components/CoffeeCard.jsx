import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, taste, photo } = coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-fwdh07t6g-mahdi-hasan-official.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="shadow-xl bg-white rounded-lg p-5">
      <div className="flex md:flex-row flex-col gap-5 items-center justify-between">
        <div className="basis-1/2">
          <img className="w-[185px] h-[200px] rounded-lg" src={photo} alt="" />
        </div>
        <div className="basis-1/2 text-xl flex gap-5 flex-col md:flex-row justify-between items-center">
          <div>
            <p>Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="join md:join-vertical gap-3">
            <Link to={`/coffee-details/${_id}`}>
              <button className="bg-[#d79c3c] hover:bg-[#b88531] transition-all duration-500 px-3 py-2 join-item">
                Details
              </button>
            </Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="bg-[#3c96d7] hover:bg-[#2e7bb1] transition-all duration-500 px-3 py-2 join-item">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-[#f04bed] hover:bg-[#cb39c8] transition-all duration-500 px-3 py-2 join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
