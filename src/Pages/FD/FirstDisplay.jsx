import Footer from "../../Components/Footer/Footer";
import Frontpage from "../../Components/FrontPage/Frontpage";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home Page/Home";

const FirstDisplay = () => {
  return (
    <div className="m-0 p-0 box-border">
      <Header />
      <main>
        <Frontpage />
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default FirstDisplay;
