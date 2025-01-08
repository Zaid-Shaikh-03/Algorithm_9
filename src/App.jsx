const App = () => {
  return (
    <div
      className="w-[101%] h-[101vh] flex justify-center items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #031F36, #0A599C)",
      }}
    >
      <img
        className="absolute top-0 w-full h-full object-cover"
        src="./images/bg.png"
        alt="background"
      />
      <img
        className="p-4 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
        src="./images/full_logo.png"
        alt="logo"
      />
      <img
        className="absolute w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] left-[70%] transform -translate-x-1/2 top-[55%] sm:top-[56%] md:top-[56%]"
        src="./images/abc.png"
        alt="image"
      />
    </div>
  );
};

export default App;
