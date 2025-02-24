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
    <header className="fixed top-0 left-0 w-full h-15 bg-dark-blue shadow-md z-50">
      {/* Navbar */}
      <nav className="px-5 py-3 flex justify-between items-center">
        <h3 className="text-3xl font-bold font-primary">
          <Link to="/" className="text-white">Tipo&apos;s</Link>
        </h3>

        {/* Links for Large Screens */}
        <ul className="hidden xl:flex space-x-10 text-3xl font-secondary">
          <li>
            <Link
              to="/registration"
              className="text-white bg-transparent hover:bg-charcoal-gray p-2 rounded-xl"
            >
              Sign up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white bg-charcoal-gray hover:bg-white hover:text-black-spider p-2 rounded-xl"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl cursor-pointer text-white font-bold focus:outline-none xl:hidden transition-transform duration-300 ease-in-out"
        >
          {isOpen ? <FaTimes /> : <RiMenu2Line />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-15 right-0 w-full h-full bg-light-gray text-black-spider py-6 px-8 shadow-lg
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
              <p className="text-xl font-semibold">Markets</p>
              {openDropdown === "dropdown1" ? (
                <MdOutlineKeyboardArrowLeft className="text-teal text-3xl transition-transform duration-300" />
              ) : (
                <IoIosArrowDown className="text-charcoal-gray text-2xl transition-transform duration-300" />
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
                    <Link to="/asset-management" onClick={closeMenu} className="text-gray-700 hover:text-black-spider">Asset Management</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/asset-management" onClick={closeMenu} className="text-gray-700 hover:text-black-spider">Details</Link>
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
              <p className="text-xl font-semibold">Banking Services</p>
              {openDropdown === "dropdown3" ? (
                <MdOutlineKeyboardArrowLeft className="text-teal text-3xl transition-transform duration-300" />
              ) : (
                <IoIosArrowDown className="text-charcoal-gray text-2xl transition-transform duration-300" />
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
                    <Link to="/commission-account" onClick={closeMenu} className="text-gray-700 hover:text-black-spider">Commission Account</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/commission-account" onClick={closeMenu} className="text-gray-700 hover:text-black-spider">Standard Account</Link>
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
              <p className="text-xl font-semibold">Trading</p>
              {openDropdown === "dropdown2" ? (
                <MdOutlineKeyboardArrowLeft className="text-teal text-3xl transition-transform duration-300" />
              ) : (
                <IoIosArrowDown className="text-charcoal-gray text-2xl transition-transform duration-300" />
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
                    <Link to="/brokerage" onClick={closeMenu} className="text-gray-700 hover:text-black-spider">Platform</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/brokerage" onClick={closeMenu} className="text-gray-700 hover:text-black-spider">Brokerage</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Account Button */}
        <div className="flex justify-center items-center mt-60 gap-5">
          <Link to="/registration">
            <button className="px-6 py-3 text-xl cursor-pointer bg-charcoal-gray text-white font-semibold rounded-lg shadow-md hover:bg-dark-blue transition-transform duration-300 ease-in-out hover:-translate-y-2">
              Sign up
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-3 text-xl cursor-pointer bg-charcoal-gray text-white font-semibold rounded-lg shadow-md hover:bg-dark-blue transition-transform duration-300 ease-in-out hover:-translate-y-2">
              Login
            </button>
          </Link>
        </div>

        {/* Social Media Links */}
        <ul className="flex justify-center gap-6 mt-15 xl:hidden">
          <li>
            <Link to="/">
              <FaTelegram className="text-3xl text-blue-500 cursor-pointer hover:text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaWhatsapp className="text-3xl text-green-500 cursor-pointer hover:text-green-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTwitter className="text-3xl text-blue-600 cursor-pointer hover:text-blue-500 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
