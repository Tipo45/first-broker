import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home Page/Home";
import { useEffect, useState } from "react";
import Frontcarousel from "../../Components/FrontPage/Carousel";

const FirstDisplay = () => {
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
    <div className="m-0 p-0 box-border">
      <Header />
      <main>
        <Frontcarousel />
        <Home />
      </main>
      <Footer />
      <button
        className="fixed bottom-8 right-8 p-4 bg-teal text-white-rice rounded-full shadow-lg hover:bg-darker-teal transition-all duration-300 z-50"
        onClick={() => scrollTo(isAtTop ? "bottom" : "top")}
        aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
      >
        {isAtTop ? <FaArrowDown size={24} /> : <FaArrowUp size={24} />}
      </button>
    </div>
  );
};

export default FirstDisplay;
