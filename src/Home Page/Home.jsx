import { useState } from "react";
import { FaMinus, FaMoneyBill1Wave, FaPlus, FaUserPlus } from "react-icons/fa6";
import { IoIosCheckbox, IoIosInformationCircleOutline } from "react-icons/io";
import { MdAppRegistration, MdOutlineAccessTime } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import paypalimag from "../assets/Images/PayPal_Logo_Alternative_2.webp";
import { BiBookOpen } from "react-icons/bi";
import img001 from "../assets/Images/PayPal_Logo_Alternative_2.webp";
import img002 from "../assets/Images/Stripe_id7qRMcZ8P_0.svg";
import img004 from "../assets/Images/Visa Inc._idDUM8TcN7_1.png";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";

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

const elements = [
  {
    name: "Commodities",
    metric: "*",
    description: "lorem ipsum defoe william gerred hhfhiuh.",
    symbol: <IoIosInformationCircleOutline className="text-2xl" />,
    img: <img src={img001} alt="" className="w-full p-2 h-auto" />,
  },
  {
    name: "Crypto Indices",
    metric: "*",
    description: "lorem ipsum defoe william gerred hhfhiuh.",
    symbol: <IoIosInformationCircleOutline className="text-2xl" />,
    img: <img src={img004} alt="" className="w-full p-2 h-auto" />,
  },
  {
    name: "Stocks",
    metric: "*",
    description: "lorem ipsum defoe william gerred hhfhiuh.",
    symbol: <IoIosInformationCircleOutline className="text-2xl" />,
    img: <img src={img002} alt="" className="w-full p-2 h-auto" />,
  },
  {
    name: "NFTs",
    metric: "*",
    description: "lorem ipsum defoe william gerred hhfhiuh.",
    symbol: <IoIosInformationCircleOutline className="text-2xl" />,
    img: <img src={img001} alt="" className="w-full p-2 h-auto" />,
  },
  {
    name: "Cryptocurrencies",
    metric: "*",
    description: "lorem ipsum defoe william gerred hhfhiuh.",
    symbol: <IoIosInformationCircleOutline className="text-2xl" />,
    img: <img src={img001} alt="" className="w-full p-2 h-auto" />,
  },
];

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
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      {/* Why choose us? */}
      <section>
        <div className="px-6 py-6 mt-20">
          <h1 className="text-3xl font-semibold mb-12 text-center">
            Why Choose Us?
          </h1>

          <ul className="grid grid-cols-1 gap-10 tablet:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="p-6 flex flex-col items-center text-center"
              >
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
          <h1 className="text-3xl font-semibold mb-12 text-center">
            Tipo&apos;s Broker In Numbers
          </h1>
          <ul className="grid grid-cols-1 gap-10 tablet:grid-cols-2 xl:grid-cols-4">
            {attributes.map((attribute, index) => (
              <li
                key={index}
                className={`p-5 flex flex-col items-center text-center rounded-lg text-2xl font-extrabold 
        ${
          attribute.tag === "Active Accounts"
            ? "bg-blue-500 text-white" // Custom styles for this specific item
            : "bg-amber-200 text-black-spider"
        }`}
              >
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
            <img src={paypalimag} alt="" className="w-full h-auto" />
            <div>
              <h2 className="text-2xl mb-1 text-gray-500">Our Services</h2>
              <h3 className="text-2xl">
                In a Fast Moving Market,
                <span className="text-amber-900 text-3xl">
                  Choose a Trusted Broker...
                </span>
              </h3>
              <p className="text-gray-400 mb-2 text-lg p-2">
                we give you nothing short of the best. we put our all into
                looking after your funds
              </p>
              <p className="text-xl font-semibold bg-amber-600 p-3 rounded-xl border-l-6 border-black-spider">
                Everything you need to trade forex and buy crypto in one place
              </p>
              <p className="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                explicabo sit repudiandae molestias excepturi maxime! Hic
                suscipit qui voluptatum eligendi, at ad unde quia, aliquid
                labore voluptas accusantium ea et?
              </p>

              <div className="mt-5">
                <ul className="grid grid-cols-2 gap-10 xl:grid-cols-3">
                  <li>
                    <IoIosCheckbox /> Transparency
                  </li>
                  <li>
                    <IoIosCheckbox />
                    Safe and Secure
                  </li>
                  <li>
                    <IoIosCheckbox />
                    Quick and Easy Withdrawals
                  </li>
                  <li>
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
          <h2 className="text-2xl text-gray-500 font-semibold mb-10 text-left 2xl:text-center">
            Invest
          </h2>
          <h3 className="text-2xl text-amber-900 font-semibold text-left 2xl:text-center">
            All your crypto investments.
          </h3>
          <h3 className="text-2xl text-amber-900 font-semibold text-left 2xl:text-center">
            All on Tipo&apos;s Broker.
          </h3>
          <div className="mt-10">
            <ul className="grid grid-cols-1 gap-10 tablet:grid-cols-2 xl:grid-cols-4">
              {elements.map((element, index) => (
                <a
                  href=""
                  key={index}
                  className="p-3 bg-amber-900 rounded-lg transition-colors duration-300 group"
                >
                  {/* Name and Metric (only for Commodities and Stocks) */}
                  <h3 className="text-2xl font-semibold flex items-center space-x-2 group-hover:text-green-300">
                    <span>{element.name}</span>
                    {(element.name === "Commodities" ||
                      element.name === "Stocks") && (
                      <span className="text-3xl text-gray-300 group-hover:text-green-300">
                        {element.metric}
                      </span>
                    )}
                  </h3>

                  {/* Description and Symbol */}
                  <p className="mt-4 text-lg flex items-center space-x-2 font-mono xl:text-xl group-hover:text-green-300">
                    <span>{element.description}</span>
                    {(element.name === "Commodities" ||
                      element.name === "Stocks") && (
                      <span className="text-green-300">{element.symbol}</span>
                    )}
                  </p>

                  {/* Image */}
                  <div className="mt-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2">
                    {element.img}
                  </div>
                </a>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-gray-500">
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
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How it Works?
          </h2>
          <ul className="grid grid-cols-1 gap-20  lg:max-xl:grid-cols-2 xl:grid-cols-4">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-center items-center w-72 h-72 bg-amber-400 hover:bg-amber-950 outline-2 outline-gray-200 rounded-full overflow-hidden p-6 transition-colors duration-300 group"
              >
                <p className="text-4xl group-hover:hidden">{trait.logo}</p>
                <h3 className="text-2xl text-center font-semibold mb-2 group-hover:text-gray-100 group-hover:font-extrabold">
                  {trait.description}
                </h3>
                <p className="mb-10 text-center text-sm text-gray-500 group-hover:text-white-rice">{trait.news}</p>

                {/* Step Number - Positioned at Bottom Center */}
                <div className="absolute top-57 p-0 flex justify-center bg-white w-50 h-50 rounded-full group-hover:bg-black-spider group-hover:text-white-rice">
                  <p className="text-lg font-bold py-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">{trait.step}</p>
                </div>
              </div>
            ))}
          </ul>

          <div className="text-center mt-15">
            <p className="text-gray-600">
              Everything you need to trade Forex and buy crypto in one place.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="px-6 py-6 mt-2">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div>
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("dropdown1")}
              >
                <p className="text-lg">What are the fee and charges?</p>
                {openDropdown === "dropdown1" ? (
                  <FaMinus className="text-gray-600 transition-transform duration-300" />
                ) : (
                  <FaPlus className="text-gray-600 transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "dropdown1"
                    ? "max-h-40 py-3"
                    : "max-h-0 py-0"
                }`}
              >
                <div className="pl-4">
                  <p className="px-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nisi fugit ipsam iusto deserunt reiciendis
                    dolores aut, magni facere omnis cum officia dolorum aliquam
                    possimus soluta iure, quia sapiente adipisci.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-400 my-3 mb-2" />

            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("dropdown2")}
              >
                <p className="text-lg">How do I get started?</p>
                {openDropdown === "dropdown2" ? (
                  <FaMinus className="text-gray-600 transition-transform duration-300" />
                ) : (
                  <FaPlus className="text-gray-600 transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "dropdown2"
                    ? "max-h-40 py-3"
                    : "max-h-0 py-0"
                }`}
              >
                <div className="pl-4">
                  <p className="px-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nisi fugit ipsam iusto deserunt reiciendis
                    dolores aut, magni facere omnis cum officia dolorum aliquam
                    possimus soluta iure, quia sapiente adipisci.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-400 my-3 mb-2" />

            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("dropdown3")}
              >
                <p className="text-lg">Are my funds safe?</p>
                {openDropdown === "dropdown3" ? (
                  <FaMinus className="text-gray-600 transition-transform duration-300" />
                ) : (
                  <FaPlus className="text-gray-600 transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "dropdown3"
                    ? "max-h-40 py-3"
                    : "max-h-0 py-0"
                }`}
              >
                <div className="pl-4">
                  <p className="px-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nisi fugit ipsam iusto deserunt reiciendis
                    dolores aut, magni facere omnis cum officia dolorum aliquam
                    possimus soluta iure, quia sapiente adipisci.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-400 my-3 mb-2" />

            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("dropdown4")}
              >
                <p className="text-lg">What are the fee and charges?</p>
                {openDropdown === "dropdown4" ? (
                  <FaMinus className="text-gray-600 transition-transform duration-300" />
                ) : (
                  <FaPlus className="text-gray-600 transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "dropdown4"
                    ? "max-h-40 py-3"
                    : "max-h-0 py-0"
                }`}
              >
                <div className="pl-4">
                  <p className="px-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nisi fugit ipsam iusto deserunt reiciendis
                    dolores aut, magni facere omnis cum officia dolorum aliquam
                    possimus soluta iure, quia sapiente adipisci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
