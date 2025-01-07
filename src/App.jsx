const App = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center relative"
      style={{
        background: "linear-gradient(to bottom, #031F36, #0A599C)",
      }}
    >
      <img className="absolute top-0 w-full sm:w-[80%] h-full object-cover" src="./images/bg.png" alt="" />
      <img className="p-4" src="./images/full_logo.png" alt="" />
      <img className="absolute w-1/2 sm:w-auto left-[52%] top-[54%] sm:left-[53%] sm:top-[58%]" src="./images/abc.png" alt="" />
    </div>
  );
};

export default App;
