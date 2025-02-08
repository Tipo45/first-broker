import paypalimg from "../assets/Images/PayPal_Logo_Alternative_2.webp";
import stripeimg from "../assets/Images/Stripe_id7qRMcZ8P_0.svg";
import masterimg from "../assets/Images/Mastercard_Symbol_2.webp";
import visaimg from "../assets/Images/Visa Inc._idDUM8TcN7_1.png";
import { FaArrowRightLong, FaArrowTurnDown } from "react-icons/fa6";
import { FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <footer className="w-full py-16 px-5 bg-amber-300 shadow-[0px_-4px_10px_rgba(0,0,0,0.2)]">
      {/* Call to Action Section */}
      <section className="text-center mb-10">
        <p className="mb-6 text-3xl xl:text-4xl font-semibold">
          Join more than 1,500 investors worldwide that buy, sell & swap crypto
          with us.
        </p>
        <div className="w-full flex justify-center">
          <button
            className="flex items-center gap-2 text-md bg-amber-950 rounded-2xl px-8 py-4 text-white 
  hover:bg-amber-700 hover:text-lg xl:text-center transition-all duration-300 ease-in-out group"
          >
            Create an account
            <FaArrowRightLong className="text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </button>
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
            <p className="text-lg">What we do?</p>
            {openDropdown === "dropdown1" ? (
              <IoIosArrowUp className="text-gray-600 transition-transform duration-300" />
            ) : (
              <IoIosArrowDown className="text-gray-600 transition-transform duration-300" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openDropdown === "dropdown1" ? "max-h-30 py-3" : "max-h-0 py-0"
            }`}
          >
            <div className="pl-2">
              <li className="p-2">
                <a href="#">Asset Management</a>
              </li>
              <li className="p-2">
                <a href="#">Brokerage</a>
              </li>
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
            <p className="text-lg">About Us</p>
            {openDropdown === "dropdown2" ? (
              <IoIosArrowUp className="text-gray-600 transition-transform duration-300" />
            ) : (
              <IoIosArrowDown className="text-gray-600 transition-transform duration-300" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openDropdown === "dropdown2" ? "max-h-30 py-3" : "max-h-0 py-0"
            }`}
          >
            <div className="pl-2">
              <li className="p-2">
                <a href="#">Tipo Developers</a>
              </li>
              <li className="p-2">
                <a href="#">Meet the Team</a>
              </li>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-5" />

        {/* Contact Link */}
        <div>
          <a href="#" className="text-lg">
            Contact
          </a>
        </div>
      </section>

      <hr className="border-t border-gray-400 my-20" />

      {/* Newsletter Section */}
      <section className="text-center mb-10">
        <h4 className="text-2xl font-semibold mb-3">
          Sign up for our Newsletter
        </h4>
        <p className="mb-5 text-lg">
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
          <button className="text-md bg-amber-950 rounded-lg px-6 py-3 text-white hover:bg-amber-700">
            Sign up
          </button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="text-center mb-10">
        <h3 className="text-2xl font-semibold">Connect With Us</h3>
        <ul className="flex justify-center gap-6 mt-6">
          <li>
            <FaTelegram className="text-3xl text-blue-300 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
          </li>
          <li>
            <FaWhatsapp className="text-3xl text-green-300  transition-transform duration-300 ease-in-out hover:-translate-y-2" />
          </li>
          <li>
            <FaTwitter className="text-3xl text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
          </li>
        </ul>
      </section>

      {/* Support & Live Chat */}
      <section className="text-center mt-16">
        <div className="bg-amber-200 p-6 rounded-lg">
          <p className="text-xl font-semibold">Need assistance?</p>
          <p className="text-md">
            Live chat with our service team for information & assistance.
          </p>
          <div className="bg-amber-300 flex justify-around items-center p-5 mt-4 rounded-lg">
            <img src={masterimg} alt="Mastercard" className="w-20" />
            <p className="flex items-center gap-2">
              Live Chat With{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Expert
              </a>
              <FaArrowTurnDown />
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-400 my-10" />

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <p className="text-gray-700">© 2025 Tipo. All Rights Reserved.</p>

        {/* Payment Icons */}
        <ul className="flex justify-center gap-6 mt-5">
          {[paypalimg, stripeimg, masterimg, visaimg].map((img, index) => (
            <li key={index}>
              <a href="#">
                <img
                  src={img}
                  alt="Payment logo"
                  className="w-16 xl:w-20 bg-transparent hover:bg-blue-100 rounded-xl p-2 transition-all"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
