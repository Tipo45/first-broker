import Lottie from "lottie-react";
import Animation1 from "../../assets/Animated Icons/Animation-1.json";
import Animation2 from "../../assets/Animated Icons/Animation-2.json";
import { Link } from "react-router-dom";
import Testimony from "./Testimony";
import Apply from "./Apply";
import PropTypes from "prop-types";
import { FaCheckCircle, FaDog, FaEthereum, FaHandHoldingUsd, FaLaughBeam, FaMinus, FaPaw, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { SiAlgorand, SiBinance, SiBitcoincash, SiBitcoinsv, SiCardano, SiChainlink, SiHedera, SiInternetcomputer, SiLitecoin, SiNear, SiPolkadot, SiSolana, SiStellar, SiSui, SiTesla } from "react-icons/si";
import { RiXrpFill } from "react-icons/ri";
import { TbCurrencyDogecoin } from "react-icons/tb";
import { GiJupiter } from "react-icons/gi";

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

const Cryptoindices = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const indexService = [
    {
      id: "dropdown1",
      offering: "TBCI 4(TBCI4)",
      offerings: [
        {icon: <SiBitcoinsv className="text-[#F7931A] mt-0.5 mr-3 text-2xl" />, description:"Bitcoin"},
        {icon: <FaEthereum className="text-[#3C3C3D] mt-0.5 mr-3 text-2xl" />, 
          description: "Ethereum"
        },
        {icon: <SiSolana className="text-[#00FFA3] mt-0.5 mr-3 text-2xl" />, description: "Solana"},
        {icon: <RiXrpFill className="mt-0.5 mr-3 text-2xl" />, description: "XRP"}
      ],
    },
    {
      id: "dropdown2",
      offering: "TBCI 8(TBCI8)",
      offerings: [
        {icon: <SiBitcoinsv className="text-[#F7931A] mt-0.5 mr-3 text-2xl" />, description:"Bitcoin"},
        {icon: <FaEthereum className="text-[#3C3C3D] mt-0.5 mr-3 text-2xl" />, 
          description: "Ethereum"
        },
        {icon: <SiSolana className="text-[#00FFA3] mt-0.5 mr-3 text-2xl" />, description: "Solana"},
        {icon: <RiXrpFill className="mt-0.5 mr-3 text-2xl" />, description: "XRP"},
        {icon: <SiCardano className="text-[#0033AD] mt-0.5 mr-3 text-2xl" />, description: "Cardano"},
        {icon: <SiChainlink className="text-[#375BD2] mt-0.5 mr-3 text-2xl" />, description: "Chainlink"},
        {icon: <SiStellar className="text-[#08B5E5] mt-0.5 mr-3 text-2xl" />, description: "Stellar"},
        {icon: <SiHedera className="text-[#282828] mt-0.5 mr-3 text-2xl" />, description: "Hedera"}
      ],
    },
    {
      id: "dropdown3",
      offering: "TBCI 12(TBCI12)",
      offerings: [
        {icon: <SiBitcoinsv className="text-[#F7931A] mt-0.5 mr-3 text-2xl" />, description:"Bitcoin"},
        {icon: <FaEthereum className="text-[#3C3C3D] mt-0.5 mr-3 text-2xl" />, 
          description: "Ethereum"
        },
        {icon: <SiSolana className="text-[#00FFA3] mt-0.5 mr-3 text-2xl" />, description: "Solana"},
        {icon: <RiXrpFill className="mt-0.5 mr-3 text-2xl" />, description: "XRP"},
        {icon: <SiCardano className="text-[#0033AD] mt-0.5 mr-3 text-2xl" />, description: "Cardano"},
        {icon: <SiChainlink className="text-[#375BD2] mt-0.5 mr-3 text-2xl" />, description: "Chainlink"},
        {icon: <SiStellar className="text-[#08B5E5] mt-0.5 mr-3 text-2xl" />, description: "Stellar"},
        {icon: <SiHedera className="text-[#282828] mt-0.5 mr-3 text-2xl" />, description: "Hedera"},
        {icon: <SiBitcoincash className="text-[#0AC18E] mt-0.5 mr-3 text-2xl" />, description: "Bitcoin Cash"},
        {icon: <SiLitecoin className="text-[#BEBEBE] mt-0.5 mr-3 text-2xl" />, description: "Lite Coin"},
        {icon: <SiPolkadot className="text-[#E6007A] mt-0.5 mr-3 text-2xl" />, description: "Polkadot"},
        {icon: <SiTesla className="text-[#CC0000]mt-0.5 mr-3 text-2xl" />, description: "Tesla"}
      ],
    },
    {
      id: "dropdown4",
      offering: "TBCI Smart Contract Leaders(TBCISCL)",
      offerings: [
        {icon: <SiSolana className="text-[#00FFA3] mt-0.5 mr-3 text-2xl" />, description: "Solana"},
        {icon: <FaEthereum className="text-[#3C3C3D] mt-0.5 mr-3 text-2xl" />, 
          description: "Ethereum"
        },
        {icon: <SiCardano className="text-[#0033AD] mt-0.5 mr-3 text-2xl" />, description: "Cardano"},
        {icon: <SiHedera className="text-[#282828] mt-0.5 mr-3 text-2xl" />, description: "Hedera"},
        {icon: <SiInternetcomputer
          className="text-gradient-to-r from-[#00FFA3] to-[#DC1FFF] mt-0.5 mr-3 text-2xl " />, description: "Internet Computer"},
        {icon: <SiSui  className="mt-0.5 mr-3 text-2xl" />, description: "Sui"},
        {icon: <SiAlgorand className="mt-0.5 mr-3 text-2xl" />, description: "Algorand"},
        {icon: <SiNear className="mt-0.5 mr-3 text-2xl" />, description: "NEAR Protocol"},
      ],
    },
    {
      id: "dropdown5",
      offering: "TBCI Meme Coin Leaders(TBCIMEME)",
      offerings: [
        {icon: <TbCurrencyDogecoin className="text-[#C2A633] mt-0.5 mr-3 text-2xl" />, description:"Doge Coin"},
        {icon: <FaDog className="text-yellow-500 mt-0.5 mr-3 text-2xl" />, description: "SHIBA INU"},
        {icon: <FaLaughBeam className="text-green-500 mt-0.5 mr-3 text-2xl" />, description: "Pepe Coin"},
        {icon: <FaPaw className="text-gray-500 mt-0.5 mr-3 text-2xl" />, 
          description: "Paws"
        },
      ],
    },
    {
      id: "dropdown6",
      offering: "TBCI DeFi Leaders(TBCIDL)",
      offerings: [
        {icon: <GiJupiter className="text-[#F99B20] mt-0.5 mr-3 text-2xl" />, description:"Jupiter"},
        {icon: <FaHandHoldingUsd className="mt-0.5 mr-3 text-2xl" />, 
          description: "Aave"
        },
      ],
    },
    {
      id: "dropdown7",
      offering: "TBCI Infrastructure Leaders(TBCIIL)",
      offerings: [
        {icon: <SiChainlink className="text-[#375BD2] mt-0.5 mr-3 text-2xl" />, description:"Chainlink"},
        {icon: <SiBinance className="text-[#F3BA2F] mt-0.5 mr-3 text-2xl" />, 
          description: "Binance"
        },
      ],
    },
  ];
  return (
    <section className="py-6 mb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex mb-8">
          <Link to="/">
            <p className="text-md hover:text-teal hover:underline">Home</p>
          </Link>
          <span className="text-gray-500 text-lg mx-2">/</span>
          <p className="text-gray-500 text-xl">Crypto Index</p>
        </div>
      </div>

      <section className="mb-20">
        <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <SectionTitle
              title="Tipo's broker Crypto Index"
              description="The first true crypto index in the world— a simple and automated way to invest across the entire crypto market."
            />
            <GetStartedButton />
          </div>
          <div className="flex justify-center items-center">
            <Lottie animationData={Animation2} className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid gap-8 grid-cols-1 tablet:grid-cols-2">
          <div className="flex justify-center order-2 items-center tablet:order-1">
            <Lottie animationData={Animation1} className="w-full h-auto" />
          </div>
          <div className="mb-8 order-1 tablet:order-2">
            <SectionTitle
              title="Automated crypto investing"
              description="With just one click, the Tipo's broker Crypto Index makes crypto investing effortless. It automatically allocates funds to a carefully selected portfolio of top cryptocurrencies based on market size and liquidity. As the index dynamically adjusts over time, your portfolio stays up-to-date, ensuring you don’t miss emerging opportunities. Simply pick the index that suits your interests, and we’ll handle the rest."
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid gap-2 px-4 grid-cols-1">
          <div className="mb-0">
            <SectionTitle
              title="Why should you invest in Tipo's broker Index"
              description="Tracking the ever-changing crypto market can be challenging and time-consuming, but it doesn't have to be. Tipo's broker Crypto Index offers a hassle-free, long-term solution for building a diversified cryptocurrency portfolio. Not only is it highly convenient, but it also automatically adjusts to market fluctuations, ensuring your investment stays up to date—thanks to our partnership with MarketVector Indexes."
            />
          </div>
          <div>
            <ul className="grid grid-cols-1 tablet:max-xl:grid-cols-2 xl:grid-cols-4">
              <li className="mt-10 px-4">
                <FaCheckCircle className="text-darker-teal text-3xl tablet:text-4xl mb-6" />
                <h4 className="text-xl mb-4 font-medium">
                  Gain complete authority.
                </h4>
                <p className="text-lg">
                  The indices function like any other digital asset on
                  Tipo&apos;s broker, allowing you to buy, sell, or swap all
                  assets in your Crypto Index portfolio instantly.
                </p>
              </li>
              <li className="mt-10 px-4">
                <FaCheckCircle className="text-darker-teal text-3xl tablet:text-4xl mb-6" />
                <h4 className="text-xl mb-4 font-medium">
                  Integrate with a savings strategy.
                </h4>
                <p className="text-lg">
                  Create a savings strategy linked to your index and schedule
                  automatic deposits to consistently grow your portfolio.
                </p>
              </li>
              <li className="mt-10 px-4">
                <FaCheckCircle className="text-darker-teal text-3xl tablet:text-4xl mb-6" />
                <h4 className="text-xl mb-4 font-medium">
                  Don&apos;t let opportunities pass you by.
                </h4>
                <p className="text-lg">
                  We adjust your Index every month, ensuring you don&apos;t have
                  to choose individual top performers or worry about missing the
                  next big opportunity.
                </p>
              </li>
              <li className="mt-10 px-4">
                <FaCheckCircle className="text-darker-teal text-3xl tablet:text-4xl mb-6" />
                <h4 className="text-xl mb-4 font-medium">
                  Expand your range of investments
                </h4>
                <p className="text-lg">
                  Invest automatically in diversified portions of the crypto
                  market to minimize your risk from market fluctuations.
                </p>
              </li>
              <li className="mt-10 px-4">
                <FaCheckCircle className="text-darker-teal text-3xl tablet:text-4xl mb-6" />
                <h4 className="text-xl mb-4 font-medium">
                  Fully supported by assets.
                </h4>
                <p className="text-lg">
                  The assets within our indices are acquired directly from
                  Tipo&apos;s broker and securely stored in cold storage for
                  enhanced protection.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
  <div>
    <div className="px-6 py-6 mt-2">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Tipo&apos;s broker cryptocurrency index service.
      </h2>
      <div>
        <hr className="border-t border-gray-400 my-3 mb-2" />
        {indexService.map(({ id, offering, offerings }) => (
          <div key={id}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(id)}
            >
              <p className="text-lg font-medium">{offering}</p>
              {openDropdown === id ? (
                <FaMinus className="text-gray-600 transition-transform duration-300" />
              ) : (
                <FaPlus className="text-darker-teal transition-transform duration-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === id ? "max-h-250 py-3" : "max-h-0 py-0"
              }`}
            >
              <div className="pl-4">
                <div className="grid grid-cols-1 tablet:max-xl:grid-cols-3 xl:grid-cols-4 gap-4">
                {offerings.map(({ icon, description }, index) => (

                    <div
                      key={index}
                      className="p-4 bg-gray-100 rounded-lg shadow-sm"
                    >
                      <p className="flex text-gray-700"><span>{icon}</span>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-400 my-3 mb-2" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="mt-10 mb-20">
        <Testimony />
      </section>

      <section className="mb-20">
        <SectionTitle title="Join thousands of people on Tipo's broker" />
        <Apply />
      </section>

      <section>
        <p className="text-gray-600 text-md md:text-lg">
          The Bitpanda Crypto Index is Tipo&apos;s broker first regulated
          product, designed with full transparency. Its prospectus outlines all
          key details and has been independently reviewed by an auditor. For a
          comprehensive understanding of Tipo&apos;s broker Crypto Indices,
          including the product’s structure, issuer, and associated risks,
          please download and carefully review the prospectus and its first
          supplement, available in Nigeria.
        </p>
      </section>
    </section>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Cryptoindices;
