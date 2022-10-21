import { Icon } from "@iconify/react";
import React from "react";
import ProjectCard from "../components/ui/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      <h3>MY PROJECTS</h3>
      <section className="projects grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 mx-[2%]">
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          // projectImage={
          //   <Icon
          //     icon="flat-color-icons:calculator"
          //     className=" w-full h-full"
          //   />
          // }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={[
            "React",
            "Next",
            "PWA",
            "Typescript",
            "Tailwind",
            "MUI",
            "Firebase",
          ]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="Simple Calculator"
          desribtion="A react calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "Next", "PWA", "Typescript"]}
        />
      </section>
    </div>
  );
};

export default ProjectsPage;
