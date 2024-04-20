"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.JS</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>PHP</li>
        <li>WordPress</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Matriculation with CS from Comprehensive School</li>
        <li>Intermediate in CS from Punjab College</li>
        <li>Cloud Applied Gen AI Engineer from PIAIC</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>3+ Years of Experience in WordPress</li>
        <li>1 Year Experience in Python</li>
        <li>New to Web-Programming</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-section-img.jpg"}
          alt="about-section-img"
          width={500}
          height={500}
          className="border-black rounded-full"
        />
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae saepe necessitatibus laudantium deleniti aspernatur. Illo
            obcaecati quibusdam tenetur voluptatem tempore. Repellat vitae ipsa
            soluta itaque optio, possimus accusantium consequatur animi culpa
            temporibus ea tenetur, deleniti atque commodi, sit totam.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
