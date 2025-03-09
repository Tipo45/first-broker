import {
  FaArrowAltCircleLeft,
  FaRegAddressCard,
  FaRegEdit,
} from "react-icons/fa";
import Usersidebar from "./Usersidebar";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDropright, IoMdAddCircleOutline } from "react-icons/io";
import { deleteaccount } from "../../lib/pocketbase";
import { useClientData } from "../../hooks/useClientData";

const Accountinformation = () => {
  const navigate = useNavigate();
  const {data} = useClientData();
  return (
    <section className="flex">
      {/* Sidebar */}
      <Usersidebar />

      {/* Main Content */}
      <div className="flex-grow pr-1 pl-4 ml-13 tablet:ml-43 transition-all duration-300 mt-1 mb-1">
        {/* Header Section */}
        <div className="bg-gray-400 p-4 rounded-lg">
          <Link to="/user_account/dashboard">
            <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group">
              <FaArrowAltCircleLeft className="text-2xl text-white group-hover:text-black-spider" />
            </div>
          </Link>

          {/* Title */}
          <div className="text-center mt-2">
            <h1 className="text-2xl font-bold text-white">
              Account Information
            </h1>
          </div>

          {/* Personal Info Section */}
          <section className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Personal Info:</h2>
            <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2">
              {/* First Name */}
              <div className="bg-gray-300 p-4 rounded-2xl relative">
                <span className="text-lg font-semibold">First Name:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  {data?.firstname}
                </span>
                <Link to="/user_acccount/account-information/user-account/change-name">
                  <FaRegEdit className="absolute top-4 right-4 text-lg text-white cursor-pointer" />
                </Link>
              </div>

              {/* Last Name */}
              <div className="bg-gray-300 p-4 rounded-2xl relative">
                <span className="text-lg font-semibold">Last Name:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  {data?.lastname}
                </span>
                <Link to="/user_acccount/account-information/user-account/change-name">
                  <FaRegEdit className="absolute top-4 right-4 text-lg text-white cursor-pointer" />
                </Link>
              </div>

              {/* Username */}
              <div className="bg-gray-300 p-4 rounded-2xl relative">
                <span className="text-lg font-semibold">Username:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  
                </span>
                <Link to="/user_acccount/account-information/user-account/change-username">
                  <FaRegEdit className="absolute top-4 right-4 text-lg text-white cursor-pointer" />
                </Link>
              </div>

              {/* Email */}
              <div className="bg-gray-300 p-4 rounded-2xl">
                <span className="text-lg font-semibold">Email:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  {data?.email}
                </span>
              </div>

              {/* Country */}
              <div className="bg-gray-300 p-4 rounded-2xl">
                <span className="text-lg font-semibold">Country:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  
                </span>
              </div>
            </div>
          </section>

          {/* Verification Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Verification</h2>
            <div className="bg-gray-300 p-4 rounded-2xl relative group">
              <span className="text-lg font-semibold">Not Verified</span>
              <span className="flex items-center mt-2 text-lg font-medium text-gray-600">
                <FaRegAddressCard className="mr-2 text-xl" />
                Personal ID
              </span>
              <Link to="/user_acccount/account-information/user-account/ID-upload">
                <IoMdAddCircleOutline className="absolute top-4 right-4 text-3xl text-white cursor-pointer" />
              </Link>
            </div>
          </section>

          {/* Security Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Security:</h2>
            <Link to="/user_acccount/account-information/user-account/change-password">
              <div className="bg-gray-700 p-4 rounded-2xl group cursor-pointer hover:bg-gray-600 transition duration-300">
                <span className="text-lg font-semibold text-white-rice">
                  Change Password
                </span>
                <IoIosArrowDropright className="absolute top-231 tablet:top-189 right-10 text-3xl text-white transition-all duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </section>

          {/* Delete Account Button */}
          <div className="flex justify-center mt-8">
            <button onClick={() => {deleteaccount(), navigate("/")}} className="flex items-center bg-red-600 p-4 rounded-xl text-white-rice font-semibold text-xl hover:bg-red-500 transition duration-300">
              <RiDeleteBin5Line className="text-2xl mr-2" />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accountinformation;
