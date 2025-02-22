import Footer from "../../Components/Footer/Footer";
import Frontpage from "../../Components/FrontPage/Frontpage";
import Header from "../../Components/Header/Header";
import Apply from "../../Components/Home Page/Apply";
import FAQ from "../../Components/Home Page/FAQ";

const Assetmangement = () => {
  return (
    <section>
      <Header />
      <Frontpage />
      <div className="mt-10 mb-20 px-4">
        <div className="flex tablet:justify-center">
          <h1 className="font-semibold text-3xl mb-4">Asset Management</h1>
        </div>
        <div className="mt-2 mb-1">
          <h4 className="text-xl font-semibold text-gray-500">Grow Your Wealth Strategically</h4>
        </div>
        <div>
          <p className="text-xl tablet:text-center">
            We offer asset management services that are specifically designed to
            assist you in reaching your financial objectives. We provide
            individualized investment strategies, risk management, and portfolio
            diversification through our team of seasoned professionals. Enjoy
            the advantages of wise investing while we take care of the hassles.
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

export default Assetmangement;
