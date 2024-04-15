import {features} from '../constants/constants'

function Business() {
  return (
    <section className="py-7 flex justify-between items-start">
      <div className="w-1/2">
      <h2 className="text-3xl font-bold uppercase">
        <span className=" leading-9">You do the business</span>  <br /> <span className="pt-5">we will handle money</span>
      </h2>
      <p className="py-6 text-dimWhite w-3/4">
      Django’s flexibility allows it to fit into virtually any web application project,
      With a large, active community, finding help, plugins, and additional resources is rarely an issue. Django’s comprehensive documentation is among the best in the open-source world
      </p>
      <button className=" cursor-pointer py-2 px-4 bg-gradient-to-r outline-none hover:bg-none hover:border hover:text-cyan-500 hover:border-cyan-400 shadow-inner rounded-md mt-4 font-medium from-slate-700 to-sky-400">Get started</button>
      </div>
      <div className="w-1/2">
        {features.map((feature,key)=> <div key={key} className='mb-4 p-3 flex items-center space-x-5 w-4/5 hover:rounded-xl hover:shadow-inner hover:cursor-pointer hover:bg-gradient-to-br hover:to-cyan-950 hover:from-slate-900'>
          <img src={feature.icon} alt={"icon"+key} className='w-[30px] h-[30px]' />
          <div>
            <h3 className='font-semibold'>{feature.title}</h3>
            <p className='text-dimWhite'>
              {feature.content}
            </p>
          </div>
        </div>)
        }
      </div>

    </section>
  );
}

export default Business;
