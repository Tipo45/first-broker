import Footer from "../../Components/Footer/Footer";
import Frontpage from "../../Components/FrontPage/Frontpage";
import Header from "../../Components/Header/Header";
import Apply from "../../Components/Home Page/Apply";
import FAQ from "../../Components/Home Page/FAQ";

const Brokerage = () => {
  return (
    <section>
      <Header />
      <Frontpage />
      <div className="mt-10 mb-20 px-4">
        <div className="flex tablet:justify-center">
          <h1 className="font-semibold text-3xl mb-4">Brokerage</h1>
        </div>
        <div className="mt-2 mb-1">
          <h4 className="text-xl font-semibold text-gray-500">
            Empowering your trades
          </h4>
        </div>
        <div>
          <p className="text-xl tablet:text-center">
            Our brokerage services offer easy access to international markets,
            such as commodities, cryptocurrency, and currencies. We make sure
            you have everything you need to trade with confidence by offering
            competitive spreads, lightning-fast execution, and an intuitive
            platform. Our brokerage is made to fit your demands, regardless of
            your level of trading experience.
          </p>
        </div>
      </div>
      <div className="p-4">
        <Apply />
      </div>
      <div>
        <FAQ />
      </div>
      <Footer />
    </section>
  );
};

export default Brokerage;
