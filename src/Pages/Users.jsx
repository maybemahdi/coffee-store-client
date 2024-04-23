import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "../components/Nav";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
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
        fetch(`https://coffee-store-server-sigma-teal.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Nav />
      <div className="overflow-x-auto mx-auto w-[85%] my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Email</th>
              <th>Last Logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamic rows */}
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    title="Delete User"
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
