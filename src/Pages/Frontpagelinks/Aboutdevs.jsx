import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Meettheteam from "../../Components/Home Page/Meettheteam";
import Tipodev from "../../Components/Home Page/Tipodev";

const Aboutdevs = () => {
  const { section } = useParams(); // Get the route parameter

  return (
    <section>
      <Header />
      <div className="mt-20 px-4">
        <Link to="/">
          <div className="inline-flex items-center p-2 rounded-full hover:bg-gray-500 transition duration-300 group">
            <FaArrowAltCircleLeft className="text-2xl text-black-spider group-hover:text-white-rice" />
          </div>
        </Link>

        {/* Conditionally render components based on the route parameter */}
        {section === "tipodev" && <Tipodev />}
        {section === "meettheteam" && <Meettheteam />}

        {/* Default rendering if no section is specified */}
        {!section && (
          <>
            <Tipodev />
            <Meettheteam />
          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Aboutdevs;