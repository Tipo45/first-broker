import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Meettheteam from "../../Components/Home Page/Meettheteam";
import Tipodev from "../../Components/Home Page/Tipodev";
import Nopage from "../404";

const Aboutdevs = () => {
  const { sectionpage } = useParams();

  const validPages = ["tipo-dev", "meet-the-team"];

 
  const isValidPage = validPages.includes(sectionpage);

  return (
    <section>
      {isValidPage ? (
        <section className="overflow-hidden">
          <Header />
          <div className="mt-20 px-4">
            <Link to="/">
              <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group" data-aos="fade-right"
     data-aos-duration="1000">
                <FaArrowAltCircleLeft className="text-2xl text-black-spider group-hover:text-white-rice" />
              </div>
            </Link>

            {sectionpage === "tipo-dev" && <Tipodev />}
            {sectionpage === "meet-the-team" && <Meettheteam />}
          </div>
          <Footer />
        </section>
      ) : (
        <Nopage />
      )}
    </section>
  );
};

export default Aboutdevs;
