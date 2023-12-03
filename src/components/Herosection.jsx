import HeroImg from "../hero-right-img.png";
function Herosection() {
  return (
    <>
      <div className="container scroll-smooth flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1
            className="text-5xl font-bold"
            style={{ letterSpacing: "5px", fontFamily: "sun-sarif" }}
          >
            Raja
          </h1>
          <h1
            className="text-5xl font-bold leadi sm:text-6xl "
            style={{
              letterSpacing: "5px",
              fontFamily: "sun-sarif",
              color: "#6674CC",
            }}
          >
            Kumar.
          </h1>
          <p
            className="mt-1 mb-2 text-lg sm:mb-12"
            style={{
              letterSpacing: "3px",
              fontFamily: "sun-sarif",
              color: "#6674CC",
            }}
          >
            Crafting Innovative Code Solutions.
          </p>
          <span
            className="text-sm"
            style={{
              letterSpacing: "2px",
              fontFamily: "sun-sarif",
              color: "gray",
            }}
          >
            A highly motivated software engineer who enjoys real world problem
            solving. The ability to stay calm when code doesn't work is my
            superpower.
          </span>
        </div>
        <div className="flex items-center justify-center w-full p-6 mt-2 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
          <img
            src={HeroImg}
            alt="Hero-mg"
            className="object-contain w-full   sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </>
  );
}

export default Herosection;
