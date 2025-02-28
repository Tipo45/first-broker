import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

const Cryptocurrencies = () => {
  return (
    <section>
      <div className="mt-10 mb-20 px-4">
        <div className="flex">
          <Link to="/">
            <p className="text-lg hover:text-teal hover:underline">Home</p>
          </Link>{" "}
          <span className="text-gray-500 text-lg ml-2 mr-3">/</span>
          <p className="text-gray-500 text-xl">Crypto Currencies</p>
        </div>

        <section>
          <div className="grid gap-2 grid-cols-1 tablet:grid-cols-2">
            <div className="mb-4">
              <h3
                className="text-2xl mb-2 font-extrabold
                  "
              >
                The easy way to own and sell sell commodities
              </h3>

              <p className="text-lg mb-2 font-medium">
                Start trading natural commodities* like aluminium, natural gas,
                rice, oil, for as little as{" "}
                <span className="inline-flex items-center">
                  <TbCurrencyNaira className="mt-0.5 mr-1 text-xl" />
                </span>
                1.
              </p>

              <button className="bg-teal text-white-rice text-lg font-medium p-4 rounded-xl hover:bg-darker-teal cursor-pointer">
                Get Started
              </button>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cryptocurrencies;
