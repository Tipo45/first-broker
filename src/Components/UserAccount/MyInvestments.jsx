import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyInvestments = () => {
  return (
    <section>
      <div className="bg-gray-200 p-4 rounded-lg mt-1">
      <div className="flex justify-between">
          <h5 className="font-semibold text-teal">User234</h5>
          <Link to="/user_account/account-information">
            <div className="bg-dark-blue p-4 rounded-3xl group hover:bg-charcoal-gray">
              <FaUserAlt className="text-teal group-hover:text-white-rice" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyInvestments;
