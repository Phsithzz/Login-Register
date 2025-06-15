import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-r from-black via-white to-[#4b4b4d] hover:bg-gradient-to-r
        hover:from-[#4b4b4d] hover:via-white hover:to-black transition ease-in duration-400  flex justify-center items-center"
    >
      <div className="bg-white p-8 shadow-2xl w-100 rounded-xl">
        <h2 className="text-center text-2xl font-semibold mb-6">Register</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md placeholder:p-4 h-12"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded-md placeholder:p-4 h-12"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-300 rounded-md placeholder:p-4 h-12"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <button
              type="submit"
              className=" bg-black text-white font-semibold text-xl text-center p-2 rounded-xl transition ease-in duration-400 hover:bg-white hover:text-black hover:border active:bg-green-400"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="flex flex-col mt-4">
          <Link
            to="/login"
            type="button"
            className=" bg-black text-white font-semibold text-xl text-center p-2 rounded-xl transition ease-in duration-400 hover:bg-white hover:text-black hover:border active:bg-green-400"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
