import {
  FaChartLine,
  FaDollarSign,
  FaExchangeAlt,
  FaUserAlt,
  FaWallet,
} from "react-icons/fa";
import Transactions from "./Transactions";
import { Link } from "react-router-dom";
import Accountreport from "./Accountreview";

const Userdashbboard = () => {
  return (
    <section>
      <div className="bg-amber-300 p-4 rounded-lg mt-1 w-full">
        <div className="flex justify-between">
          <h5 className="font-semibold">Hi, User234</h5>
          <Link to="/user_account/account-information">
            <div className="bg-amber-600 p-4 rounded-3xl group hover:bg-amber-500">
              <FaUserAlt className="group-hover:text-white-rice" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h4 className="text-gray-400 text-xl mb-2">Balance:</h4>
          <h3 className="text-lg flex items-center">
            <FaDollarSign className="mr-1" />
            40.00
          </h3>
        </div>

        <div className="flex justify-center gap-x-8 items-center mt-8">
          <Link to="/user_account/my-trades">
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-amber-900 rounded-3xl flex justify-center">
                <FaExchangeAlt className="text-2xl text-white" />
              </div>
              <p className="mt-2 text-sm text-black-spider">My Trades</p>
            </div>
          </Link>

          <Link to="/user_account/crypto-accounts">
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-amber-900 rounded-3xl flex justify-center">
                <FaWallet className="text-2xl text-white" />
              </div>
              <p className="mt-2 text-sm text-black-spider">Crypto</p>
            </div>
          </Link>

          <Link to="/user_account/my-investments">
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-amber-900 rounded-3xl flex justify-center">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <p className="mt-2 text-sm text-black-spider">My Investments</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 tablet:max-4xl:grid-cols-2">
      <div className="p-4 mt-2 bg-white-rice rounded-lg">
        <Accountreport />
      </div>

      <div className="p-4 mt-2 mb-1 bg-gray-500 rounded-lg">
        <Transactions />
      </div>
      </div>
    </section>
  );
};

export default Userdashbboard;
