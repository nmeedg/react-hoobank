import { close, logo, menu } from "../assets/index";

function NavBar(params) {
  return (
    <nav className="bg-primary bg-opacity-40 backdrop-blur-xl text-dimWhite flex justify-between items-center py-4 pr-24 mb-10 z-50 sticky top-0 left-0 right-0">
      <img src={logo} alt="logo" className="object-center object-cover w-32 hover:drop-shadow-xl" />
      <div className="w-1/2 flex justify-evenly">
        <a href="Home" title="Home" className="text-white font-bold">
          Home
        </a>
        <a href="Features" title="Features">
          Features
        </a>
        <a href="Projects" title="Projects">
          Projects
        </a>
        <a href="Clients" title="Clients">
          Clients
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
