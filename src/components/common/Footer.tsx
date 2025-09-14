import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { footerMenuItems } from "../../data";
import Logo from "/mohanta_logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="relative bg-[#032625] text-white">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-black-300">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link to="/" className="inline-block text-center">
          <img
            src={Logo}
            alt="Mohanta Construction"
            className="object-contain h-16 bg-white sm:h-20"
          />
          <h1 className="text-2xl font-bold text-white">
          MOHANT CONSTRUCTION
          </h1>
            </Link>

            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                "Mohanta Construction is a premier Building Development firm delivering
                cutting-edge solutions that drive innovation and growth for
                businesses of all sizes."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            {footerMenuItems?.map((menu) => (
              <div key={menu.title}>
                <p className="font-semibold tracking-wide text-white text-teal-accent-400">
                  {menu.title}
                </p>
                <ul className="mt-2 space-y-2">
                  {menu.items?.map((item, idx) => (
                    <li key={idx} className="mt-6">
                      <Link
                        to={`/${item.link}`}
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-[#68b0eb] hover:underline text-sm font-md"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-200 sm:flex-row">
          <p className="text-sm text-white">
            <span className="text-[18px] mb-2 font-bold">©</span> Copyright{" "}
            {year}{" "}
            <span className="text-[#3689ce] font-bold">
              Mohanta Construction.
            </span>{" "}
            All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <FaYoutube
                className="text-2xl hover:text-gray-500"
                style={{ color: "#FF0000" }}
              />{" "}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <FaInstagram
                className="text-2xl hover:text-gray-500"
                style={{ color: "#E1306C" }}
              />{" "}
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <FaFacebook
                className="text-2xl hover:text-gray-500"
                style={{ color: "#1877F2" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:bg-white"
            >
              <FaLinkedin
                className="text-2xl hover:text-black"
                style={{ color: "#0077B5" }}
              />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <FaXTwitter className="text-xl p-[2px] bg-black rounded-[3px] text-white hover:text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
