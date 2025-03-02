import masterimg from "../../assets/Images/Mastercard_Symbol_2.webp";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdRadioButtonOn,
} from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <footer className="w-full py-16 px-5 bg-dark-blue shadow-[0px_-4px_10px_rgba(0,0,0,0.2)]">
      {/* Call to Action Section */}
      <section className="text-center mb-10">
        <p className="mb-6 text-white-rice text-3xl xl:text-4xl font-semibold">
          Join more than 1,500 investors worldwide that buy, sell & swap crypto
          with us.
        </p>
        <div className="w-full flex justify-center">
          <Link to="/registration">
            <button
              className="flex items-center gap-2 cursor-pointer text-lg font-medium bg-teal rounded-2xl px-8 py-4 text-white 
  hover:bg-darker-teal xl:text-center  group"
            >
              Create an account
              <MdKeyboardArrowRight className="text-3xl mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-400 my-10 mb-20" />

      <section className="space-y-5">
        {/* Dropdown 1 */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown("dropdown1")}
          >
            <p className="text-lg text-white-rice">What we do?</p>
            {openDropdown === "dropdown1" ? (
              <IoIosArrowUp className="text-light-gray text-2xl transition-transform duration-300" />
            ) : (
              <IoIosArrowDown className="text-teal text-2xl transition-transform duration-300" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openDropdown === "dropdown1" ? "max-h-30 py-3" : "max-h-0 py-0"
            }`}
          >
            <div className="pl-2">
              <ul>
                <li className="p-2 text-white flex">
                  <IoMdRadioButtonOn className="mt-1 mr-4 text-gray-500" />{" "}
                  Asset Management
                </li>
                <li className="p-2 text-white flex">
                  <IoMdRadioButtonOn className="mt-1 mr-4 text-gray-500" />{" "}
                  Brokerage
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-5" />

        {/* Dropdown 2 */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown("dropdown2")}
          >
            <p className="text-lg text-white-rice">About Us</p>
            {openDropdown === "dropdown2" ? (
              <IoIosArrowUp className="text-light-gray text-2xl transition-transform duration-300" />
            ) : (
              <IoIosArrowDown className="text-teal text-2xl transition-transform duration-300" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openDropdown === "dropdown2" ? "max-h-30 py-3" : "max-h-0 py-0"
            }`}
          >
            <div className="pl-2">
              <ul>
                <li className="p-2">
                  <Link to="/about-devs/tipo-dev" className="text-teal underline">
                    Tipo Developers
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/about-devs/meet-the-team" className="text-teal underline">
                    Meet the Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-5" />

        {/* Contact Link */}
        <div>
          <a href="mailto:tipo4542@gmail.com" className="text-lg text-white-rice">
            Contact
          </a>
        </div>
      </section>

      <hr className="border-t border-gray-400 my-20" />

      {/* Newsletter Section */}
      <section className="text-center bg-light-gray rounded-2xl p-6 mb-10">
        <h4 className="text-2xl text-black-spider font-semibold mb-3">
          Sign up for our Newsletter
        </h4>
        <p className="mb-5 text-blue-950 text-lg">
          You&apos;ll receive exclusive market analysis from our expert team of
          brokers and traders, delivered weekly.
        </p>
        <form className="flex flex-col xl:flex-row justify-center items-center gap-4">
          <input
            type="email"
            className="px-4 py-3 border border-gray-300 bg-white rounded-lg w-full xl:w-80"
            placeholder="Enter your email"
            required
          />
          <Link to="">
            <button className="text-md cursor-pointer bg-teal rounded-lg px-6 py-3 text-white hover:bg-darker-teal">
              Sign up
            </button>
          </Link>
        </form>
      </section>

      {/* Social Media Links */}

      {/* Support & Live Chat */}
      <section className="text-center mt-16">
        <div className="bg-charcoal-gray p-6 rounded-lg">
          <p className="text-xl text-white-rice font-semibold">
            Need assistance?
          </p>
          <p className="text-md text-gray-300">
            Live chat with our service team for information & assistance.
          </p>
          <div className="bg-light-gray flex justify-around items-center p-5 mt-4 rounded-lg">
            <img src={masterimg} alt="Mastercard" className="w-20" />
            <p className="flex items-center gap-2">
              Live Chat With{" "}
              <Link to="#" className="text-blue-500 hover:underline">
                Expert
              </Link>
              <FaArrowTurnDown />
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-400 my-10" />

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <p className="text-teal">
          © 2025 Tipo Developers. All Rights Reserved.
        </p>

        <section className="text-center">
          {/* <h3 className="text-2xl text-white font-semibold">Connect With Us</h3> */}
          <ul className="flex justify-center gap-8 mt-6">
            <li>
              <Link to="/">
                <FaTelegram className="text-3xl cursor-pointer text-blue-300 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaWhatsapp className="text-3xl cursor-pointer text-green-300  transition-transform duration-300 ease-in-out hover:-translate-y-2" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaTwitter className="text-3xl cursor-pointer text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
              </Link>
            </li>
          </ul>
        </section>
        
      </div>
    </footer>
  );
};

export default Footer;
