import { BiBarChartAlt2 } from "react-icons/bi";

const Transactions = () => {
  return (
    <div className="animate-zoom-in" style={{ animationDelay: "0.5s" }}>
      <div>
        <h1 className="text-lg font-medium mb-4">Recent Transactions</h1>
      </div>
      <div className="text-right">
        <button className="text-gray-300 hover:text-gray-100">View all</button>
      </div>
      <div className="text-center flex flex-col items-center mt-2">
        <h4 className="text-gray-200">No transactions</h4>
        <BiBarChartAlt2 className="text-5xl text-gray-100 mx-auto mt-4 mb-12" />
      </div>
    </div>
  );
};

export default Transactions;
