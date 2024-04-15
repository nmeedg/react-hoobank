import { quotes } from "../assets/index";
import { feedback,clients } from "../constants/constants";

function Testimonials() {
  return (
    <section>
    <div>
      <div className="flex items-center">
        <h2 className="uppercase font-bold text-3xl w-1/2 leading-10">
          What people are <br /> saying about us
        </h2>

        <p className="text-dimWhite pr-24 w-2/3">
          React is not a framework but a JavaScript library developed by
          Facebook to create user interfaces. JavaScript is the web language
        </p>
      </div>
      <div className="py-8 flex items-center space-x-14 justify-center bg-opacity-50">
        {feedback.map((feed) => (
          <div key={feed.id} className="w-[27%] px-4 hover:bg-opacity-20 py-4 bg-opacity-30 hover:shadow-inner hover:bg-gradient-to-br  hover:from-gray-600 hover:to-slate-950 hover:rounded-xl hover:backdrop-opacity-30">
            <img src={quotes} alt="quotes" className="w-[25px] object-contain object-center mb-5" />
            <p className="w-4/5">
                {feed.content}
            </p>
            <div className="pt-7 flex items-center space-x-5">
                <img src={feed.img} alt="avatar" className="rounded-full w-12 object-cover object-center" />
                <div>
                    <h4 className=" font-bold">{feed.name}</h4>
                    <h5 className="text-dimWhite">{feed.title}</h5>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="py-9 flex justify-center space-x-16 items-center">
        {clients.map((media)=><div key={media.id}>
            <img src={media.logo} alt={media.id} className="w-[125px] object-cover object-center"/>
        </div>)}
    </div>
    </section>
  );
}

export default Testimonials;
