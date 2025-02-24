import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Frontpage from "../../Components/FrontPage/Frontpage";
import Header from "../../Components/Header/Header";
import Apply from "../../Components/Home Page/Apply";
import Assetmangement from "../../Components/Home Page/Assetmangement";
import Brokerage from "../../Components/Home Page/Brokerage";
import Commission from "../../Components/Home Page/Commission";
import FAQ from "../../Components/Home Page/FAQ";
import Quickaccess from "../../Components/Home Page/Quickaccess";

const Homelinks = () => {
  const { accessedpage } = useParams();

  return (
    <section>
      <Header />
      <Frontpage />
      <div>
        {accessedpage === "asset-management" && <Assetmangement />}
        {accessedpage === "commission-account" && <Commission />}
        {accessedpage === "brokerage" && <Brokerage />}
      </div>
      <div className="p-4">
        <Quickaccess accessedpage={accessedpage} />
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

export default Homelinks;
