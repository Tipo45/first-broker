import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Quickaccess = ({ accessedpage }) => {
  return (
    <section>
      <div className="mt-10 mb-20 px-4 bg-charcoal-gray rounded-2xl p-4">
        <div>
          <h3 className="font-semibold mb-4 text-2xl text-white-rice">
            Quick Access
          </h3>
        </div>
        <ul>
          
          {accessedpage === "asset-management" ? (
            <li className="px-4 py-1 text-white-rice">Asset Management</li>
          ) : (
            <li className="px-4 py-1">
              <Link to="/asset-management" className="text-teal underline">
                Asset Management
              </Link>
            </li>
          )}

          
          {accessedpage === "commission-account" ? (
            <li className="px-4 py-1 text-white-rice">Commission Account</li>
          ) : (
            <li className="px-4 py-1">
              <Link to="/commission-account" className="text-teal underline">
                Commission Account
              </Link>
            </li>
          )}

          
          {accessedpage === "brokerage" ? (
            <li className="px-4 py-1 text-white-rice">Brokerage</li>
          ) : (
            <li className="px-4 py-1">
              <Link to="/brokerage" className="text-teal underline">
                Brokerage
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

Quickaccess.propTypes = {
  accessedpage: PropTypes.string,
};

export default Quickaccess;