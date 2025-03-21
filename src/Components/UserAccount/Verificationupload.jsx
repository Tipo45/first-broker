import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { update_userID } from "../../lib/pocketbase";

const Verificationupload = () => {
  const [upload, setUpload] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const validateUpload = () => {
    if (!upload) {
      setUploadError("choosee a file");
    } else {
      setUploadError("");
    }
  };

  const handleFileChange = (event) => {
    setUpload(event.target.value);
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null); // Ignore non-image files
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);

    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateUpload(upload);

     if (uploadError) {
          setLoading(false);
          return;
        }
    
        try {
          const result = await  update_userID(upload);
    
          if (result) {
            alert("Successfuly added ID");
            navigate("/user_account/account-information");
          }
        } catch (error) {
          console.error("Update failed:", error);
          alert("Failed to update user. Please try again.");
        }

    setLoading(false);
  };

  return (
    <section>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-24 grid grid-cols-1">
          <div className="bg-gray-900 text-white p-4 rounded-lg" data-aos="fade-up"
             data-aos-duration="1000">
            <label className="bg-gray-700 text-white px-4 py-2 rounded cursor-pointer">
              Choose File
              <input
                type="file"
                className="hidden"
                value={upload}
                onChange={handleFileChange}
                onBlur={(e) => validateUpload(e.target.value)}
              />
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
          {uploadError && (
            <div className="text-red-500 p-2 bg-light-gray rounded-xl font-medium mt-1 mb-1">
              {uploadError}
            </div>
          )}
        </div>
        <div className="mt-4 px-2">
          <span className="text-gray-400">
            *image size should not be more than 5MB
          </span>
        </div>

        <div className="flex justify-center mt-8">
          {loading ? (
            <button className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-not-allowed font-medium text-white-rice rounded-lg">
              <svg
                className="mr-3 size-8 text-light-gray animate-spin"
                viewBox="0 0 24 24"
              >
                <FaSpinner />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-teal hover:bg-darker-teal p-4 text-lg cursor-pointer font-medium text-white-rice rounded-lg"
              data-aos="zoom-in"
             data-aos-duration="2000"
            >
              Update
            </button>
          )}
        </div>
        </form>
      </div>
    </section>
  );
};

export default Verificationupload;
