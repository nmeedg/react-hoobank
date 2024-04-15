import {card} from '../assets/index';

function CardDeal() {
  return (
    <section className="py-7 flex justify-between items-start my-5">
      <div className="w-1/2">
      <h2 className="text-3xl font-bold uppercase">
        <span className=" leading-9">Find better card</span>  <br /> <span className="pt-5">deal in few easy steps</span>
      </h2>
      <p className="py-6 text-dimWhite w-3/4 leading-7">
      React’s declarative nature allows developers to describe how UIs should look for different states in the application. This simplifies the coding process
      </p>
      <button className=" cursor-pointer py-2 px-4 bg-gradient-to-br outline-none hover:bg-none hover:border hover:text-cyan-500 hover:border-cyan-400 shadow-inner rounded-md mt-4 font-medium from-slate-300 to-sky-400 text-black">Get started</button>
      </div>
      <div className="w-1/2">
        <img src={card} alt="card" className='w-2/3 object-center object-contain' />
      </div>

    </section>
  )
}

export default CardDeal