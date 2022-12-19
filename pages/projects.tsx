import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import ProjectCard from "../components/ui/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      <h3>MY PROJECTS</h3>
      <section className="projects grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 mx-[2%]">
        <ProjectCard
          projectName="Planbee"
          desribtion="A event planner"
          projectImage={
            <Image
              src="/images/planbee.png"
              className=" w-full h-full"
              layout="fill"
            />
          }
          website="https://planbee-amwatah.vercel.app/"
          github="https://github.com/amwatah/planbee"
          tags={["Next Js", "Mongodb", "Typescript", "Trpc", "Prisma"]}
        />

        <ProjectCard
          projectName="CALCULATOR"
          desribtion="Everybody once made a calc"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className=" w-full h-full"
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "PWA", "Typescript"]}
        />
        <ProjectCard
          projectName="TIC-TAC-TOE GAME"
          desribtion="A simple board game"
          projectImage={
            <Image
              src="/images/tic-tac-toe.png"
              className=" w-full h-full"
              layout="fill"
            />
          }
          website="https://amwatah-tic-tac-toe.vercel.app/"
          github="https://github.com/amwatah/tic-tac-toe"
          tags={["Beginner", "Next JS", "Mantine", "Typescript"]}
        />
        <ProjectCard
          projectName="TODO APP"
          desribtion="A  way to track and manage daily tasks"
          projectImage={
            <Image
              src="/images/todo.png"
              className=" w-full h-full"
              layout="fill"
            />
          }
          website="https://amwatah-todo.vercel.app/"
          github="https://github.com/amwatah/todo-app"
          tags={["Beginner", "Next JS", "Typescript"]}
        />
        <ProjectCard
          projectName="Planbee"
          desribtion="A event planner"
          projectImage={
            <Image
              src="/images/contacts.png"
              className=" w-full h-full"
              layout="fill"
            />
          }
          website="https://amwatah-contacts.vercel.app/"
          github="https://github.com/amwatah/numbers"
          tags={["Next Js", "Mongodb", "Typescript", "Trpc", "Prisma"]}
        />
      </section>
    </div>
  );
};

export default ProjectsPage;
