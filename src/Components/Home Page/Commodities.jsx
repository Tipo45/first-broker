import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation1 from "../../assets/Animated Icons/Animation-1.json";
import Animation2 from "../../assets/Animated Icons/Animation-2.json";
import Animation3 from "../../assets/Animated Icons/Animation-3.json";
import Foreximage from "../../assets/Images/Forex-img.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Apply from "./Apply";
import Testimony from "./Testimony";
import PropTypes from "prop-types";

const GetStartedButton = () => {
  return (
    <Link to="/registration">
      <button
        className="bg-teal text-white-rice text-lg font-medium w-full p-4 rounded-xl hover:bg-darker-teal cursor-pointer transition-all duration-400 hover:translate-y-2"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
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

const benefits = [
  { text: "Profit from short-term market fluctuations.", duration: "1000" },
  {
    text: "Spread your investments and protect against rising inflation.",
    duration: "2000",
  },
  { text: "Invest anytime, day or night, even on weekends.", duration: "3000" },
];

const Commodities = () => {
  return (
    <section className="py-6 mb-5 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div
          className="flex mb-8"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <Link to="/">
            <p className="text-md hover:text-teal hover:underline">Home</p>
          </Link>
          <span className="text-gray-500 text-lg mx-2">/</span>
          <p className="text-gray-500 text-xl">Commodities*</p>
        </div>

        <section className="mb-20">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div
              className="mb-8 md:mb-0"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <SectionTitle
                title="The easy way to own and sell commodities*"
                description="Begin trading natural commodities such as aluminum, natural gas, rice, and oil with minimal investment."
              />
              <GetStartedButton />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Lottie animationData={Animation1} className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index.text} className="flex items-center">
                <span
                  className="text-xl text-dark-blue font-medium flex"
                  data-aos="fade-up"
                  data-aos-duration={benefit.duration}
                >
                  <FaCheckCircle className="text-teal text-3xl mr-4 mt-0.5" />
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div
              className="order-2 md:order-1"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <SectionTitle
                subtitle="ALL IN ONE PLACE"
                title="Trade oil, gas and 15 other commodities*"
                description="Easily access the commodities you need, alongside your crypto, stocks, and metals."
              />
              <GetStartedButton />
            </div>
            <div
              className="order-1 md:order-2 flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Lottie animationData={Animation2} className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
            <div
              className="flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Lottie animationData={Animation3} className="w-full h-auto" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <SectionTitle
                subtitle="DIVERSIFY YOUR PORTFOLIO"
                title="Hedge against inflation"
                description="Offset increasing living expenses and take advantage of short-term price fluctuations in essential commodities."
              />
              <GetStartedButton />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div
            className="bg-gray-800 p-6 rounded-xl"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <img
              src={Foreximage}
              alt="Forex"
              className="w-full h-100 rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-duration="1700"
            />
            <div className="mt-6">
              <h3
                className="text-2xl font-semibold text-white mb-4"
                data-aos="fade-right"
                data-aos-duration="2100"
              >
                Do it all on Tipo&apos;s broker
              </h3>
              <p
                className="text-lg text-gray-300 font-medium"
                data-aos="zoom-in"
                data-aos-duration="2500"
              >
                Trade, swap your commodities* with crypto, stocks*, metals, and
                more.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Testimony />
        </section>

        <section className="mb-20" data-aos="fade-up" data-aos-duration="2000">
          <SectionTitle
            title="Join thousands of people on Tipo's broker"
            description=""
          />
          <Apply />
        </section>

        <section>
          <div data-aos="zoom-out" data-aos-duration="2500">
            <p className="text-gray-600 text-md tablet:text-lg">
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

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Commodities;
