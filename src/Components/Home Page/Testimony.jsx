import David from "../../assets/Images/David_Washington.jpg";

const Testimony = () => {
  return (
    <section>
      <div>
        <div>
          <h2 className="text-3xl text-center">In doubt?..., Trust their voices</h2>
          <p className="py-4 text-gray-700 text-lg text-center">
            Experience genuine joy and fulfillment as our valued clients pursue
            their dreams of financial freedom and elite investment
            opportunities.
          </p>
        </div>
        <div className="grid gap-10 mt-10 grid-cols-1 tablet:max-xl:grid-cols-2 xl:grid-cols-3">
          <div className="bg-darker-teal p-2 rounded-lg">
            <img src={David} alt="" className="rounded-full w-30 h-30" />
            <h4 className="text-2xl font-medium text-dark-blue">
              David Washington
            </h4>
            <p className="p-4 text-light-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
              natus expedita dicta ab beatae laudantium pariatur e
            </p>
          </div>
          <div className="bg-darker-teal p-2 rounded-lg">
            <img src="" alt="" />
            <h4 className="text-2xl font-medium text-dark-blue">Kerry Walsh</h4>
            <p className="p-4 text-light-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
              natus expedita dicta ab beatae laudantium pariatur eius{" "}
            </p>
          </div>
          <div className="bg-darker-teal p-2 rounded-lg">
            <img src="" alt="" />
            <h4 className="text-2xl font-medium text-dark-blue">Timmy Lu</h4>
            <p className="p-4 text-light-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
              natus expedita dicta ab beatae{" "}
            </p>
          </div>
          <div className="bg-darker-teal p-2 rounded-lg">
            <img src="" alt="" />
            <h4 className="text-2xl font-medium text-dark-blue">
              Shanae Williams
            </h4>
            <p className="p-4 text-light-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
              natus expedita dicta ab beatae laudantium pariatur eius cupiditate
              quod blanditiis maiores, voluptates voluptatum, dignissimos
              officiis tempore ipsam dolorem reiciendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
