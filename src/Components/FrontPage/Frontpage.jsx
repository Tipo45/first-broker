import { Link } from "react-router-dom";
import img001 from "../../assets/Images/PayPal_Logo_Alternative_2.webp";
const Frontpage = () => {
  return (
    <>
      <section>
        <div className="mt-20 p-6">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
            <div className="bg-amber-300 p-10 rounded-4xl">
              <img src={img001} alt="" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <h3 className="mb-5 text-3xl font-bold">
                Trade on shares and buy crypto with Tipo&apos;s Brokers
              </h3>
              <p className="mb-5 text-amber-500 font-medium">
                Invest with competitive trading conditions and choose from
                hudered of companies across global markets.
              </p>
              <Link to="/registration"><button className="bg-amber-400 text-white-rice text-lg font-bold outline-none p-4 rounded-2xl hover:bg-transparent hover:border-amber-400 border-2 hover:text-black-spider transition-transform duration-300 ease-in-out hover:-translate-y-2">
                Open An Account
              </button></Link>
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

export default Frontpage;
