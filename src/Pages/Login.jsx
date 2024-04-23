import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Nav from "../components/Nav";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://coffee-store-server-sigma-teal.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "yaaaaaa!",
              text: "You just Logged in!",
              icon: "success",
            });
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
        <h3 className="text-2xl font-bold text-center">Log In</h3>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <p className="flex items-center justify-center">
          New to our Website?{" "}
          <Link className="text-blue-500 font-semibold ml-2" to={"/register"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
