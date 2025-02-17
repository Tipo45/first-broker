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
              <h4 className="text-xl">Net Spend</h4>
              <p className="text-lg flex items-center">
                <FaDollarSign className="mr-1" />
                20.00
              </p>
            </div>

            <div>
              <h4 className="text-xl">Net Received</h4>
              <p className="text-lg flex items-center">
                <FaDollarSign className="mr-1" />
                10.00
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 -mt-5">
            <div className="flex justify-between items-center text-white bg-gray-400 p-2 rounded-lg font-medium">
              <span className="flex items-center text-xs">
                <MdPending className="mr-1 text-xs xl:max-4xl:text-md" />{" "}
                Pending
              </span>
              <span className="flex items-center text-xs">
                <FaDollarSign className="mr-0 ml-1 mt-0.5 text-xs xl:max-4xl:text-md" />{" "}
                20.00
              </span>
            </div>

            <div className="flex justify-between items-center text-white bg-green-700 p-2 rounded-lg font-medium">
              <span className="flex items-center text-xs">
                <MdOutlineGppGood className="mr-1 text-xs xl:max-4xl:text-md" />{" "}
                Success
              </span>
              <span className="flex items-center text-xs">
                <FaDollarSign className="mr-0 ml-1 mt-0.5 text-xs xl:max-4xl:text-md" />{" "}
                20.00
              </span>
            </div>

            <div className="flex justify-between items-center text-white bg-red-600 p-1 rounded-lg font-medium">
              <span className="flex items-center text-xs">
                <MdOutlineSmsFailed className="mr-1 text-xs xl:max-4xl:text-md" />{" "}
                Failed
              </span>
              <span className="flex items-center text-sm">
                <FaDollarSign className="mr-0 ml-1 mt-0.5 text-xs xl:max-4xl:text-md" />{" "}
                20.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountreview;
