import { FaMoneyBill1Wave, FaUserPlus } from "react-icons/fa6";
import { IoIosCheckbox, IoIosInformationCircleOutline } from "react-icons/io";
import { MdAppRegistration, MdOutlineAccessTime } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import paypalimag from "../../assets/Images/PayPal_Logo_Alternative_2.webp";
import { BiBookOpen } from "react-icons/bi";
import img001 from "../../assets/Images/PayPal_Logo_Alternative_2.webp";
import img002 from "../../assets/Images/Stripe_id7qRMcZ8P_0.svg";
import img004 from "../../assets/Images/Visa Inc._idDUM8TcN7_1.png";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const features = [
  {
    icon: <BiBookOpen className="text-4xl xl:text-6xl" />,
    text: "Easy to Comprehend",
  },
  {
    icon: <MdAppRegistration className="text-4xl xl:text-6xl" />,
    text: "Stress-free Registration",
  },
  {
    icon: <MdOutlineAccessTime className="text-4xl xl:text-6xl" />,
    text: "Around the Clock Support",
  },
  {
    icon: <TfiHeadphoneAlt className="text-4xl xl:text-6xl" />,
    text: "Multilingual Customer Care",
  },
];

const attributes = [
  {
    number: "4.5k+",
    tag: "Active Accounts",
  },
  {
    number: "$2k+",
    tag: "Withdrawals Per Week",
  },
  {
    number: "30+",
    tag: "Supported Countries",
  },
  {
    number: "$14k+",
    tag: "Trading Volume Per Week",
  },
];

// const elements = ;

const traits = [
  {
    logo: <FaUserPlus className="text-6xl text-white-rice" />,
    description: "Open your account",
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum nisi fugit ipsam iusto deserunt",
    step: "Step 1",
  },
  {
    logo: <FaExchangeAlt className="text-6xl text-white-rice" />,
    description: "Select a currency pair",
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum nisi fugit ipsam iusto deserunt",
    step: "Step 2",
  },
  {
    logo: <AiOutlineLineChart className="text-6xl text-white-rice" />,
    description: "Analyze the market",
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum nisi fugit ipsam iusto deserunt",
    step: "Step 3",
  },
  {
    logo: <FaMoneyBill1Wave className="text-6xl text-white-rice" />,
    description: "Trade & make money",
    news: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum nisi fugit ipsam iusto deserunt",
    step: "Step 4",
  },
];

const Home = () => {
  return (
    <>
      {/* Why choose us? */}
      <section>
        <div className="px-6 py-6 mt-20">
          <h1 className="text-3xl text-black-spider font-semibold mb-12 text-center" data-aos="fade-in" data-aos-duration="2000">
            Why Choose Us?
          </h1>

          <ul className="grid grid-cols-1 gap-10 tablet:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="p-6 flex flex-col items-center text-center"
                data-aos="fade-up" data-aos-duration="2000">
                {feature.icon}
                <p className="mt-4 text-lg font-mono xl:text-xl">
                  {feature.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tipo's in numbers */}
      <section>
        <div className="px-6 py-6 mt-2">
          <h1 className="text-3xl text-black-spider font-semibold mb-12 text-center">
            Tipo&apos;s Broker In Numbers
          </h1>
          <ul className="grid grid-cols-1 gap-10 tablet:grid-cols-2 xl:grid-cols-4">
            {attributes.map((attribute, index) => (
              <li
                key={index}
                className={`p-5 flex flex-col items-center text-center rounded-lg text-2xl font-extrabold 
        ${
          attribute.tag === "Active Accounts"
            ? "bg-dark-blue text-white" // Custom styles for this specific item
            : "bg-light-gray text-black-spider"
        }`}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                {attribute.number}
                <p className="mt-4 text-lg font-mono xl:text-xl">
                  {attribute.tag}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our services */}
      <section>
        <div className="px-6 py-6 mt-2">
          <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2">
            <img src={paypalimag} alt="" className="w-full h-auto" data-aos="zoom-in" data-aos-duration="1000" />
            <div>
              <h2 className="text-2xl mb-1 text-gray-600" data-aos="fade-down" data-aos-duration="1000">Our Services</h2>
              <h3 className="text-2xl" data-aos="zoom-out" data-aos-duration="2000">
                In a Fast Moving Market,{" "}
                <span className="text-blue-950 text-3xl">
                  Choose a Trusted Broker...
                </span>
              </h3>
              <p className="text-gray-400 mb-2 text-lg p-2" data-aos="zoom-in" data-aos-duration="2000">
                we give you nothing short of the best. we put our all into
                looking after your funds
              </p>
              <p className="text-xl text-dark-blue font-semibold bg-light-gray p-3 rounded-xl border-l-6 border-dark-blue" data-aos="fade-left" data-aos-duration="2000">
                Everything you need to trade forex and buy crypto in one place
              </p>
              <p className="mt-5" data-aos="zoom-out" data-aos-duration="2000">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                explicabo sit repudiandae molestias excepturi maxime! Hic
                suscipit qui voluptatum eligendi, at ad unde quia, aliquid
                labore voluptas accusantium ea et?
              </p>

              <div className="mt-5">
                <ul className="grid grid-cols-2 gap-10 xl:grid-cols-3">
                  <li data-aos="fade-left" data-aos-duration="1000">
                    <IoIosCheckbox /> Transparency
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <IoIosCheckbox />
                    Safe and Secure
                  </li>
                  <li data-aos="fade-left" data-aos-duration="1000">
                    <IoIosCheckbox />
                    Quick and Easy Withdrawals
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <IoIosCheckbox />
                    Fully Encrypted
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invest */}
      <section>
        <div className="px-6 py-6 mt-2">
          <h2 className="text-2xl text-gray-600 font-semibold mb-10 text-left 2xl:text-center" data-aos="fade-right" data-aos-duration="1000">
            Invest
          </h2>
          <h3 className="text-2xl text-gray-400 font-semibold text-left 2xl:text-center" data-aos="fade-right" data-aos-duration="1000">
            All your crypto investments.
          </h3>
          <h3 className="text-2xl text-dark-blue font-semibold text-left 2xl:text-center" data-aos="fade-right" data-aos-duration="2000">
            All on Tipo&apos;s Broker.
          </h3>
          <div className="mt-10">
            <ul className="grid grid-cols-1 gap-10 tablet:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  name: "Commodities",
                  to: "/invest/commodities",
                  metric: "*",
                  description: "lorem ipsum defoe william gerred hhfhiuh.",
                  symbol: (
                    <IoIosInformationCircleOutline className="text-2xl" />
                  ),
                  img: (
                    <img src={img001} alt="" className="w-full p-2 h-auto" />
                  ),
                  index: "commodities"
                },
                {
                  name: "Crypto Indices",
                  to: "/invest/crypto-indices",
                  metric: "*",
                  description: "lorem ipsum defoe william gerred hhfhiuh.",
                  symbol: (
                    <IoIosInformationCircleOutline className="text-2xl" />
                  ),
                  img: (
                    <img src={img004} alt="" className="w-full p-2 h-auto" />
                  ),
                  index: "crypto-indices"
                },
                {
                  name: "Stocks",
                  to: "/invest/stocks",
                  metric: "*",
                  description: "lorem ipsum defoe william gerred hhfhiuh.",
                  symbol: (
                    <IoIosInformationCircleOutline className="text-2xl" />
                  ),
                  img: (
                    <img src={img002} alt="" className="w-full p-2 h-auto" />
                  ),
                  index: "stocks",
                },
                {
                  name: "Cryptocurrencies",
                  to: "/invest/cryptocurrencies",
                  metric: "*",
                  description: "lorem ipsum defoe william gerred hhfhiuh.",
                  symbol: (
                    <IoIosInformationCircleOutline className="text-2xl" />
                  ),
                  img: (
                    <img src={img001} alt="" className="w-full p-2 h-auto" />
                  ),
                  index: "cryptocurrencies",
                },
              ].map(({ name, to, metric, description, symbol, img, index }) => (
                <Link
                  to={to}
                  key={index}
                  className="p-3 bg-charcoal-gray rounded-lg transition-colors duration-300 group" data-aos="fade-up" data-aos-duration="2000"
                >
                  {/* Name and Metric (only for Commodities and Stocks) */}
                  <h3 className="text-2xl text-white-rice font-semibold flex items-center space-x-2 group-hover:text-teal">
                    <span>{name}</span>
                    {(name === "Commodities" || name === "Stocks") && (
                      <span className="text-3xl text-gray-300 group-hover:text-teal">
                        {metric}
                      </span>
                    )}
                  </h3>

                  {/* Description and Symbol */}
                  <p className="mt-4 text-lg text-gray-400 flex items-center space-x-2 font-mono xl:text-xl group-hover:text-teal">
                    <span>{description}</span>
                    {(name === "Commodities" || name === "Stocks") && (
                      <span className="text-teal">{symbol}</span>
                    )}
                  </p>

                  {/* Image */}
                  <div className="mt-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2">
                    {img}
                  </div>
                </Link>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-gray-500" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <p className="mb-5">
              Investing in stocks and commodities entails risks. Conduct your
              own research before concluding a transaction.
            </p>
            <p>
              *Stocks and Commodities are the underlying assests of the
              contracts offered as Tipo Brokers and are brought to you by Tipo
              Brokers FS.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="px-12 py-6 mt-2">
          <h2 className="text-3xl font-semibold mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
            How it Works?
          </h2>
          <ul className="grid grid-cols-1 gap-20  lg:max-xl:grid-cols-2 xl:grid-cols-4">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-center items-center w-72 h-72 bg-charcoal-gray hover:bg-darker-teal outline-2 outline-gray-200 rounded-full overflow-hidden p-6 transition-colors duration-300 group" data-aos="fade-up" data-aos-duration="2000"
              >
                <p className="text-4xl group-hover:hidden">{trait.logo}</p>
                <h3 className="text-2xl text-center font-semibold mb-2 text-white-rice group-hover:text-gray-100 group-hover:font-extrabold ">
                  {trait.description}
                </h3>
                <p className="mb-10 text-center text-sm text-gray-400 font-semibold group-hover:text-white-rice">
                  {trait.news}
                </p>

                {/* Step Number - Positioned at Bottom Center */}
                <div className="absolute top-57 p-0 flex justify-center bg-white w-50 h-50 rounded-full group-hover:bg-dark-blue group-hover:text-white-rice">
                  <p className="text-lg font-bold py-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                    {trait.step}
                  </p>
                </div>
              </div>
            ))}
          </ul>

          <div className="text-center mt-15" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <p className="text-gray-600">
              Everything you need to trade Forex and buy crypto in one place.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Home;
