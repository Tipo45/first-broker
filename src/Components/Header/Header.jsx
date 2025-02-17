import { useState } from "react";
import { FaTimes, FaWhatsapp, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-15 bg-amber-300 shadow-md z-50">
      {/* Navbar */}
      <nav className="px-5 py-3 flex justify-between items-center">
        <h3 className="text-3xl font-bold font-primary">
          <a href="#">Tipo&apos;s</a>
        </h3>

        {/* Links for Large Screens */}
        <ul className="hidden xl:flex space-x-10 text-3xl font-secondary">
          <li>
            <a
              href="#"
              className="text-black-spider bg-amber-50 hover:bg-amber-500 hover:text-white-rice p-2 rounded-xl"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white bg-amber-500 hover:bg-white-rice hover:text-black-spider p-2 rounded-xl"
            >
              Login
            </a>
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl cursor-pointer font-bold focus:outline-none xl:hidden transition-transform duration-300 ease-in-out"
        >
          {isOpen ? <FaTimes /> : <RiMenu2Line />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-15 right-0 w-full h-full bg-amber-900 text-white py-6 px-8 shadow-lg
          transform transition-all duration-300 ease-in-out xl:hidden ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        {/* Menu Items with Spacing */}
        <div className="space-y-6 mt-2 text-xl font-secondary text-left">
          {/* Markets Dropdown */}

          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("dropdown1")}
            >
              <p className="text-lg">Markets</p>
              {openDropdown === "dropdown1" ? (
                <MdOutlineKeyboardArrowLeft className="text-white-rice transition-transform duration-300" />
              ) : (
                <IoIosArrowDown className="text-white-rice transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === "dropdown1" ? "max-h-30 py-3" : "max-h-0 py-0"
              }`}
            >
              <div className="pl-2">
                <ul className="p-0">
                  <li className="p-2">
                    <a href="#">Asset Management</a>
                  </li>
                  <li className="p-2">
                    <a href="#">Details</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Banking Services Dropdown */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("dropdown3")}
            >
              <p className="text-lg">Banking Services</p>
              {openDropdown === "dropdown3" ? (
                <MdOutlineKeyboardArrowLeft className="text-white-rice transition-transform duration-300" />
              ) : (
                <IoIosArrowDown className="text-white-rice transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === "dropdown3" ? "max-h-30 py-3" : "max-h-0 py-0"
              }`}
            >
              <div className="pl-2">
                <ul className="p-0">
                  <li className="p-2">
                    <a href="#">Commission Account</a>
                  </li>
                  <li className="p-2">
                    <a href="#">Standard Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trading Dropdown */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("dropdown2")}
            >
              <p className="text-lg">Trading</p>
              {openDropdown === "dropdown2" ? (
                <MdOutlineKeyboardArrowLeft className="text-white-rice transition-transform duration-300" />
              ) : (
                <IoIosArrowDown className="text-white-rice transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === "dropdown2" ? "max-h-30 py-3" : "max-h-0 py-0"
              }`}
            >
              <div className="pl-2">
                <ul className="p-0">
                  <li className="p-2">
                    <a href="#">Platform</a>
                  </li>
                  <li className="p-2">
                    <a href="#">Brokerage</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Offshore Accounts */}
          <div>
            <a
              href="#"
              className="hover:bg-amber-300 rounded-2xl p-2 block"
              onClick={closeMenu}
            >
              Offshore Accounts
            </a>
          </div>

          {/* Credit Cards */}
          <div>
            <a
              href="#"
              className="hover:bg-amber-300 rounded-2xl p-2 block"
              onClick={closeMenu}
            >
              Credit Cards
            </a>
          </div>
        </div>

        {/* Account Button */}
        <div className="flex justify-center items-center mt-30 gap-5">
          <Link to="/registration">
            <button className="px-6 py-3 text-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 active:bg-amber-800 disabled:bg-amber-300 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              Sign up
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-3 text-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 active:bg-amber-800  disabled:bg-amber-300 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              Login
            </button>
          </Link>
        </div>

        {/* Social Media Links */}
        <ul className="flex justify-center gap-6 mt-15 xl:hidden">
          <li>
            <FaTelegram className="text-3xl hover:text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
          </li>
          <li>
            <FaWhatsapp className="text-3xl hover:text-green-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
          </li>
          <li>
            <FaTwitter className="text-3xl hover:text-blue-500 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
