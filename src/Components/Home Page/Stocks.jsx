import { Link } from "react-router-dom";
import Testimony from "./Testimony";
import Apply from "./Apply";
import { FaDiamond } from "react-icons/fa6";
import Lottie from "lottie-react";
import Animation1 from "../../assets/Animated Icons/Animation-1.json";
import Animation2 from "../../assets/Animated Icons/Animation-2.json";
import Animation3 from "../../assets/Animated Icons/Animation-3.json";
import img001 from "../../assets/Images/Mastercard_Symbol_2.webp";
import img002 from "../../assets/Images/Stripe_id7qRMcZ8P_0.svg";
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

const SectionTitle = ({ subtitle, title, description, list }) => {
  return (
    <div className="mb-8">
      {subtitle && <h4 className="text-gray-400 font-bold mb-2">{subtitle}</h4>}

      <h3 className="text-3xl font-extrabold mb-4">{title}</h3>

      {description && (
        <p className="text-lg text-gray-700 font-medium mb-4">{description}</p>
      )}

      {list && (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {list.map((item, index) => (
            <li key={index} className="text-md font-medium">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Stocks = () => {
  return (
    <section className="py-6 mb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex mb-8">
          <Link to="/">
            <p className="text-md hover:text-teal hover:underline">Home</p>
          </Link>
          <span className="text-gray-500 text-lg mx-2">/</span>
          <p className="text-gray-500 text-xl">Stocks*</p>
        </div>

        <section className="mb-20">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-8 md:mb-0">
              <SectionTitle
                title="A borderless Wall Street experience"
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

        <section>
          <div className="mt-4 mb-15">
            <div className="mb-4">
              <h4 className="text-lg font-medium">Our Partners:</h4>
            </div>
            <div className="flex space-x-4">
              <Link to="/">
                <img src={img001} alt="" className="w-20" />
              </Link>
              <Link to="/">
                <img src={img002} alt="" className="w-20" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-8 md:mb-0 tablet:order-2">
              <p className="text-gray-500 text-lg font-bold mt-4 mb-2">
                PROPORTIONAL ASSETS
              </p>
              <SectionTitle
                title="Invest in partial shares or the entire asset"
                description="Grow your investment portfolio by purchasing whole shares or fractional shares of your preferred companies over time, starting with as little as ₦1."
              />
            </div>
            <div className="flex justify-center items-center tablet:order-1">
              <Lottie animationData={Animation3} className="w-full h-auto" />
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            Historical performance is purely hypothetical, intended for
            demonstration purposes, and does not guarantee future results.
          </p>
        </section>

        <section className="mb-30">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-8 md:mb-0">
              <p className="text-gray-500 text-lg font-bold mt-4 mb-2">
                ROUND-THE-CLOCK
              </p>
              <SectionTitle
                title="Markets closed? Not anymore — trade anytime"
                description="Make investments at your convenience, even outside traditional stock market hours."
              />
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

        <section className="mb-30">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-8 md:mb-0 tablet:order-2">
              <p className="text-gray-500 text-lg font-bold mt-4 mb-2">
                COMMISSION FREE
              </p>
              <SectionTitle
                title="Trade without commissions while benefiting from tight spreads."
                list={[
                  "NO trade fees",
                  "NO list fees",
                  "NO account fees",
                  "NO management fees",
                  "NO fees on payouts",
                ]}
              />
            </div>
            <div className="flex justify-center items-center tablet:order-1">
              <Lottie animationData={Animation1} className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="mb-30">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-8 md:mb-0">
              <p className="text-gray-500 text-lg font-bold mt-4 mb-2">
                ASSET SAFETY
              </p>
              <SectionTitle
                title="Completely supported by tangible assets"
                description="Your investments are securely held by a custody bank, ensuring their protection at all times and minimizing counterparty risk."
              />
            </div>
            <div className="flex justify-center items-center">
              <Lottie animationData={Animation3} className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="flex flex-wrap items-center space-x-2 pr-1 mb-4">
              <p className="text-gray-500 text-lg font-bold whitespace-nowrap">
                Proportional
              </p>
              <FaDiamond className="text-xs mt-0.5 text-gray-500" />
              <p className="text-gray-500 text-lg font-bold whitespace-nowrap">
                Round-the-clock
              </p>
              <FaDiamond className="text-xs mt-0.5 text-gray-500" />
              <p className="text-gray-500 text-lg font-bold whitespace-nowrap">
                Commission-free
              </p>
              <FaDiamond className="text-xs mt-0.5 text-gray-500" />
              <p className="text-gray-500 text-lg font-bold whitespace-nowrap">
                Asset safety
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold">
                How does this process function?
              </h2>
            </div>
            <div className="px-2">
              <ol className="list-decimal list-inside space-y-2 font-medium text-lg">
                <li>
                  Tipo broker&apos;s acquires the actual stocks via affiliated
                  exchanges.
                </li>
                <li>
                  Our partnered custody banks securely store and safeguard the
                  stocks.
                </li>
                <li>
                  You purchase fractional shares of stocks through derivatives.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-10 mb-20">
          <Testimony />
        </section>

        <section className="mb-20">
          <SectionTitle
            title="Join thousands of people on Tipo's broker"
            description=""
          />
          <Apply />
        </section>

        <section>
          <p className="text-gray-600 text-md md:text-lg">
            “Tipo broker&apos;s stock” are offered in collaboration with Tipo
            broker&apos;s. These are not actual stocks but derivative contracts
            that enable you to engage in the price fluctuations of specific
            underlying financial assets, such as stocks or Exchange-Traded Funds
            (ETFs). Unlike traditional stocks, Tipo broker&apos;s Stocks cannot
            be traded on stock exchanges or other trading platforms but can be
            sold back to Tipo broker&apos;s at any time under the conditions
            outlined in the Tipo broker&apos;s Financial Services Terms and
            Conditions and the A-Token derivative agreement.
          </p>
          <p className="mt-10 text-gray-600 text-md md:text-lg">
            <span className="font-bold">Risk Disclaimer:</span> Investing in
            digital assets involves risk, as their value can be highly volatile.
            You may experience partial or total loss of your investment. Past
            performance does not guarantee future results.
          </p>
        </section>
      </div>
    </section>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string), 
};

export default Stocks;
