import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Apply from "../../Components/Home Page/Apply";
import Assetmangement from "../../Components/Home Page/Assetmangement";
import Brokerage from "../../Components/Home Page/Brokerage";
import Commission from "../../Components/Home Page/Commission";
import FAQ from "../../Components/Home Page/FAQ";
import Quickaccess from "../../Components/Home Page/Quickaccess";
import Nopage from "../404";
import Frontcarousel from "../../Components/FrontPage/Carousel";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Homelinks = () => {
  const { accessedpage } = useParams();

  // Define the valid pages
  const validPages = ["asset-management", "commission-account", "brokerage"];

  // Check if accessedpage is valid
  const isValidPage = validPages.includes(accessedpage);

  const [isAtTop, setIsAtTop] = useState(true);
  
    const scrollTo = (position) => {
      window.scrollTo({
        top: position === "top" ? 0 : document.body.scrollHeight,
        behavior: "smooth",
      });
    };
  
    const handleScroll = () => {
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
     
  
      
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setIsAtTop(false); 
      } else if (scrollTop === 0) {
        setIsAtTop(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <section>
      {isValidPage ? (
        <section className="overflow-hidden">
          <Header />
          <Frontcarousel />

          <>
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
          </>
          <button
                  className="fixed bottom-8 right-8 p-4 bg-teal text-white-rice rounded-full shadow-lg hover:bg-darker-teal transition-all duration-300 z-50"
                  onClick={() => scrollTo(isAtTop ? "bottom" : "top")}
                  aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
                >
                  {isAtTop ? <FaArrowDown size={24} /> : <FaArrowUp size={24} />}
                </button>
          <Footer />
        </section>
      ) : (
        <Nopage /> // Render the 404 page if accessedpage is invalid
      )}
    </section>
  );
};

export default Homelinks;
