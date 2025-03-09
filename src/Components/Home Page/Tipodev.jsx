import Tipodevimg from "../../assets/Images/PayPal_Logo_Alternative_2.webp"

const Tipodev = () => {
  return (
    <section>
      <div className="flex justify-center"><img src={Tipodevimg} alt="" /></div>
      <div className="mt-20 mb-40 p-4 bg-gray-300 rounded-2xl">
        <p className="leading-relaxed font-semibold text-xl">Tipo Developers is the creative force behind this platform. As the developer, I created a smooth trading experience by fusing state-of-the-art technology with a user-centric design. My goal is to equip traders with strong and user-friendly tools. </p>
      </div>
    </section>
  );
};

export default Tipodev;
