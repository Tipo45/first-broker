import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Quickaccess = ({ accessedpage }) => {
  return (
    <section>
      <div className="mt-10 mb-20 px-4 bg-charcoal-gray rounded-2xl p-4" data-aos="flip-left"
     data-aos-duration="500">
        <div data-aos="fade-up"
     data-aos-duration="1500">
          <h3 className="font-semibold mb-4 text-2xl text-white-rice">
            Quick Access
          </h3>
        </div>
        <ul>
          
          {accessedpage === "asset-management" ? (
            <li className="px-4 py-1 text-white-rice" data-aos="fade-up"
     data-aos-duration="2000">Asset Management</li>
          ) : (
            <li className="px-4 py-1" data-aos="fade-up"
     data-aos-duration="2000">
              <Link to="/about-us/asset-management" className="text-teal underline">
                Asset Management
              </Link>
            </li>
          )}

          
          {accessedpage === "commission-account" ? (
            <li className="px-4 py-1 text-white-rice" data-aos="fade-up"
     data-aos-duration="2500">Commission Account</li>
          ) : (
            <li className="px-4 py-1" data-aos="fade-up"
     data-aos-duration="2500">
              <Link to="/about-us/commission-account" className="text-teal underline">
                Commission Account
              </Link>
            </li>
          )}

          
          {accessedpage === "brokerage" ? (
            <li className="px-4 py-1 text-white-rice" data-aos="fade-up"
     data-aos-duration="3000">Brokerage</li>
          ) : (
            <li className="px-4 py-1" data-aos="fade-up"
     data-aos-duration="3000">
              <Link to="/about-us/brokerage" className="text-teal underline">
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