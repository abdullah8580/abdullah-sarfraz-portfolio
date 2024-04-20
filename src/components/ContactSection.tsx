import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function ContactSection() {
  return (
    <section
      className="flex md:flex-row lg:flex-row sm:flex-col justify-between items-start my-12 md:my-12 py-24 gap-4"
      id="contact"
    >
      <div>
        <div className="flex flex-col">
          <h5 className="text-xl font-bold text-white my-2 ">
            Let`s Start a New Journey Together!
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I am currently looking for new oppertunities, my inbox is always
            open. Weather you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>
          <div className="text-white font-bold mb-4 max-w-md">
            <p className="hover:text-[#ADB7BE]">
              Email:{" "}
              <a href="mailto:abdullahsarfraz8580@gmail.com">
                abdullahsarfraz8580@gmail.com
              </a>
            </p>
            <p className="hover:text-[#ADB7BE]">
              WhatsApp:{" "}
              <a href="https://wa.me/message/2BXNILWGUC3FK1" target="blank">
                +92 328 3459908
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="socials flex flex-col gap-2">
        <h5 className="text-xl font-bold text-white my-2">
          Get Social With Me
        </h5>
        <div className="flex flex-row gap-2 ">
          <Link href={"https://github.com/abdullah8580"} target="blank">
            <Image src={GithubIcon} alt="gihub icon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/abdullah317/"}
            target="blank"
          >
            <Image src={LinkedInIcon} alt="linkedin icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
