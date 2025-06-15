const Success = () => {
  return (
    <div
      className="bg-gradient-to-r from-black via-white to-[#4b4b4d] hover:bg-gradient-to-r
        hover:from-[#4b4b4d] hover:via-white hover:to-black transition ease-in duration-400 w-full min-h-screen flex justify-center items-center "
    >
      <div className="mt-40 w-120 h-120 flex justify-center items-center gap-8 bg-green-400 shadow-2xl rounded-xl animate-bounce">
        <h1 className=" text-white text-4xl font-semibold">SUCCESS</h1>
      </div>
    </div>
  );
};

export default Success;
