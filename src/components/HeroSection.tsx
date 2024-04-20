"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-700">
              Hello, I'm{" "}
            </span>
            <br />
            <div className="mt-3 lg:mt-5">
              {" "}
              <TypeAnimation
                sequence={[
                  "Abdullah",
                  1000,
                  "Gen AI Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "WordPress Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a website developer with experience in many programming
            languages. Dedicated to create beautiful websites and web
            applications for you!
          </p>
          <div className="mb-5">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-blue-700 via-purple-500 to-red-700 hover:bg-slate-300 text-white">
              <a href="mailto:abdullahsarfraz8580@gmail.com">Hire Me</a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via-purple-500 to-red-700 hover:bg-slate-900 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a
                  href="../files/abdullah-sarfraz-resume.pdf"
                  download={"abdullah-sarfraz-resume.pdf"}
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4px lg:mt-0">
          <div className="rounded-full bg-[#171717] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/hero-img.png"}
              alt="hero-img"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
