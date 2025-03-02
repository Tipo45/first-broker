import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation1 from "../../assets/Animated Icons/Animation-1.json";
import Animation2 from "../../assets/Animated Icons/Animation-2.json";
import Animation3 from "../../assets/Animated Icons/Animation-3.json";
import Foreximage from "../../assets/Images/Forex-img.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Apply from "./Apply";
import Testimony from "./Testimony";

const Commodities = () => {
  return (
    <section>
      <div className="mt-10 mb-20 px-4">
        <div className="flex mb-4">
          <Link to="/">
            <p className="text-lg  hover:text-teal hover:underline">Home</p>
          </Link>{" "}
          <span className="text-gray-500 text-lg ml-2 mr-3">/</span>
          <p className="text-gray-500 text-xl">Commodities*</p>
        </div>

        <section>
          <div className="grid gap-2 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-4 mt-10 tablet:max-xl:mt-20 xl:mt-40">
              <h3 className="text-3xl mb-4 font-extrabold">
                The easy way to own and sell sell commodities*
              </h3>

              <p className="text-lg text-gray-700 mb-4 font-medium pr-10">
                Begin trading natural commodities such as aluminum, natural gas,
                rice, and oil with minimal investment.
              </p>

              <Link to="/registration">
                <button className="bg-teal text-white-rice text-lg font-medium w-full p-4 rounded-xl hover:bg-darker-teal cursor-pointer transition-all duration-400 hover:translate-y-2">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="">
              <Lottie animationData={Animation1} />
            </div>
          </div>
        </section>

        <section>
          <div className="mt-15 mb-20">
            <div className="flex mb-4">
              <FaCheckCircle className="mr-3 mt-1 text-teal text-2xl" />{" "}
              <span className="text-xl text-dark-blue font-medium">
                Profit from short-term market fluctuations.
              </span>
            </div>
            <div className="flex mb-4">
              <FaCheckCircle className="mr-3 mt-1 text-teal text-2xl" />{" "}
              <span className="text-xl text-dark-blue font-medium">
                Spread your investments and protect against rising inflation.
              </span>
            </div>
            <div className="flex mb-4">
              <FaCheckCircle className="mr-3 mt-1 text-teal text-2xl" />{" "}
              <span className="text-xl text-dark-blue font-medium">
                Invest anytime, day or night, even on weekends.
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className="grid gap-2 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-4 mt-1 tablet:order-2">
              <h4 className="text-gray-400 font-bold mb-4">ALL IN ONE PLACE</h4>
              <h3 className="text-3xl mb-4 font-extrabold">
                Trade oil, gas and 15 other commodities*
              </h3>

              <p className="text-lg text-gray-700 mb-4 font-medium pr-10">
                Easily access the commodities you need, alongside your crypto,
                stocks, and metals.
              </p>

              <Link to="/registration">
                <button className="bg-teal text-white-rice text-lg font-medium w-full p-4 rounded-xl hover:bg-darker-teal cursor-pointer transition-all duration-400 hover:translate-y-2">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="tablet:max-xl:mt-15">
              <Lottie animationData={Animation2} />
            </div>
          </div>
        </section>

        <section>
          <div className="grid gap-2 grid-cols-1 tablet:grid-cols-2">
            <div className="tablet:max-xl:mt-20 tablet:order-2">
              <Lottie animationData={Animation3} />
            </div>
            <div className="mb-4 tablet:mt-30 tablet:order-1 3xl:mt-50">
              <h4 className="text-gray-400 font-bold mb-4">
                DIVERSIFY YOUR PORTFOLIO
              </h4>
              <h3 className="text-3xl mb-4 font-extrabold">
                Hedge against inflation
              </h3>

              <p className="text-lg mb-4 font-medium pr-10 text-gray-700">
                Offset increasing living expenses and take advantage of
                short-term price fluctuations in essential commodities.
              </p>

              <Link to="/registration">
                <button className="bg-teal text-white-rice text-lg font-medium w-full p-4 rounded-xl hover:bg-darker-teal cursor-pointer transition-all duration-400 hover:translate-y-2">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-15 bg-gray-600 p-4 rounded-xl">
            <div>
    
              <img src={Foreximage} alt="" className="w-full h-80 rounded-2xl" />
            </div>
            <div className="px-4">
              <h3 className="font-semibold text-light-gray text-2xl mt-4 mb-4">
                Do it all on Tipo&apos;s broker
              </h3>
              <p className="text-lg text-gray-300 font-medium pr-10">
                Trade, swap your commodities* with crypto, stocks*, metals and
                more.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-15">
            <Testimony />
          </div>
        </section>

        <section>
          <div className="mt-20">
            <h2 className="mb-5 text-2xl font-bold">Join thousands of people on Tipo&apos;s broker</h2>
            <div>
              <Apply />
            </div>
          </div>
        </section>

        <section>
          <div className="mt-10">
            <p className="text-gray-500 text-md tablet:text-lg">
              This information is given solely for informational purposes and is
              a commercial message. It is not a recommendation, advice, or
              invitation to engage in any kind of business. Commodities, which
              are provided by Tipo developers, are the underlying Exchange
              Traded Commodities of contracts that are offered as Tipo brokers.
              Consult the Tipo broker&apos;s prospectus for additional details.
              Risky capital. Under the terms and conditions specified in the
              contracts, the financial instrument
              &apos;&apos;Commodities&apos;&apos; may be resold to Tipo Broker
              at any moment, but it is not marketable on exchanges or other
              trading platforms. Additional information regarding this product,
              the issuer, and the associated risks is available in English.
              Please be aware that this prospectus is only applicable in Austria
              for this product. There are hazards associated with investing in
              securities. A Total loss may occur.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Commodities;
