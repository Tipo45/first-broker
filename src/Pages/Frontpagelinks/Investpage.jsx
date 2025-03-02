import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Cryptoindices from "../../Components/Home Page/Cryptoindices";
import Stocks from "../../Components/Home Page/Stocks";
import Cryptocurrencies from "../../Components/Home Page/Cryptocurrencies";
import Commodities from "../../Components/Home Page/Commodities";
import { useParams } from "react-router-dom";
import Nopage from "../404";

const Investpage = () => {
  const { segmentpage } = useParams();

  
  const validPages = [
    "commodities",
    "crypto-indices",
    "stocks",
    "cryptocurrencies",
  ];

  
  const isValidPage = validPages.includes(segmentpage);

  return (
    <section>
      {isValidPage ? (
        <section>
          <Header />
          <div className="mt-20 px-4">
            {segmentpage === "commodities" && <Commodities />}
            {segmentpage === "crypto-indices" && <Cryptoindices />}
            {segmentpage === "stocks" && <Stocks />}
            {segmentpage === "cryptocurrencies" && <Cryptocurrencies />}
          </div>

          <Footer />
        </section>
      ) : (
        <Nopage />
      )}
    </section>
  );
};

export default Investpage;
