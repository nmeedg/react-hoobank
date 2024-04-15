import { logo } from "../assets/index";
import { footerLinks, socialMedia } from "../constants/constants";
function Footer() {
  return (
    <footer className="mt-16">
      <div className="flex items-start justify-between">
        <div className="w-1/4 self-center">
          <img src={logo} alt="logo" className=" w-36 mb-5" />
          <p className=" text-dimWhite">
            Since it doesn’t dictate back-end operations
          </p>
        </div>
        {footerLinks.map((footerLink) => (
          <div>
            <h5 className="pb-3 font-bold">{footerLink.title}</h5>
            <ul>
              {footerLink.links.map((link) => (
                <li className=" text-dimWhite">
                  <a href={link.link} target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-4 py-5 border-t border-t-gray-500 mt-5 ">
        <h6>
          2023 Hoobank fake Realised by{" "}
          <span className=" italic font-extrabold text-secondary hover:cursor-pointer">
            Dev&IT Web{" "}
          </span>
        </h6>
        <div className="flex items-center space-x-6">
          {socialMedia.map((media) => (
            <span key={media.id} className=" hover:scale-110 duration-200 hover:rotate-12">
              <a href={media.link} target="_blank" rel="noopener noreferrer">
                <img src={media.icon} alt={media.id} />
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
