
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFish, FaLeaf, FaHeartbeat, FaWater } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import banner from "./photos/consultbanner.jpeg"
import BookingForm from "./BookingForm";
const steps = [
    "Contact via WhatsApp / Form",
    "Share your tank/reptile details",
    "Get expert guidance",
    "Follow plan & improve results",
  ];
const plans = [
    {
      title: "Basic Consultation",
      price: "₹99",
      desc: "Chat support – 20 mins",
      features: [
        "Quick problem solving",
        "Basic fish/reptile guidance",
        "Beginner-friendly advice",
      ],
    },
    {
      title: "Advanced Consultation",
      price: "₹199",
      desc: "Call support – 45 mins",
      features: [
        "Detailed diagnosis",
        "Step-by-step solutions",
        "Live guidance on call",
      ],
      highlight: true,
    },
    {
      title: "Full Setup Planning",
      price: "₹399",
      desc: "Complete detailed guide",
      features: [
        "Tank + equipment planning",
        "Water parameter setup",
        "Long-term maintenance plan",
      ],
    },
  ];
const points = [
    "12+ Years Experience in Aquatics & Reptiles",
    "Real Practical Knowledge (Not Just Theory)",
    "Personalized Solutions for Every Customer",
    "Fast Response & Ongoing Support",
    "Trusted by Hobbyists Across India",
  ];
export default function Consultation() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState("");

  const openBooking = (planTitle = "") => {
    setSelectedPlanTitle(planTitle);
    setShowBooking(true);
  };

  return (
    <section className="w-full min-h-screen py-16 md:py-28 px-4 md:px-6 bg-[#FAFAF8]">

      <div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#1F212E] mb-6"
        >
          Aquatic & Reptile Expert Consultation 🌊
        </motion.h1>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Get 1-on-1 professional guidance for fish care, turtle health,
          aquarium setup, and problem solving — directly from an experienced expert.
        </p>
      </div>

      <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT – TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1F212E] mb-6 leading-tight">
            Confused about your aquarium setup,
            fish health, or reptile care?
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            Get expert guidance from an experienced aquatic specialist with{" "}
            <span className="text-[#9EC07F] font-medium">
              12+ years of hands-on experience
            </span>.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            From beginners to advanced hobbyists — I provide complete solutions
            tailored specifically to your setup.
          </p>

          {/* CTA */}
          <button
            onClick={() => openBooking()}
            className="mt-8 px-8 py-3 rounded-full bg-[#1F212E] text-white
                       hover:bg-[#2b2e3f] transition"
          >
            Get Expert Help
          </button>

        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img
            src={banner}
            alt="Aquarium"
            className="w-full max-w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          />

          {/* FLOATING BADGE */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-2 rounded-full shadow text-sm font-medium text-[#1F212E]">
            12+ Years Experience
          </div>
        </motion.div>

      </div>

    </section>


    <section className="w-full py-16 md:py-28 px-4 md:px-6 bg-[#FAFAF8]">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1F212E] mb-4">
          What You Offer
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Complete solutions for aquariums, reptiles, and aquatic health
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* CARD 1 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm"
        >
          <FaFish className="text-[#9EC07F] text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-[#1F212E] mb-4">
            Aquarium Consultation 🐠
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>• Complete tank setup (beginner to advanced)</li>
            <li>• Fish compatibility guidance</li>
            <li>• Water parameters (pH, ammonia, nitrate)</li>
            <li>• Filtration & equipment selection</li>
            <li>• Aquascaping guidance</li>
          </ul>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm"
        >
          <FaLeaf className="text-[#9EC07F] text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-[#1F212E] mb-4">
            Reptile Consultation 🦎
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>• Enclosure setup (size, substrate, lighting)</li>
            <li>• Temperature & humidity control</li>
            <li>• Diet planning (species-specific)</li>
            <li>• Behavior & stress handling</li>
          </ul>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm"
        >
          <FaHeartbeat className="text-[#9EC07F] text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-[#1F212E] mb-4">
            Health & Treatment Guidance 🏥
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>• Fish disease diagnosis</li>
            <li>• Treatment plans (medication guidance)</li>
            <li>• Emergency support</li>
            <li>• Preventive care tips</li>
          </ul>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm"
        >
          <FaWater className="text-[#9EC07F] text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-[#1F212E] mb-4">
            Water Parameters & Environment 🌡️
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>• pH balancing</li>
            <li>• Temperature optimization</li>
            <li>• Cycling guidance</li>
            <li>• Long-term maintenance plan</li>
          </ul>
        </motion.div>

      </div>

    </section>



    <section className="w-full py-16 md:py-28 px-4 md:px-6 bg-white">

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1F212E] mb-8 md:mb-12"
        >
          Why Choose Me
        </motion.h2>

        {/* POINTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">

          {points.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-[#FAFAF8] p-6 rounded-2xl border border-gray-200"
            >
              <FaCheckCircle className="text-[#9EC07F] text-xl mt-1" />

              <p className="text-gray-700 font-medium">
                {item}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>

    <section className="w-full py-16 md:py-28 px-4 md:px-6 bg-[#FAFAF8]">

{/* HEADER */}
<div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1F212E] mb-4">
    Pricing Plans 💎
  </h2>
  <p className="text-gray-500 text-base md:text-lg">
    Choose the right consultation based on your needs
  </p>
</div>

{/* GRID */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

  {plans.map((plan, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -8 }}
      className={`p-6 md:p-8 rounded-3xl border shadow-sm flex flex-col justify-between
        ${
          plan.highlight
            ? "bg-[#1F212E] text-white border-none scale-105"
            : "bg-white border-gray-200"
        }`}
    >

      {/* TITLE */}
      <div>
        <h3 className="text-xl font-semibold mb-2">
          {plan.title}
        </h3>

        <p className="text-3xl font-bold mb-2">
          {plan.price}
        </p>

        <p className={`mb-6 ${
          plan.highlight ? "text-gray-300" : "text-gray-500"
        }`}>
          {plan.desc}
        </p>

        {/* FEATURES */}
        <ul className="space-y-2 mb-8 text-sm">
          {plan.features.map((f, idx) => (
            <li key={idx}>✔ {f}</li>
          ))}
        </ul>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => openBooking(plan.title)}
        className={`w-full py-3 rounded-full font-semibold transition
          ${
            plan.highlight
              ? "bg-white text-[#1F212E] hover:bg-gray-200"
              : "bg-[#1F212E] text-white hover:bg-[#2b2e3f]"
          }`}
      >
        Book Now
      </button>

    </motion.div>
  ))}

</div>

{/* EXTRA NOTE */}
<div className="text-center mt-10 md:mt-16 text-gray-600">
  <p>💡 Free basic advice available for quick help</p>
  <p>Upgrade anytime for detailed consultation plans</p>
</div>

</section>


<section className="w-full py-16 md:py-28 px-4 md:px-6 bg-white">

{/* HEADER */}
<div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1F212E] mb-4">
    How It Works ⚡
  </h2>
  <p className="text-gray-500 text-base md:text-lg">
    Simple process to get expert help
  </p>
</div>

{/* STEPS */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

  {steps.map((step, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -6 }}
      className="text-center"
    >

      {/* STEP NUMBER */}
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
                      rounded-full bg-[#9EC07F] text-white text-lg font-semibold shadow-md">
        {i + 1}
      </div>

      {/* TEXT */}
      <p className="text-gray-700 font-medium leading-relaxed">
        {step}
      </p>

    </motion.div>
  ))}

</div>

</section>


<section className="w-full py-16 md:py-28 px-4 md:px-6 bg-[#1F212E] text-white relative overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[280px] md:w-[400px] h-[280px] md:h-[400px] max-w-full bg-[#9EC07F]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6"
        >
          🚀 Start Your Consultation Now
        </motion.h2>

        {/* SUBTEXT */}
        <p className="text-gray-300 text-base md:text-lg mb-10">
          Get expert help and build the perfect setup today!
        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openBooking()}
          className="px-10 py-4 rounded-full bg-[#9EC07F] text-[#1F212E] font-semibold
                     hover:bg-[#88b36b] transition shadow-lg"
        >
          Book Consultation
        </motion.button>

      </div>

    </section>

    {showBooking && (
      <BookingForm
        bookingType="consultation"
        plans={plans}
        defaultPlanTitle={selectedPlanTitle}
        onClose={() => setShowBooking(false)}
      />
    )}

    </section>
  );
}