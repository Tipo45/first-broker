import { useEffect } from "react";
import {
  FaChartLine,
  FaDollarSign,
  FaExchangeAlt,
  FaUserAlt,
  FaWallet,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Transactions from "./Transactions";
import { Link } from "react-router-dom";
import Accountreport from "./Accountreview";
import { useClientData } from "../../hooks/useClientData";

const Userdashbboard = () => {
  const { data } = useClientData();

  // Display toast on successful registration or login
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log("Query Parameters:", searchParams.toString()); // Debugging line
  
    if (searchParams.get("registered") === "true") {
      toast.success("Successfully registered!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      setTimeout(() => {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }, 100);
    }
  
    if (searchParams.get("login") === "success") {
      toast.success("Successful login!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      setTimeout(() => {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }, 100);
    }
  }, []);

  return (
    <section>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer />

      {/* Dashboard content */}
      <div
        className="bg-gray-200 p-4 rounded-lg mt-1 w-full animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex justify-between">
          <h5
            className="font-semibold animate-zoom-in"
            style={{ animationDelay: "0.5s" }}
          >
            Hi,{" "}
            <span className="text-teal font-semibold">{data?.firstname}</span>
          </h5>
          <Link to="/user_account/account-information">
            <div
              className="bg-dark-blue p-4 rounded-3xl group hover:bg-charcoal-gray animate-zoom-in"
              style={{ animationDelay: "0.6s" }}
            >
              <FaUserAlt className="text-teal group-hover:text-white-rice" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h4 className="text-gray-400 text-xl mb-2">Balance:</h4>
          <h3 className="text-lg flex items-center">
            <FaDollarSign className="mr-1" />
            <span
              className="text-teal font-medium animate-zoom-in"
              style={{ animationDelay: "1s" }}
            >
              40.00
            </span>
          </h3>
        </div>

        <div className="flex justify-center gap-x-8 items-center mt-8">
          <Link to="/user_account/my-trades">
            <div className="flex flex-col items-center text-center">
              <div
                className="p-3 bg-charcoal-gray rounded-3xl flex justify-center animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <FaExchangeAlt className="text-2xl text-white-rice" />
              </div>
              <p
                className="mt-2 text-sm font-medium text-black-spider animate-zoom-in"
                style={{ animationDelay: "0.5s" }}
              >
                Trades
              </p>
            </div>
          </Link>

          <Link to="/user_account/crypto-accounts">
            <div className="flex flex-col items-center text-center">
              <div
                className="p-3 bg-charcoal-gray rounded-3xl flex justify-center animate-fade-up"
                style={{ animationDelay: "0.6s" }}
              >
                <FaWallet className="text-2xl text-white-rice" />
              </div>
              <p
                className="mt-2 text-sm font-medium text-black-spider animate-zoom-in"
                style={{ animationDelay: "0.7s" }}
              >
                Crypto
              </p>
            </div>
          </Link>

          <Link to="/user_account/my-investments">
            <div className="flex flex-col items-center text-center">
              <div
                className="p-3 bg-charcoal-gray rounded-3xl flex justify-center animate-fade-up"
                style={{ animationDelay: "0.8s" }}
              >
                <FaChartLine className="text-2xl text-white-rice" />
              </div>
              <p
                className="mt-2 text-sm font-medium text-black-spider animate-zoom-in"
                style={{ animationDelay: "0.9s" }}
              >
                Investments
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 tablet:max-4xl:grid-cols-2">
        <div
          className="p-4 mt-2 bg-gray-400 rounded-lg animate-fade-right"
          style={{ animationDelay: "0.1s" }}
        >
          <Accountreport />
        </div>

        <div
          className="p-4 mt-2 mb-1 bg-charcoal-gray rounded-lg animate-fade-left"
          style={{ animationDelay: "0.1s" }}
        >
          <Transactions />
        </div>
      </div>
    </section>
  );
};

export default Userdashbboard;
