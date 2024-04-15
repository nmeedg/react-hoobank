
function CTA() {
  return (
    <div className="flex items-center p-8 rounded-2xl bg-gradient-to-br shadow-inner from-gray-600 to-slate-950 mx-10 my-3">
        <div className="w-2/3">
            <h2 className="uppercase text-3xl font-bold">Let's try our service now !</h2>
            <p className=" text-dimWhite mt-5">
            Below is a comparison of the difference between Django vs React regarding scalability and performance considerations
            </p>
        </div>
        <div className="w-1/3 flex justify-center items-center">
        <button className=" cursor-pointer py-2 px-4 bg-gradient-to-br outline-none hover:bg-none hover:border hover:text-cyan-500 hover:border-cyan-400 shadow-inner rounded-md mt-4 font-medium from-slate-300 to-sky-400 text-black">Get started</button>
        </div>
    </div>
  )
}

export default CTA