import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
// Hero video is hosted on Cloudinary (too large for the repo).
// Set VITE_HERO_VIDEO_URL in your .env / Vercel env to your uploaded video URL.
const video1 = import.meta.env.VITE_HERO_VIDEO_URL || "";
import { FaPlay } from "react-icons/fa";
import logo from "./photos/logodesign.png";
import r1 from "./photos/review.jpeg"
import r2 from "./photos/review1.jpeg"
import r3 from "./photos/review2.jpeg"
import r4 from "./photos/review3.jpeg"
import r5 from "./photos/review4.jpeg"
import r6 from "./photos/review5.jpeg"
import r7 from "./photos/review7.jpeg"
import turtle from "./photos/turtle.jpeg"
import fish from "./photos/fish.jpg"
import fish2 from "./photos/fish2.jpeg"
import setup from "./photos/setup.jpeg"
import consultation from "./photos/consult.jpeg"
import { FaStar } from "react-icons/fa";

const reviews = [r1, r2, r3, r4, r5, r6, r7];
const instagramPosts = [
turtle,
fish,
  "https://images.unsplash.com/photo-1772718460103-4fb28ce6fc0b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  fish2,
  setup,
  "https://images.unsplash.com/photo-1759222859663-4df7dbb9761b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Hero() {
  const scrollRef = useRef();
  return (
    <>
    <section className="w-full min-h-screen bg-gradient-to-br from-[#e6f7f5] via-[#d4f1ee] to-[#c2e9e5] flex flex-col items-center justify-center px-4 md:px-6 text-center">

      {/* LOGO */}
      <div className="text-center">
      <img
  src={logo}
  alt="AquaHari Logo"
  className="w-56 md:w-80 lg:w-96 mx-auto mb-4"
/>
  </div>

      {/* DESCRIPTION */}
      <p className="max-w-4xl text-[#4b6b6a] text-base md:text-xl leading-relaxed mb-10">

Where Aquatic Care Meets Passion! We are dedicated to the vibrant ecosystem of aquatic life, specializing in fishes and turtles. Our commitment extends beyond providing healthy pets; we empower hobbyists and pet keepers with essential knowledge on water parameters, tank environments, nutrition, and healthcare. Join our community and experience expert guidance along with a selection of high-quality fishes and turtles to ensure your aquatic pets thrive!


      </p>

{/* BUTTONS */}
<div className="flex flex-col sm:flex-row items-center gap-4">

  {/* SHOP BUTTON */}
  <Link
    to="/all_products"
    className="flex items-center justify-center gap-3 bg-[#8ed1b2] hover:bg-[#7cc5a6] text-[#063d3a] px-8 py-3 rounded-full text-lg font-medium transition duration-300 shadow-md hover:shadow-xl"
  >
    SHOP <FaArrowRight />
  </Link>

  {/* CONSULTATION BUTTON */}
  <Link
    to="/consultation"
    className="flex items-center justify-center gap-3 border-2 border-[#8ed1b2] text-[#063d3a] hover:bg-[#8ed1b2] px-8 py-3 rounded-full text-lg font-medium transition duration-300 shadow-md hover:shadow-xl"
  >
    Book Consultation <FaArrowRight />
  </Link>

</div>





    </section>


{/* OUR SERVICES */}
<section className="w-full bg-gradient-to-br from-[#e6f7f5] via-[#d4f1ee] to-[#c2e9e5] pt-28 md:pt-44 pb-16 md:pb-28 px-4 md:px-6">

  {/* TOP LINE */}
  <div className="flex justify-center mb-12">
    <div className="w-40 h-[2px] bg-[#6ec1a6] rounded-full opacity-70"></div>
  </div>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center text-3xl md:text-5xl font-semibold text-[#063d3a] mb-12 md:mb-24 tracking-wide"
  >
    OUR SERVICES
  </motion.h2>

  {/* CARDS */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

    {/* CONSULTATION */}
    <Link to="/consultation">
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 220 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl group border-2 border-[#8ed1b2]"
      >
        <img
          src={consultation}
          alt="Consultation"
          className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#063d3a]/90 via-[#063d3a]/30 to-transparent" />

        <div className="absolute top-5 left-5">
          <span className="px-4 py-2 rounded-full bg-[#8ed1b2] text-[#063d3a] text-xs font-bold uppercase tracking-wider">
            Consultation
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <h3 className="text-white text-2xl font-semibold">
            Expert Consultation
          </h3>

          <div className="w-12 h-12 rounded-full bg-[#8ed1b2] flex items-center justify-center">
            <FaArrowRight className="text-[#063d3a]" />
          </div>
        </div>
      </motion.div>
    </Link>

    {/* PRODUCTS */}
    <Link to="/all_products">
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 220 }}
        className="relative overflow-hidden rounded-3xl shadow-xl group"
      >
        <img
          src={turtle}
          alt="Products"
          className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <h3 className="text-white text-2xl font-semibold">
            Our Products
          </h3>

          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </motion.div>
    </Link>

    {/* BLOGS */}
    <Link to="/all_blogs">
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 220 }}
        className="relative overflow-hidden rounded-3xl shadow-xl group"
      >
        <img
          src={fish}
          alt="Blogs"
          className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <h3 className="text-white text-2xl font-semibold">
            Fish Care Blogs
          </h3>

          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </motion.div>
    </Link>

  </div>

  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="flex justify-center mt-16"
  >
    <Link
      to="/consultation"
      className="group inline-flex items-center gap-3 rounded-full bg-[#0d6b61] px-10 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#084f49] hover:scale-105 transition-all duration-300"
    >
      Book Expert Consultation
      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </motion.div>

</section>




    {/* GALLERY SECTION */}
    <section className="w-full py-16 md:py-28 px-4 md:px-6 bg-[#FAFAF8]">

{/* HEADER */}
<div className="max-w-6xl mx-auto mb-12">
  <h2 className="text-3xl md:text-5xl font-semibold text-[#1F212E]">
    Video Gallery
  </h2>
  <p className="text-gray-500 mt-2">
    Real aquarium work & insights
  </p>
</div>

{/* GRID */}
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

  {/* BIG VIDEO */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative md:col-span-2 h-[400px] rounded-3xl overflow-hidden group"
  >
<video
  src={video1}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
  onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  }}
/>

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

    {/* PLAY ICON */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
        <FaPlay className="text-[#1F212E]" />
      </div>
    </div>
  </motion.div>

  {/* SIDE VIDEOS */}
  <div className="flex flex-col gap-6">

    {[video2, video3].map((vid, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.02 }}
        className="relative h-[190px] rounded-2xl overflow-hidden group"
      >
<video
  src={vid}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
  onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  }}
/>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

        {/* PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
            <FaPlay className="text-[#1F212E] text-sm" />
          </div>
        </div>
      </motion.div>
    ))}

  </div>

</div>

</section>

    {/* INSTAGRAM SECTION  */}
    <section className="relative py-16 md:py-28 mt-16 md:mt-28 bg-white overflow-hidden">

{/* SOFT GREEN GLOW */}
<div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#9EC07F]/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#9EC07F]/10 blur-[120px] rounded-full"></div>

<div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center">

  {/* LEFT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <FaInstagram className="text-3xl text-[#1F212E]" />
      <span className="text-lg font-semibold text-[#1F212E]">
        Instagram
      </span>
    </div>

    <h2 className="text-3xl md:text-5xl font-bold text-[#1F212E] mb-6 leading-tight">
      Follow us on <br />
      <span className="text-[#9EC07F]">
        @AquaHari
      </span>
    </h2>

    <p className="text-lg text-gray-500 mb-8 max-w-xl">
      Gentle pet care tips, emergency guidance & real stories —
      shared daily by our veterinarians.
    </p>

    {/* BUTTON (NATURE STYLE) */}
    <motion.a
      whileHover={{ scale: 1.05 }}
      href="https://www.instagram.com/aquahariofficial?igsh=eXl2cnp4NjlzdDU2&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
                 bg-[#1F212E] text-white font-semibold 
                 hover:bg-[#2b2e3f] transition shadow-md"
    >
      Visit Instagram <FaArrowRight />
    </motion.a>
  </motion.div>

  {/* RIGHT – POST GRID */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="rounded-3xl border border-gray-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6"
  >
    <div className="grid grid-cols-3 gap-3">

      {instagramPosts.map((img, i) => (
        <div
          key={i}
          className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
        >
          {/* IMAGE */}
          <img
            src={img}
            alt={`Instagram ${i + 1}`}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* GREEN OVERLAY */}
          <div className="absolute inset-0 bg-[#1F212E]/30 opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* ICON */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="bg-[#9EC07F] p-2 rounded-full shadow-md">
              <FaInstagram className="text-[#1F212E] text-lg" />
            </div>
          </div>
        </div>
      ))}

    </div>

    <p className="mt-6 text-center text-sm text-gray-500">
      Follow us for real pet care updates 🐾
    </p>
  </motion.div>

</div>
</section>

 {/* map review */}

<section className="w-full py-16 md:py-28 bg-[#FAFAF8] px-4 md:px-6">

  {/* Heading */}
  <div className="max-w-5xl mx-auto text-center mb-12 md:mb-20">
    <h2 className="text-3xl md:text-5xl font-semibold text-[#1F212E] tracking-wide">
      AQUAHARI REVIEWS
    </h2>

    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
      Read genuine feedback from aquarium enthusiasts and fish keepers who
      trust Aqua Hari for expert consultation, premium products, and fish care
      guidance.
    </p>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

    {/* Left */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-[#1F212E] mb-8">
        Aqua Hari
      </h3>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex text-[#F8B400] text-3xl gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <span className="text-xl text-gray-600">
          5.0 Rating on Google
        </span>
      </div>

      <p className="text-lg text-gray-600 leading-9 max-w-xl">
        Thousands of aquarium lovers trust Aqua Hari for healthy fish,
        professional consultation, quality aquarium products, and practical
        fish care guidance.
      </p>

      <div className="flex flex-wrap gap-5 mt-12">

        <a
          href="https://maps.app.goo.gl/7cxZop1ET4pz3PJw9"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full border-2 border-[#0d6b61]
                     text-[#0d6b61] font-semibold
                     hover:bg-[#0d6b61]
                     hover:text-white
                     transition"
        >
          👀 Read Reviews
        </a>

        <a
          href="https://maps.app.goo.gl/UtRQ3KLhoABxSUTDA?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-[#0d6b61]
                     text-white font-semibold
                     hover:bg-[#084f49]
                     transition"
        >
          ⭐ Write a Review
        </a>

      </div>
    </motion.div>

    {/* Right */}
    <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200"
>
  <iframe
    title="Aqua Hari Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b09252ae5a054e3%3A0x19ae7f49ca7e3a9a!2sAquaHari!5e0!3m2!1sen!2sin!4v1783579970895!5m2!1sen!2sin"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</motion.div>

  </div>

</section>




{/* REVIEW SECTION */}
<section className="w-full py-16 md:py-28 bg-[#FAFAF8] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#1F212E]">
          Customer Reviews 💬
        </h2>
      </div>

      {/* SCROLL */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((img, i) => (
            <div
              key={i}
              className="min-w-[260px] md:min-w-[320px] rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={img}
                alt="review"
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
    </>
  );
}