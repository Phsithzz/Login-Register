import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className=" bg-gradient-to-r from-black via-white to-[#4b4b4d] hover:bg-gradient-to-r
        hover:from-[#4b4b4d] hover:via-white hover:to-black transition ease-in duration-400 w-full min-h-screen flex justify-center items-center "
    >
      <div className="w-120 h-120 flex justify-center items-center gap-8 bg-white shadow-2xl rounded-xl ">
        <Link to="/register">
          <button
            type="button"
            className="w-32 cursor-pointer p-4 bg-black text-white text-2xl font-semibold rounded-xl transition ease-in duration-400 hover:bg-white  hover:text-black  hover:border"
          >
            Register
          </button>
        </Link>

        <Link to="/login">
          <button
            type="button"
            className="w-32 cursor-pointer p-4 bg-black text-white text-2xl font-semibold rounded-xl transition ease-in duration-400 hover:bg-white  hover:text-black  hover:border"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
