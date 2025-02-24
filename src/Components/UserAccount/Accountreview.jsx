import { FaDollarSign } from "react-icons/fa";
import {
  MdOutlineGppGood,
  MdOutlineSmsFailed,
  MdPending,
} from "react-icons/md";

const Accountreview = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-medium mb-4">Account Review</h1>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <div className="mb-4">
              <h4 className="text-xl font-medium text-charcoal-gray">Net Spend</h4>
              <p className="text-lg flex items-center">
                <FaDollarSign className="mr-1" />
                <span>20.00</span>
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-charcoal-gray">Net Received</h4>
              <p className="text-lg flex items-center">
                <FaDollarSign className="mr-1" />
                <span>10.00</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 -mt-5">
            <div className="flex justify-between items-center text-white bg-gray-600 p-2 rounded-lg font-medium">
              <span className="flex items-center text-xs">
                <MdPending className="mr-1 text-lg xl:max-4xl:text-lg" />{" "}
                Pending
              </span>
              <span className="flex items-center text-xs">
                <FaDollarSign className="mr-0 ml-1 mt-0.5 text-xs xl:max-4xl:text-md" />{" "}
                <span>20.00</span>
              </span>
            </div>

            <div className="flex justify-between items-center text-white bg-green-700 p-2 rounded-lg font-medium">
              <span className="flex items-center text-xs">
                <MdOutlineGppGood className="mr-1 text-lg xl:max-4xl:text-lg" />{" "}
                Success
              </span>
              <span className="flex items-center text-xs">
                <FaDollarSign className="mr-0 ml-1 mt-0.5 text-xs xl:max-4xl:text-md" />{" "}
                <span>20.00</span>
              </span>
            </div>

            <div className="flex justify-between items-center text-white bg-red-600 p-1 rounded-lg font-medium">
              <span className="flex items-center text-xs">
                <MdOutlineSmsFailed className="mr-1 ml-1 text-lg xl:max-4xl:text-lg" />{" "}
                Failed
              </span>
              <span className="flex items-center text-xs">
                <FaDollarSign className="mr-0 ml-1 mt-0 text-xs xl:max-4xl:text-md" />{" "}
                <span>20.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountreview;
