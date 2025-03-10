import {
  FaArrowDown,
  FaArrowUp,
  FaAt,
  FaDollarSign,
  FaUserAlt,
  FaWallet,
} from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";
import { useClientData } from "../../hooks/useClientData";

const MyTrades = () => {
  const {data} = useClientData();
  return (
    <section>
      <div className="bg-gray-200 p-4 rounded-lg mt-1">
        <div className="flex justify-between">
        <h5 className="font-semibold">Hi, <span className="text-teal font-semibold">{data?.firstname}</span></h5>
          <Link to="/user_account/account-information">
            <div className="bg-dark-blue p-4 rounded-3xl group hover:bg-charcoal-gray">
              <FaUserAlt className="text-teal group-hover:text-white-rice" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h4 className="text-gray-400 text-xl mb-2">Balance:</h4>
          <h3 className="text-lg flex items-center">
            <FaDollarSign className="mr-1" />
            <span className="text-teal font-medium">40.00</span>
          </h3>
        </div>

        <div className="flex justify-center gap-x-8 items-center mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-2 bg-charcoal-gray rounded-3xl flex justify-center">
              <FaArrowDown className="text-2xl text-white" />
            </div>
            <p className="mt-2 text-lg text-black-spider font-semibold">Receive</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-2 bg-charcoal-gray rounded-3xl flex justify-center">
              <FaArrowUp className="text-2xl text-white" />
            </div>
            <p className="mt-2 text-lg text-black-spider font-semibold">Send</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 p-4 rounded-lg mt-1">
        <div>
          <p className="font-semibold text-lg mb-1">
            Send and receive cash securely with tipo&apos;s brokers.
          </p>
          <p className="text-gray-700 italic">*at little to no extra cost</p>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg mt-1">
        <div className="bg-gray-400 p-4 rounded-2xl mb-8 text-white flex justify-around group">
          <span className="mt-1 mr-1 text-lg">
            <FaWallet />
          </span>
          <h3>Send using Wallet Address</h3>
          <span className="mt-1">
            <IoIosArrowDropright className="text-2xl ml-2 transition-all duration-300 group-hover:translate-x-2" />
          </span>
        </div>
        <div className="bg-gray-400 p-4 rounded-2xl mb-8 text-white flex justify-around group">
          <span className="mt-1 text-lg">
            <FaAt />
          </span>
          <h3>Send using @username</h3>
          <span className="mt-1">
            <IoIosArrowDropright className="text-2xl ml-2 transition-all duration-300 group-hover:translate-x-2" />
          </span>
        </div>
        <div className="bg-gray-400 p-4 rounded-2xl mb-8 text-white flex justify-around group">
          <span className="mt-1 text-lg">
            <MdAccountBalance />
          </span>
          <h3>Send using Bank Transfer</h3>
          <span className="mt-1">
            <IoIosArrowDropright className="text-2xl ml-2 transition-all duration-300 group-hover:translate-x-2" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MyTrades;
