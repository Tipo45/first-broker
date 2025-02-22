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
      <div className="bg-gray-200 p-4 rounded-lg mt-1 w-full">
        <div className="flex justify-between">
          <h5 className="font-semibold">Hi, <span className="text-teal font-semibold">User234</span></h5>
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
          <Link to="/user_account/my-trades">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-charcoal-gray rounded-3xl flex justify-center">
                <FaExchangeAlt className="text-2xl text-white-rice" />
              </div>
              <p className="mt-2 text-sm font-medium text-black-spider">Trades</p>
            </div>
          </Link>

          <Link to="/user_account/crypto-accounts">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-charcoal-gray rounded-3xl flex justify-center">
                <FaWallet className="text-2xl text-white-rice" />
              </div>
              <p className="mt-2 text-sm font-medium text-black-spider">Crypto</p>
            </div>
          </Link>

          <Link to="/user_account/my-investments">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-charcoal-gray rounded-3xl flex justify-center">
                <FaChartLine className="text-2xl text-white-rice" />
              </div>
              <p className="mt-2 text-sm font-medium text-black-spider">Investments</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 tablet:max-4xl:grid-cols-2">
        <div className="p-4 mt-2 bg-gray-400 rounded-lg">
          <Accountreport />
        </div>

        <div className="p-4 mt-2 mb-1 bg-charcoal-gray rounded-lg">
          <Transactions />
        </div>
      </div>
    </section>
  );
};

export default Userdashbboard;
