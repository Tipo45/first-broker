import { FaArrowAltCircleLeft } from "react-icons/fa";
import Usersidebar from "./Usersidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Verificationupload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null); // Ignore non-image files
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

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
          <h1 className="text-2xl text-center font-semibold">Upload ID</h1>
        </div>

        <div className="mt-24 grid grid-cols-1">
      <div className="bg-gray-900 text-white p-4 rounded-lg">
        <label className="bg-gray-700 text-white px-4 py-2 rounded cursor-pointer">
          Choose File
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        <span className="ml-2 text-gray-300">
          {selectedFile ? selectedFile.name : "No file chosen"}
        </span>

        {selectedFile && (
          <button
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleRemoveFile}
          >
            Remove
          </button>
        )}
      </div>
    </div>
    <div className="mt-4 px-2">
        <span className="text-gray-400">*image size should not be more than 5MB</span>
    </div>

        <div className="flex justify-center mt-8">
        <button type="submit" className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-pointer font-medium text-white-rice rounded-lg">Upload</button>
        </div>
      </div>
    </section>
  );
};

export default Verificationupload;
