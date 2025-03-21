import { useState } from "react";
import { FaTimes, FaWhatsapp, FaTelegram, FaTwitter, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../../lib/pocketbase";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const isLoggedIn = isUserLoggedIn();

 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-15 bg-dark-blue shadow-md z-50">
      {/* Navbar */}
      <nav className="px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <h3
          className="text-3xl font-bold font-primary"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Link to="/" className="text-white">
            Tipo&apos;s
          </Link>
        </h3>

        {/* Links for Large Screens */}
        <section>
          <div className="hidden xl:flex items-center gap-10 ml-150">
            {/* Markets Dropdown */}
            <div className="group relative">
              <div
                className="flex items-center cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <p className="text-xl font-semibold text-white">Markets</p>
                <IoIosArrowDown className="text-white text-xl transition-transform duration-300 ml-1 mt-1 group-hover:rotate-180" />
              </div>
              <div className="absolute top-full left-0 bg-charcoal-gray rounded-lg opacity-0 group-hover:opacity-100 group-hover:max-h-30 transition-all duration-300 ease-in-out overflow-hidden max-h-0">
                <div className="pl-2 py-3">
                  <ul className="p-0">
                    <li className="p-2">
                      <Link
                        to="/about-us/asset-management"
                        className="text-white hover:text-black-spider"
                      >
                        Asset Management
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link
                        to="/about-us/asset-management"
                        className="text-white hover:text-black-spider"
                      >
                        Details
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Banking Services Dropdown */}
            <div className="group relative">
              <div
                className="flex items-center cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <p className="text-xl font-semibold text-white">
                  Banking Services
                </p>
                <IoIosArrowDown className="text-white text-xl transition-transform duration-300 mt-1 ml-1 group-hover:rotate-180" />
              </div>
              <div className="absolute top-full left-0 bg-charcoal-gray rounded-lg opacity-0 group-hover:opacity-100 group-hover:max-h-30 transition-all duration-300 ease-in-out overflow-hidden max-h-0">
                <div className="pl-2 py-3">
                  <ul className="p-0">
                    <li className="p-2">
                      <Link
                        to="/about-us/commission-account"
                        className="text-white hover:text-black-spider"
                      >
                        Commission Account
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link
                        to="/about-us/commission-account"
                        className="text-white hover:text-black-spider"
                      >
                        Standard Account
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trading Dropdown */}
            <div className="group relative">
              <div
                className="flex items-center cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                <p className="text-xl font-semibold text-white">Trading</p>
                <IoIosArrowDown className="text-white text-xl transition-transform duration-300 mt-1 ml-1 group-hover:rotate-180" />
              </div>
              <div className="absolute top-full left-0 bg-charcoal-gray rounded-lg opacity-0 group-hover:opacity-100 group-hover:max-h-30 transition-all duration-300 ease-in-out overflow-hidden max-h-0">
                <div className="pl-2 py-3">
                  <ul className="p-0">
                    <li className="p-2">
                      <Link
                        to="/about-us/brokerage"
                        className="text-white hover:text-black-spider"
                      >
                        Platform
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link
                        to="/about-us/brokerage"
                        className="text-white hover:text-black-spider"
                      >
                        Brokerage
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-in Button */}
        <ul className="hidden xl:flex space-x-10 text-3xl font-secondary">
          <li data-aos="zoom-in" data-aos-duration="2000">
          {isLoggedIn ? (
              <Link
                to="/user_account/dashboard"
                className="text-black-spider bg-light-gray hover:bg-black-spider hover:text-white p-2 rounded-xl flex items-center justify-center"
              >
                <FaUserCircle className="text-2xl " />
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-white bg-charcoal-gray hover:bg-white hover:text-black-spider p-2 rounded-xl"
              >
                Sign in
              </Link>
            )}  
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl cursor-pointer text-white font-bold focus:outline-none xl:hidden transition-transform duration-300 ease-in-out"
          data-aos="zoom-in"
          data-aos-duration="2000"
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
        <div className="space-y-6 mt-2 text-xl font-secondary text-left ">
          {/* Markets Dropdown */}
          <div>
            <div
              className={`flex justify-between items-center cursor-pointer ${
                isOpen ? "animate-fade-right" : "opacity-0"
              }`}
              style={{ animationDelay: isOpen ? "0.2s" : "0s" }}
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
                    <Link
                      to="/about-us/asset-management"
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-black-spider"
                    >
                      Asset Management
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/about-us/asset-management"
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-black-spider"
                    >
                      Details
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Banking Services Dropdown */}
          <div>
            <div
              className={`flex justify-between items-center cursor-pointer ${
                isOpen ? "animate-fade-right" : "opacity-0"
              }`}
              style={{ animationDelay: isOpen ? "0.4s" : "0s" }}
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
                    <Link
                      to="/about-us/commission-account"
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-black-spider"
                    >
                      Commission Account
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/about-us/commission-account"
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-black-spider"
                    >
                      Standard Account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trading Dropdown */}
          <div>
            <div
              className={`flex justify-between items-center cursor-pointer ${
                isOpen ? "animate-fade-right" : "opacity-0"
              }`}
              style={{ animationDelay: isOpen ? "0.6s" : "0s" }}
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
                    <Link
                      to="/about-us/brokerage"
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-black-spider"
                    >
                      Platform
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/about-us/brokerage"
                      onClick={closeMenu}
                      className="text-gray-700 hover:text-black-spider"
                    >
                      Brokerage
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Account Button */}
        {isLoggedIn ? (<div className="flex justify-center items-center mt-60 gap-5">
          <Link to="/user_account/dashboard">
            <button
              className={`px-6 py-3 text-xl cursor-pointer bg-charcoal-gray text-white font-semibold rounded-lg shadow-md hover:bg-dark-blue transition-transform duration-300 ease-in-out hover:-translate-y-2 ${
                isOpen ? "animate-fade-right" : "opacity-0"
              }`}
              style={{ animationDelay: isOpen ? "0.7s" : "0s" }}
            >
              My Account
            </button>
          </Link>
        </div>) : (<div className="flex justify-center items-center mt-60 gap-5">
          <Link to="/registration">
            <button
              className={`px-6 py-3 text-xl cursor-pointer bg-charcoal-gray text-white font-semibold rounded-lg shadow-md hover:bg-dark-blue transition-transform duration-300 ease-in-out hover:-translate-y-2 ${
                isOpen ? "animate-fade-right" : "opacity-0"
              }`}
              style={{ animationDelay: isOpen ? "0.7s" : "0s" }}
            >
              Sign up
            </button>
          </Link>

          <Link to="/login">
            <button
              className={`px-6 py-3 text-xl cursor-pointer bg-charcoal-gray text-white font-semibold rounded-lg shadow-md hover:bg-dark-blue transition-transform duration-300 ease-in-out hover:-translate-y-2 ${
                isOpen ? "animate-fade-left" : "opacity-0"
              }`}
              style={{ animationDelay: isOpen ? "0.7s" : "0s" }}
            >
              Login
            </button>
          </Link>
        </div>)}

        {/* Social Media Links */}
        <ul className="flex justify-center gap-6 mt-15 xl:hidden">
          <li
            className={isOpen ? "animate-fade-down" : "opacity-0"}
            style={{ animationDelay: isOpen ? "0.9s" : "0s" }}
          >
            <Link to="/">
              <FaTelegram className="text-3xl text-blue-500 cursor-pointer hover:text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
            </Link>
          </li>
          <li
            className={isOpen ? "animate-fade-down" : "opacity-0"}
            style={{ animationDelay: isOpen ? "1.1s" : "0s" }}
          >
            <Link to="/">
              <FaWhatsapp className="text-3xl text-green-500 cursor-pointer hover:text-green-400 transition-transform duration-300 ease-in-out hover:-translate-y-2" />
            </Link>
          </li>
          <li
            className={isOpen ? "animate-fade-down" : "opacity-0"}
            style={{ animationDelay: isOpen ? "1.3s" : "0s" }}
          >
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