import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <section>
      <div className="px-4 py-16 rounded-2xl mb-10 bg-light-gray">
        <div className="flex justify-center">
          <h2 className="text-xl text-spider-black font-bold">Register with us @ Tipo&apos;s Broker</h2>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-gray-500 text-lg">Open an account with us today!</p>
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/registration">
          <button
            type="button"
            className="flex group text-2xl cursor-pointer bg-teal p-4 rounded-xl text-white-rice font-medium hover:bg-darker-teal transition-all hover:translate-y-0.5"
          >
            Get Started{" "}
            <MdKeyboardArrowRight className="ml-1 mt-0.5 text-3xl transition-all duration-300 group-hover:translate-x-2 font-medium" />
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Apply;
