import React, { useState } from "react";
import ModifiedNavbar from "../components/ModifiedNavbar";
import Footer from "../components/Footer";
import plus_icon from "../assets/icons/plus.svg";
import close_icon from "../assets/icons/close.svg";

const Faq = () => {
  const faqData = [
    {
      id: "1",
      question: "What is Veni Discere Investments?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
    },
    {
      id: "2",
      question: "How can I join Veni Discere Investments?",
      answer: "You can join VDI here  and following the registration process.",
    },
    {
      id: "3",
      question: "What are the membership plans available?",
      list: "yes",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
    },
    {
      id: "4",
      question: "What kind of signals do you provide?",
      answer:
        "We provide signals for various cryptocurrencies, offering insights into potential market movements, entry points, and exit strategies.",
    },
    {
      id: "5",
      question: "Is there a guarantee of profit with the signals?",
      answer:
        "While we strive for success, trading inherently involves risks. We cannot guarantee profits, but our signals are designed to provide valuable insights for informed decision-making. Vigorous testing of our trading strategies have yielded a 95% rate.",
    },
    {
      id: "6",
      question: "How frequently are signals provided?",
      answer:
        "Signal frequency varies based on the membership plan. Moon Membership offers X signals per day, Mars Mastery provides X signals, and Jupiter Elite offers X signals daily.",
    },
    {
      id: "7",
      question: "What is included in the custom deep analysis feature?",
      answer:
        "The custom deep analysis feature includes a detailed assessment of a specific coin or project, providing personalized insights for tailored investment decisions.",
    },
    {
      id: "8",
      question: "How do I access the community at Veni Discere Investments?",
      answer:
        "Become a member today to access our community. If you would like to keep up to date with VDI’s  work join our free Telegram community and follow us on our socials.",
    },
    {
      id: "9",
      question:
        "How is Veni Discere Investments different from other trading groups?",
      answer:
        "Veni Discere differentiates itself by offering a holistic approach, combining expert signals, a thriving community, and a commitment to continuous research and development.",
    },
    {
      id: "10",
      question:
        "How can I engage with Veni Discere their account management services?",
      answer:
        "Prior to launching our global community, VDI has been working with a wide range of individual clients with personalised and goal oriented investment experience. We’d be happy to connect and discuss our services with you - please contact our team here.",
    },
    {
      id: "11",
      question:
        "Is Veni Discere Investments regulated by any financial authority?",
      answer:
        "No, Veni Discere is not a certified investment firm and is not regulated by any government agency or financial institution.",
    },
    {
      id: "12",
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team 24/7 here.",
    },
    {
      id: "13",
      question:
        "Is my personal information secure with Veni Discere Investments?",
      answer:
        "VDI will never ask for your personal information under any circumstances.",
    },
  ];
  const [showAnswer, setShowAnswer] = useState({});
  const toggleAnswer = (id) => {
    setShowAnswer({
      [id]: !showAnswer[id],
    });
  };
  return (
    <div>
      <ModifiedNavbar pageTitle="FAQs" />
      <div className=" py-[4rem] max-w-[1200px] m-auto max-[480px]:px-4 ">
        <h1 className=" font-lexend text-[2.5rem] font-[500] mb-[5rem] max-[480px]:text-[1.75rem]  ">
          {" "}
          Frequently Asked Questions{" "}
        </h1>
        <div className=" flex flex-col gap-y-[2.19rem] ">
          {faqData.map((item) => {
            return (
              <div
                key={item.id}
                className=" border-b border-light-gray-backdrop pb-[2rem]"
                onClick={() => toggleAnswer(item.id)}
              >
                <div className="flex items-start justify-between">
                  <p className=" pb-[1rem] font-lexendDeca text-[1.125rem] font-[500] leading-[120%] ">
                    {item.question}
                  </p>
                  {showAnswer[item.id] ? (
                    <img
                      src={close_icon}
                      alt="close_icon"
                      className=" w-[1rem] "
                    />
                  ) : (
                    <img src={plus_icon} alt="plus_icon" className="w-[1rem]" />
                  )}
                </div>
                <p className=" font-sora text-[1rem] text-text-gray ">
                  {" "}
                  {showAnswer[item.id] && item.answer}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
