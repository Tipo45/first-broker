import { FaArrowAltCircleLeft } from "react-icons/fa";
import Usersidebar from "./Usersidebar";
import { Link } from "react-router-dom";

const Usernamesettings = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <Usersidebar />

      <div className="flex-grow pr-1 pl-4 ml-13 tablet:ml-43 transition-all duration-300 mt-1 mb-1">
        <Link to="/user_account/account-information">
          <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group">
            <FaArrowAltCircleLeft className="text-2xl text-black-spider group-hover:text-white-rice" />
          </div>
        </Link>
        <div>
          <h1 className="text-2xl text-center font-semibold">
            Change of Username
          </h1>
        </div>

        <div className=" mt-25 px-2 grid grid-cols-1">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="New username"
              className="outline-2 outline-white hover:outline-teal focus:outline-teal w-full rounded-lg p-2 bg-gray-300"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-pointer font-medium text-white-rice rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Usernamesettings;
