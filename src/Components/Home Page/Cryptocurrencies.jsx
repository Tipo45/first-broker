import Lottie from "lottie-react";
import Animation2 from "../../assets/Animated Icons/Animation-2.json";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GetStartedButton = () => {
  return (
    <Link to="/registration">
      <button className="bg-teal text-white-rice text-lg font-medium w-full p-4 rounded-xl hover:bg-darker-teal cursor-pointer transition-all duration-400 hover:translate-y-2">
        Get Started
      </button>
    </Link>
  );
};


const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="mb-8">
      {subtitle && <h4 className="text-gray-400 font-bold mb-2">{subtitle}</h4>}
      <h3 className="text-3xl font-extrabold mb-4">{title}</h3>
      {description && (
        <p className="text-lg text-gray-700 font-medium">{description}</p>
      )}
    </div>
  );
};

const Cryptocurrencies = () => {
  return (
    <section className="py-6 mb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex mb-8">
          <Link to="/">
            <p className="text-md hover:text-teal hover:underline">Home</p>
          </Link>
          <span className="text-gray-500 text-lg mx-2">/</span>
          <p className="text-gray-500 text-xl">Cryptocurrencies</p>
        </div>
      </div>

      <section className="mb-20">
        <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <SectionTitle
              title="A borderless Wall Street experience."
              description="Regardless of the stock price, you can invest in fractional shares of your favorite companies starting from just ₦1, with no commissions and competitive spreads."
            />
            <GetStartedButton />
          </div>
          <div className="flex justify-center items-center">
            <Lottie animationData={Animation2} className="w-full h-auto" />
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center mt-4">
          Historical performance is purely hypothetical, intended for
          demonstration purposes, and does not guarantee future results.
        </p>
      </section>
    </section>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string), 
};

export default Cryptocurrencies;
