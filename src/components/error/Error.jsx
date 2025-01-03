function Error() {
  return (
    <div className="flex flex-col justify-around items-center h-screen py-[30vh] lg:py-36">
      <div className="text-center">
        <h1 className="text-4xl lg:text-8xl opacity-50 font-bold">Error 404</h1>
        <h1 className="text-3xl lg:text-6xl opacity-50 font-bold">
          Page Not Found
        </h1>
      </div>
      <button className="btn btn-ghost border-white/30">Back To Home</button>
    </div>
  );
}

export default Error;
