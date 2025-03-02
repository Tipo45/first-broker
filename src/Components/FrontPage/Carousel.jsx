import { Link } from "react-router-dom";
import img001 from "../../assets/Images/PayPal_Logo_Alternative_2.webp";

const Frontcarousel = () => {
  return (
    <>
      <section>
        <div className="mt-20 p-6">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
            <div className="bg-dark-blue p-10 rounded-4xl">
              <img src={img001} alt="" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <h3 className="mb-5 text-3xl font-bold">
                Trade on shares and buy crypto with Tipo&apos;s Brokers
              </h3>
              <p className="mb-5 text-charcoal-gray font-medium">
                Invest with competitive trading conditions and choose from
                hundred of companies across global markets.
              </p>
              <Link to="/registration" className="">
                <button className="relative bg-teal text-white-rice text-lg font-bold outline-none p-4 rounded-2xl border-2 border-transparent overflow-hidden group hover:text-black-spider transition-colors duration-300 ease-in-out">
                  <span className="relative z-10">Open an account</span>
                  <div className="absolute inset-y-0 left-[-100%] w-full bg-white border-1 border-darker-teal transition-all duration-300 ease-in-out group-hover:left-0 z-0"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-15 text-center">
            <p className="text-sm text-gray-500">
              *Risk warning: Our services involve significant risk and can
              result in the loss of your invested capital.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frontcarousel;
