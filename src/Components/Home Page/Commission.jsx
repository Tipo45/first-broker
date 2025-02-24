
const Commission = () => {
  return (
    <section>
      <div className="mt-10 mb-20 px-4">
        <div className="flex tablet:justify-center">
          <h1 className="font-semibold text-3xl mb-4">Commission Account</h1>
        </div>
        <div className="mt-2 mb3">
          <h4 className="text-xl font-semibold text-gray-500">
          Transparent and Cost-Effective
          </h4>
        </div>
        <div>
          <p className="text-xl leading-relaxed text-gray-800 tablet:text-center">
          Our commission-based account has modest fees per trade and clear pricing. This account type offers access to premium services, such as sophisticated analytics and committed support, making it perfect for aggressive traders. Pay less, trade more.
          </p>
        </div>
      </div>

      <div className="mt-10 mb-20 px-4">
        <div className="flex tablet:justify-center">
          <h1 className="font-semibold text-3xl mb-4">Standard Account</h1>
        </div>
        <div className="mt-2 mb-3">
          <h4 className="text-xl font-semibold text-gray-500">
          Start Trading with Ease
          </h4>
        </div>
        <div>
          <p className="text-xl leading-relaxed text-gray-800 tablet:text-center">
          Our regular account, which has reasonable spreads and no commissions, is ideal for beginners. Take advantage of a simple trading experience that gives you access to all of the main markets and instructional materials to help you develop as a trader.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commission;
