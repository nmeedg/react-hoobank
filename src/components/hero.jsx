import { discount, robot, arrowUp } from "../assets/index";

function Hero() {
  return (
    <header>

      <div className="flex my-10 font-poppins justify-between items-center">
        <div className="w-2/5">
        <div className="relative h-12 max-w-[370px] rounded-md overflow-hidden mb-10 ">
        <div className="text-white h-full bg-gradient-to-br from-slate-200 to-slate-900 opacity-15"></div>
        <div className="opacity-100 text-white absolute top-1 left-5">
          <img
            src={discount}
            alt="discount"
            className="inline-block w-10 mr-2 object-center"
          />
          <span className="font-medium">20% </span>
          <span className=" text-dimWhite">Discount for </span>
          <span className="font-medium">1 Month </span>
          <span className=" text-dimWhite">Account</span>
        </div>
      </div>
          <h1 className="text-[50px] font-bold uppercase flex flex-col">
            <span>The Next</span>
            <span className=" bg-gradient-to-r from-secondary via-cyan-100 to-cyan-500  text-transparent bg-clip-text inline-block">
              Generation
            </span>
            <span>Payment Method.</span>
          </h1>
        <p className="text-dimWhite mt-7">
        That’s it for this one! I hope you learned how to make gradient text with Tailwind CSS and how to take into account how the width of the text changes the gradient colors and how to fix it.
        </p>
        </div>
        <div className="w-[100px] h-[100px] bg-gradient-to-r from-secondary via-cyan-100 to-cyan-500 p-[2px] -translate-x-20 -translate-y-8 rounded-full overflow-hidden cursor-pointer hover:scale-105 duration-150">
          <div className="bg-primary w-full h-full rounded-full flex flex-col justify-center items-center">
            <div className="flex">
              <h2 className="bg-gradient-to-tr  text-xl from-secondary via-cyan-100 to-cyan-500  text-transparent bg-clip-text inline-block">
                Get
              </h2>
              <img src={arrowUp} alt="arrow" className="-rotate-6" />
            </div>
            <span className="bg-gradient-to-tr  text-xl from-secondary via-cyan-100 to-cyan-500  text-transparent bg-clip-text">
              Started
            </span>
          </div>
        </div>
        <div className="w-1/2 object-center object-cover relative">
          <img src={robot} alt="robot" className="w-full h-full z-50" />
          <div className=" z-10 opacity-15 blur-3xl bg-gradient-to-t from-pink-500 to-cyan-700 absolute left-0 bottom-0 top-0 h-full w-full">

          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
