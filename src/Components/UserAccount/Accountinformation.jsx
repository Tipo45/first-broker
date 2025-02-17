import { FaArrowAltCircleLeft, FaRegEdit } from "react-icons/fa";
import Usersidebar from "./Usersidebar";
import { Link } from "react-router-dom";

const Accountinformation = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <Usersidebar />

      {/* Main Content */}
      <div className="flex-grow pr-1 pl-4 ml-13 tablet:max-4xl:ml-64 transition-all duration-300 mt-1 mb-1">
        {/* Header Section */}
        <div className="bg-gray-400 p-2 rounded-lg">
          <Link to="/user_account/dashboard">
            <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group">
              <FaArrowAltCircleLeft className="text-2xl text-white group-hover:text-black-spider" />
            </div>
          </Link>

          {/* Title */}
          <div className="text-center mt-2">
            <h1 className="text-xl font-medium text-white">
              Account Information
            </h1>
          </div>
          <section>
            <div className="mt-2 mb-0">
              <h2
                className="text-2xl font-bold
              "
              >
                Personal Info:
              </h2>
            </div>
            <div className="mt-2">
              <div className="grid grid-cols-1 xl:max-4xl:grid-cols-2">
                <span className="text-lg font-medium">First Name:</span>
                <div className="bg-gray-700 rounded-2xl px-2 py-4 ">
                  <span className="relative text-lg font-semibold mt-2 text-white-rice">
                    Steven
                  </span>
                  <span className="absolute right-8 top-47">
                    <FaRegEdit className="text-lg text-white" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:max-4xl:grid-cols-2 mt-2">
                <span className="text-lg font-medium">Last Name:</span>
                <div className="bg-gray-700 rounded-2xl px-2 py-4 ">
                  <span className="relative text-lg font-semibold mt-2 text-white-rice">
                    Azebi-Alex
                  </span>
                  <span className="absolute right-9 top-70">
                    <FaRegEdit className="text-lg text-white" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:max-4xl:grid-cols-2 mt-2">
                <span className="text-lg font-medium">e-mail:</span>
                <span className="bg-gray-700 rounded-2xl px-2 py-4 text-lg font-semibold mt-2 text-white-rice">
                  tipo4542@gmail.com
                </span>
              </div>

              <div className="grid grid-cols-1 xl:max-4xl:grid-cols-2 mt-2">
                <span className="text-lg font-medium">Username:</span>
                <div className="bg-gray-700 rounded-2xl px-2 py-4 ">
                  <span className="relative text-lg font-semibold mt-2 text-white-rice">
                    tipo45
                  </span>
                  <span className="absolute right-8 bottom-41">
                    <FaRegEdit className="text-lg text-white" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:max-4xl:grid-cols-2 mt-2">
                <span className="text-lg font-medium">Address:</span>
                <span className="bg-gray-700 rounded-2xl px-2 py-4 text-lg font-semibold mt-2 text-white-rice">
                  White House, Washington D.C., Brazil
                </span>
              </div>

              <div className="flex justify-center mt-6">
                <button className="bg-amber-400 p-4 rounded-xl text-white-rice font-semibold text-xl hover:bg-amber-300 ">
                  Edit
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Accountinformation;
