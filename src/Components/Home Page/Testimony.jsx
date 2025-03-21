import David from "../../assets/Images/David_Washington.jpg";
import Kerry from "../../assets/Images/Kerry_Walsh.jpg";
import Timmy from "../../assets/Images/Timmy_Lu.jpg";
import Shanae from "../../assets/Images/Shanae_Williams.jpg";
import PropTypes from "prop-types";

const TestimonialCard = ({ image, name, testimony, rating, duration, delay }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up" // Animation type
      data-aos-duration={duration} // Animation duration
      data-aos-delay={delay} // Animation delay
    >
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="rounded-full w-16 h-16 object-cover border-2 border-teal"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="mt-4 text-gray-600">{testimony}</p>
    </div>
  );
};

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-2xl ${
        index < rating ? "text-yellow-400" : "text-gray-300"
      }`}
    >
      ★
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

const Testimony = () => {
  const testimonials = [
    {
      image: David,
      name: "David Washington",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa natus expedita dicta ab beatae laudantium pariatur e.",
      rating: 5,
      duration: "1000",
      delay: "0", // No delay for the first card
    },
    {
      image: Kerry,
      name: "Kerry Walsh",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa natus expedita dicta ab beatae laudantium pariatur eius.",
      rating: 5,
      duration: "1500",
      delay: "500", // 500ms delay for the second card
    },
    {
      image: Timmy,
      name: "Timmy Lu",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa natus expedita dicta ab beatae.",
      rating: 3,
      duration: "2000",
      delay: "1000", // 1000ms delay for the third card
    },
    {
      image: Shanae,
      name: "Shanae Williams",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa natus expedita dicta ab beatae laudantium pariatur eius cupiditate quod blanditiis maiores, voluptates voluptatum, dignissimos officiis tempore ipsam dolorem reiciendis!",
      rating: 4,
      duration: "2500",
      delay: "1500", // 1500ms delay for the fourth card
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-800"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            In doubt?..., Trust their voices
          </h2>
          <p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Experience genuine joy and fulfillment as our valued clients pursue
            their dreams of financial freedom and elite investment opportunities.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              testimony={testimonial.testimony}
              rating={testimonial.rating}
              duration={testimonial.duration}
              delay={testimonial.delay} // Pass delay to the card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testimony: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired, // Add delay to prop types
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Testimony;