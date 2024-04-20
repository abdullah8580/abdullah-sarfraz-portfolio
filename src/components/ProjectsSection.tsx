"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tech Affiliation",
    image: "/images/projects/P1.png",
    description: "Software Company",
    tag: ["All", "WordPress"],
    previewUrl: "https://techaffiliation.com/",
  },
  {
    id: 2,
    title: "OWCSC",
    image: "/images/projects/P2.png",
    description: "Non-Profit Organization",
    tag: ["All", "WordPress"],
    previewUrl: "https://owcsc.org",
  },
  {
    id: 3,
    title: "Direct Discount",
    image: "/images/projects/P3.png",
    description: "Medical Billing Company",
    tag: ["All", "WordPress"],
    previewUrl: "https://directdiscount.org",
  },
  {
    id: 4,
    title: "NHR",
    image: "/images/projects/P4.png",
    description: "Non-Profit Organization",
    tag: ["All", "WordPress"],
    previewUrl: "https://nicotineharmreduction.org",
  },
];

const cardVariants = {
  initial: { y: 50, oacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <div id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
