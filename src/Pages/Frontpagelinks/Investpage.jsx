import Header from "../../Components/Header/Header";
import Apply from "../../Components/Home Page/Apply";
import Footer from "../../Components/Footer/Footer";
import Cryptoindices from "../../Components/Home Page/Cryptoindices";
import Stocks from "../../Components/Home Page/Stocks";
import Cryptocurrencies from "../../Components/Home Page/Cryptocurrencies";
import Commodities from "../../Components/Home Page/Commodities";
import { useParams } from "react-router-dom";

const Investpage = () => {
  const { segment } = useParams();

  return (
    <section>
      <Header />
      <div className="mt-20 px-4">
        {segment === "commodities" && <Commodities />}
        {segment === "crypto-indices" && <Cryptoindices />}
        {segment === "stocks" && <Stocks />}
        {segment === "cryptocurrencies" && <Cryptocurrencies />}
      </div>

      <div className="p-4">
        <Apply />
      </div>

      <Footer />
    </section>
  );
};

export default Investpage;
