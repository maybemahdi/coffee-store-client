import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Nav from "../components/Nav";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        fetch("https://coffee-store-server-sigma-teal.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              form.reset();
              Swal.fire({
                title: "Good job!",
                text: "You just added a coffee!",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Nav />
      <div className="md:w-[30%] w-[90%] mx-auto my-10">
        <h3 className="text-2xl font-bold text-center">Register User</h3>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="tet"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
        <p className="flex items-center justify-center">
          Already have a Account?{" "}
          <Link className="text-blue-500 font-semibold ml-2" to={"/login"}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
