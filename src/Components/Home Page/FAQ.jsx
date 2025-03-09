import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQ = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const faqData = [
    {
      id: "dropdown1",
      question: "What are the fees and charges?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi fugit ipsam iusto deserunt.",
    },
    {
      id: "dropdown2",
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi fugit ipsam iusto deserunt.",
    },
    {
      id: "dropdown3",
      question: "Are my funds safe?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi fugit ipsam iusto deserunt.",
    },
  ];

  return (
    <section>
      <div className="px-6 py-6 mt-2">
        <h2 className="text-3xl font-semibold mb-12 text-center" data-aos="fade-down" data-aos-duration="1000">
          Frequently Asked Questions
        </h2>
        <div>
          {/** FAQ Items */}
          {faqData.map(({ id, question, answer }) => (
            <div key={id} data-aos="fade-right" data-aos-duration="2000">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(id)}
              >
                <p className="text-lg">{question}</p>
                {openDropdown === id ? (
                  <FaMinus className="text-teal transition-transform duration-300" />
                ) : (
                  <FaPlus className="text-gray-600 transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === id ? "max-h-40 py-3" : "max-h-0 py-0"
                }`}
              >
                <div className="pl-4">
                  <p className="px-2 text-gray-700">{answer}</p>
                </div>
              </div>
              <hr className="border-t border-gray-400 my-3 mb-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
