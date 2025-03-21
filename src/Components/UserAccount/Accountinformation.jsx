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
  const { data } = useClientData();
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
              <div className="bg-gray-300 p-4 rounded-2xl relative" data-aos="zoom-in-right">
                <span className="text-lg font-semibold">Full Name:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  {data?.firstname} {" "} {data?.lastname}
                  <Link to="/user_account/account-information/edit-names">
                  <FaRegEdit className="absolute top-4 right-4 text-2xl text-white cursor-pointer" /></Link>
                </span>
              </div>


              {/* Username */}
              <div className="bg-gray-300 p-4 rounded-2xl relative" data-aos="zoom-in-left">
                <span className="text-lg font-semibold">Username:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  {data?.username}
                  <Link to="/user_account/account-information/edit-username">
                  <FaRegEdit className="absolute top-4 right-4 text-2xl text-white cursor-pointer" /></Link>
                </span>
              </div>

              {/* Email */}
              <div className="bg-gray-300 p-4 rounded-2xl" data-aos="zoom-in-right">
                <span className="text-lg font-semibold">Email:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">
                  {data?.email}
                </span>
              </div>

              {/* Country */}
              <div className="bg-gray-300 p-4 rounded-2xl relative"  data-aos="zoom-in-left">
                <span className="text-lg font-semibold">Country:</span>
                <span className="block mt-2 text-lg font-medium text-gray-600">{data?.country}
                <Link to="/user_account/account-information/edit-country">
                <FaRegEdit className="absolute top-4 right-4 text-2xl text-white cursor-pointer" /></Link>
                </span>
              </div>
            </div>
            
          </section>

          {/* Verification Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Verification</h2>
            <div className="bg-gray-300 p-4 rounded-2xl relative group" data-aos="fade-up" data-aos-duration="2000" >
              <span className="text-lg font-semibold">Not Verified</span>
              <span className="flex items-center mt-2 text-lg font-medium text-gray-600">
                <FaRegAddressCard className="mr-2 text-xl" />
                Personal ID
              </span>
              <Link to="/user_account/account-information/ID-upload">
                <IoMdAddCircleOutline className="absolute top-4 right-4 text-3xl text-white cursor-pointer" />
              </Link>
            </div>
          </section>

          {/* Security Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Security:</h2>
            <Link to="/user_account/account-information/edit-password">
              <div className="bg-gray-700 relative p-4 rounded-2xl group cursor-pointer hover:bg-gray-600 transition duration-300" data-aos="fade-up" data-aos-duration="3000">
                <span className="text-lg font-semibold text-white-rice">
                  Change Password
                </span>
                <IoIosArrowDropright className="absolute top-4 right-4 text-3xl text-white transition-all duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </section>

          {/* Delete Account Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                deleteaccount(), navigate("/");
              }}
              className="flex items-center cursor-pointer bg-red-600 p-4 rounded-xl text-white-rice font-semibold text-xl hover:bg-red-500 transition duration-300 animate-zoom-in" style={{ animationDelay: "0.2s" }} 
            >
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
