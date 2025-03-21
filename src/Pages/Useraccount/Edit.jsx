import { Link, useParams } from "react-router-dom";
import Namesupdate from "../../Components/UserAccount/Namesupdate";
import Usernamesettings from "../../Components/UserAccount/Usernamesettings";
import Countryedit from "../../Components/UserAccount/Countryedit";
import Verificationupload from "../../Components/UserAccount/Verificationupload";
import Passwordedit from "../../Components/UserAccount/Passwordedit";
import Nopage from "../404";
import Usersidebar from "../../Components/UserAccount/Usersidebar";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Edit = () => {
  const { editpage } = useParams();

  const validPages = [
    "edit-names",
    "edit-username",
    "edit-country",
    "ID-upload",
    "edit-password",
  ];

  const isValidPage = validPages.includes(editpage);

  const pageHeaders = {
    "edit-names": "Edit Names",
    "edit-username": "Edit Username",
    "edit-country": "Edit Country",
    "ID-upload": "Verification",
    "edit-password": "Change Password",
  };

  return (
    <section>
      {isValidPage ? (
        <section className="flex">
          <Usersidebar />
          <div className="flex-grow pr-1 pl-4 ml-13 tablet:ml-43 transition-all duration-300 mt-1 mb-1">
            <div className="bg-gray-400 p-4 rounded-lg">
              <Link to="/user_account/account-information">
                <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group">
                  <FaArrowAltCircleLeft className="text-2xl text-black-spider group-hover:text-white-rice" />
                </div>
              </Link>
              <div>
              <h1 className="text-2xl text-center font-semibold">
                  {pageHeaders[editpage]}
                </h1>
              </div>
              {editpage === "edit-names" && <Namesupdate />}
              {editpage === "edit-username" && <Usernamesettings />}
              {editpage === "edit-country" && <Countryedit />}
              {editpage === "ID-upload" && <Verificationupload />}
              {editpage === "edit-password" && <Passwordedit />}
            </div>
          </div>
        </section>
      ) : (
        <Nopage />
      )}
    </section>
  );
};

export default Edit;
