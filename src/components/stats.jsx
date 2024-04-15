function Stats() {
  return (
    <div className=" w-screen py-10 flex justify-evenly items-center">
      <div className="flex space-x-2 items-center justify-start">
        <span className="font-bold text-3xl max-h-min">3800+</span> 
        <h2 className="text-xl text-dimWhite font-light capitalize">users active</h2>
      </div>
      <div className="flex space-x-2 items-center justify-start">
        <span className="font-bold text-3xl max-h-min">230+</span> 
        <h2 className="text-xl text-dimWhite font-light capitalize">trusted by company</h2>
      </div>
      <div className="flex space-x-2 items-center justify-start">
        <h2 className="font-bold text-3xl max-h-min">$230M+</h2> 
        <h2 className="text-xl text-dimWhite font-light capitalize">transactions</h2>
      </div>
    </div>
  );
}

export default Stats;
