import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClientData } from "../../hooks/useClientData";

const Crypto = () => {
  const {data} = useClientData();
  return (
    <section>
      <div className="bg-gray-200 p-4 rounded-lg mt-1">
      <div className="flex justify-between">
      <h5 className="font-semibold">Hi, <span className="text-teal font-semibold">{data?.firstname}</span></h5>
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

export default Crypto;
