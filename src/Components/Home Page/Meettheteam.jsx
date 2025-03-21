import Seniordev from "../../assets/Images/David_Washington.jpg";
import UI_UX from "../../assets/Images/Kerry_Walsh.jpg";
import Projlead from "../../assets/Images/Shanae_Williams.jpg";

const Meettheteam = () => {
  return (
    <section>
      <div className="mb-6">
        <div className="mt-10 mb-20 p-4 bg-light-gray rounded-2xl">
          <p className="leading-relaxed font-semibold text-xl" data-aos="fade-up" data-aos-duration="1000">
            Our goal at Tipo&apos;s Broker is to empower traders by providing
            them with cutting-edge tools, clear pricing, and first-rate service.
            We were established by a group of computer enthusiasts and financial
            professionals with the goal of enabling trading to be profitable and
            accessible to anyone.
          </p>
          <p className="leading-relaxed font-semibold text-xl mt-6" data-aos="fade-up"
     data-aos-duration="2000">
            Our team consists of a mix of digital innovators, customer service
            specialists, and financial professionals. We all put in a lot of
            effort to give you the greatest trading experience possible. Learn
            about the personalities who make up Tipo&apos;s Broker and the
            passion that motivates us.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <img
              src={Seniordev}
              alt="senior developer"
              className="rounded-full w-16 h-16 object-cover border-2 border-teal" data-aos="fade-up"
     data-aos-duration="500"
            />
            <span className="text-sm mt-2" data-aos="fade-up"
     data-aos-duration="700">The Senior Developer</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={UI_UX}
              alt="ui/ux"
              className="rounded-full w-16 h-16 object-cover border-2 border-teal" data-aos="fade-up"
     data-aos-duration="1500"
            />
            <span className="text-sm mt-2" data-aos="fade-up"
     data-aos-duration="1700">UI/UX</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Projlead}
              alt="project lead"
              className="rounded-full w-16 h-16 object-cover border-2 border-teal" data-aos="fade-up"
     data-aos-duration="2000"
            />
            <span className="text-sm mt-2" data-aos="fade-up"
     data-aos-duration="2200">Project Lead</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meettheteam;
