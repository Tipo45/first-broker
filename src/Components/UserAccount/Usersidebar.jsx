import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExchangeAlt, FaUser, FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import PropTypes from "prop-types";
import { logout } from "../../lib/pocketbase";


const Usersidebar = ({ activepage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && screenWidth <= 1920) {
        setIsExpanded(true); // Open sidebar in tablet:max-4xl
      } else {
        setIsExpanded(false); // Keep closed on smaller screens
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <section>
      <div className="flex">
      <div
      className={`bg-dark-blue text-white h-full fixed left-0 top-0 transition-all duration-300 ease-in-out flex flex-col ${
        isExpanded ? "w-35 tablet:w-45" : "w-16 tablet:max-4xl:w-15"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
      {isExpanded && <Link to="/"><h1 className="font-semibold text-lg">Tipo&apos;s Broker</h1></Link>}
      {!isExpanded && <Link to="/"><h1 className="font-semibold text-sm/5 -ml-1.5 tablet:max-4xl:hidden">Tipo&apos;s Broker</h1></Link>}

        
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-4">
        <ul>
          {[
            { to: "/user_account/dashboard", icon: <RxDashboard className="h-6 w-6" />, label: "Dashboard", key: "dashboard" },
            { to: "/user_account/my-trades", icon: <FaExchangeAlt className="h-6 w-6" />, label: "My Trades", key: "my-trades" },
            { to: "/user_account/crypto-accounts", icon: <FaWallet className="h-6 w-6" />, label: "Crypto", key: "crypto-accounts" },
            { to: "/user_account/my-investments", icon: <FaChartLine className="h-6 w-6" />, label: "My Investments", key: "my-investments" },
          ].map(({ to, icon, label, key }) => (
            <li key={key}>
              <Link
                to={to}
                className={`flex items-center p-3 transition-colors duration-200 relative group ${
                  activepage === key ? "bg-darker-teal" : "hover:bg-teal"
                }`}
              >
                {icon}
                {isExpanded && <span className="ml-2 text-sm">{label}</span>}
                {!isExpanded && (
                  <span className="absolute left-16 z-100 ml-2 px-2 py-1 bg-charcoal-gray text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="mt-auto p-4 border-t border-light-gray">
        <div className="flex items-center">
          <Link to="/user_account/account-information">{!isExpanded && <FaUser className="h-8 w-8 hover:text-teal" />}
          {isExpanded && (
            <div className="ml-0">
              <p className="text-sm font-medium mb-1">John Doe</p>
              <p className="text-xs text-gray-400">tipo4542@gmail.com</p>
            </div>
          )}</Link>
        </div>

        <button onClick={() => {logout(), navigate("/")}} className="mt-4 flex items-center p-2 rounded-lg hover:bg-red-500 transition-colors duration-200 w-full relative group">
          <FaSignOutAlt className="h-6 w-6" />
          {isExpanded && <span className="ml-2">Logout</span>}
          {!isExpanded && (
            <span className="absolute left-16 -ml-2 px-2 py-1 bg-red-500 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
    
      </div>
    </section>
  );
};

Usersidebar.propTypes = {
  activepage: PropTypes.string.isRequired,
};

export default Usersidebar;
