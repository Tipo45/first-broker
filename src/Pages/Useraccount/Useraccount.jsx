import { useParams } from "react-router-dom";
import Usersidebar from "../../Components/UserAccount/Usersidebar";
import Userdashbboard from "../../Components/UserAccount/Userdashbboard";
import MyTrades from "../../Components/UserAccount/MyTrades";
import Crypto from "../../Components/UserAccount/Crypto";
import MyInvestments from "../../Components/UserAccount/MyInvestments";
import Nopage from "../404";

const Useraccount = () => {
  const { activepage } = useParams();

  const validPages = [
    "dashboard",
    "my-trades",
    "crypto-accounts",
    "my-investments",
  ];

  const isValidPage = validPages.includes(activepage);

  return (
    <section>
      {isValidPage ? (
        <section className="flex">
          {/* Sidebar */}
          <Usersidebar activepage={activepage} />

          {/* Main Content */}
          <div className="flex-grow pr-1 pl-4 ml-13 mt-1 mb-1 tablet:ml-43 transition-all duration-300 ease-in-out">
            {activepage === "dashboard" && <Userdashbboard />}
            {activepage === "my-trades" && <MyTrades />}
            {activepage === "crypto-accounts" && <Crypto />}
            {activepage === "my-investments" && <MyInvestments />}
          </div>
        </section>
      ) : (
        <Nopage />
      )}
    </section>
  );
};

export default Useraccount;
