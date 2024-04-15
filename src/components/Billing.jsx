import React from 'react'
import {bill,google,apple} from '../assets/index'

function Billing() {
  return (
    <section className="py-7 flex justify-between flex-row-reverse items-start">
      <div className="w-1/2 h-full flex flex-col justify-between">
      <h2 className="text-3xl font-bold uppercase">
        <span className=" leading-9">Easy control your</span>  <br /> <span className="pt-5">billing & invoicing</span>
      </h2>
      <p className="py-6 text-dimWhite w-3/4">
      Django follows a ‘monolithic’ approach, which may not be well-suited for microservices architectures where services are often built using different technologies. This can lead to issues when decoupling services for independent scaling or development.
      </p>
      <div className='my-5 flex space-x-7'>
      <img src={google} alt="google" className='cursor-pointer hover:scale-105 duration-200 overflow-hidden'/>
      <img src={apple} alt="apple" className='cursor-pointer hover:scale-105 duration-200'/>
      </div>
         </div>
      <div className="w-1/2 relative">
        <img src={bill} alt="bill" className=' w-[70%] object-contain object-center z-0' />
        <div className=' bg-gradient-to-tr from-slate-300 via-pink-400 to-cyan-900 w-1/3 h-[50x] absolute left-0 top-0 bottom-0 z-50 opacity-30 blur-3xl'></div>
      </div>

    </section>
  )
}

export default Billing
