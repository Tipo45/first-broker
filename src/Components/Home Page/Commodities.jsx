import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation1 from "../../assets/Animated Icons/Animation-1.json";
import Animation2 from "../../assets/Animated Icons/Animation-2.json";
import Animation3 from "../../assets/Animated Icons/Animation-3.json";

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
                Start trading natural commodities* like aluminium, natural gas,
                rice, oil, for as little as{" "}
                <span className="inline-flex items-center">
                  <TbCurrencyNaira className="mt-0.5 mr-1 text-xl" />
                </span>
                1.
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
          <div className="grid gap-2 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-4 mt-10 tablet:order-2">
              <h4 className="text-gray-400 font-bold mb-4">ALL IN ONE PLACE</h4>
              <h3 className="text-3xl mb-4 font-extrabold">
                Trade oil, gas and 15 other commodities*
              </h3>

              <p className="text-lg text-gray-700 mb-4 font-medium pr-10">
                Get acces to the commodities* you want - right alongside your crypto, stocks* and metals.
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
            <div className="mb-4 mt-10 tablet:mt-30 3xl:mt-50">
              <h4 className="text-gray-400 font-bold mb-4">DIVERSIFY YOUR PORTFOLIO</h4>
              <h3 className="text-3xl mb-4 font-extrabold">
                Hedge against inflation
              </h3>

              <p className="text-lg mb-4 font-medium pr-10 text-gray-700">
              Counter rising living costs and benefit from the short term price movements of key commodities*.
              </p>

              <Link to="/registration">
                <button className="bg-teal text-white-rice text-lg font-medium w-full p-4 rounded-xl hover:bg-darker-teal cursor-pointer transition-all duration-400 hover:translate-y-2">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="tablet:max-xl:mt-18">
              <Lottie animationData={Animation3} />
            </div>
          </div>
        </section>

        <section>
          <div className="mt-502">
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
