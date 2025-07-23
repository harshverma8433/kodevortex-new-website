import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const cards = [
    {
      bgColor: "bg-slate-900",
      textColor: "text-white",
      name: "Basic Plan",
      title: "Customized pricing based on specific requirements",
      description: "Flexible training schedules available",
      points: [
        "Tailored training programs for college students",
        "Industry-relevant projects and hackathons",
        "Startup incubation and business modeling support",
      ],
    },
    {
      bgColor: "bg-slate-900",
      textColor: "text-white",
      name: "Business Plan",
      title: "Customized pricing based on specific requirements",
      description: "Access to industry experts for guidance and support",
      points: [
        "Intellectual property rights guidance",
        "Marketing seminars for product promotion",
        "Continuous mentoring and support online/offline",
        "Vendor and manufacturer connections for project development",
      ],
    },
    {
      bgColor: "bg-slate-900",
      textColor: "text-white",
      name: "Enterprise Plan",
      title: "Customized pricing based on specific requirements",
      description: "Access to startup incubation training and support",
      points: [
        "Project exhibitions and funding opportunities",
        "Mentorship for funding through startup initiatives",
        "Institute level benefits for reputation enhancement",
        "National education policy compliance and accreditation support",
        "NAAC and NBA accreditation assistance",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 md:px-16 lg:px-32 py-6 lg:py-12  lg:mt-20"
    >
      <div className="flex flex-col items-center text-white justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-xl sm:text-2xl">Choose the perfect plan for youself</h1>
          <h1 className="text-3xl sm:text-4xl font-serif py-6">Pricing Plan</h1>
          <h1 className="text-lg sm:text-xl">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
          </h1>
        </motion.div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 items-center"
        >
          <div
            className="relative flex items-center w-full max-w-xs h-12 rounded-full cursor-pointer"
            onClick={() => setIsMonthly(!isMonthly)}
          >
            <div className="absolute inset-0 flex">
              <div
                className={`w-1/2 h-full  rounded-full transition-all duration-300 ${
                  isMonthly ? "bg-red-500" : "bg-red-500 translate-x-full"
                }`}
              />
            </div>
            <div className="flex space-x-24 px-5    border-2 rounded-full border-red-500 justify-between text-lg font-semibold relative z-10">
              <span
                className={` text-center py-3 transition-colors duration-300 ${
                  isMonthly ? "text-white" : "text-red-500"
                }`}
              >
                Monthly
              </span>
              <span
                className={` text-center py-3 transition-colors duration-300 ${
                  isMonthly ? "text-red-500" : "text-white"
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className={`flex flex-col justify-between p-6 rounded-2xl shadow-lg ${card.bgColor} ${card.textColor} h-auto`}
          >
            <div>
              <h2 className="text-base text-center font-bold">{card.name}</h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-10 py-4 font-semibold">
                {card.title}
              </h2>
              <p className="my-2 text-base sm:text-lg">{card.description}</p>
              <ul className="py-4 space-y-4 text-base sm:text-lg">
                {card.points.map((point, idx) => (
                  <li key={idx}>✅ {point}</li>
                ))}
              </ul>
            </div>
            <div>
              <button className="mt-4 w-full bg-slate-500 hover:bg-slate-600 text-white py-2 rounded-full">
                Contact us for a personalized quote
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
