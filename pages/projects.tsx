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
          projectName="Electrika"
          desribtion="An online electronics shop cart"
          projectImage={
            <Image
              src="/images/electrika.png"
              className="object-contain w-full h-full "
              layout="fill"
              alt="project"
            />
          }
          website="https://elecrika.vercel.app/"
          github="https://github.com/amwatah/elecrika"
          tags={["Next Js", "Mongodb", "Typescript", "Trpc", "Prisma"]}
        />
        <ProjectCard
          projectName="Peasant"
          desribtion="A poor mans budget manager . Mange your expenses ,investments and savings."
          projectImage={
            <Image
              src="/images/peasant.png"
              className="object-contain w-full h-full "
              layout="fill"
              alt="project"
            />
          }
          website="https://peasant.vercel.app/"
          github="https://github.com/amwatah/peasant"
          tags={["React", "Redux", "Valtio"]}
        />
        <ProjectCard
          projectName="TIC-TAC-TOE GAME"
          desribtion="A simple board game"
          projectImage={
            <Image
              src="/images/tic-tac-toe.png"
              className="w-full h-full "
              layout="fill"
              alt="project"
            />
          }
          website="https://amwatah-tic-tac-toe.vercel.app/"
          github="https://github.com/amwatah/tic-tac-toe"
          tags={["Beginner", "Next JS", "Mantine", "Typescript"]}
        />
        <ProjectCard
          projectName="Planbee"
          desribtion="A event planner"
          projectImage={
            <Image
              src="/images/planbee.png"
              className="object-cover w-full h-full "
              layout="fill"
              alt="project"
            />
          }
          website="https://planbee-amwatah.vercel.app/"
          github="https://github.com/amwatah/planbee"
          tags={["Next Js", "Mongodb", "Typescript", "Trpc", "Prisma"]}
        />

        <ProjectCard
          projectName="CALCULATOR"
          desribtion="Everybody once made a calculator"
          projectImage={
            <Icon
              icon="flat-color-icons:calculator"
              className="w-full h-full "
            />
          }
          website="https://amwatah-calc.vercel.app/"
          github="https://github.com/amwatah/next-calculator-pwa"
          tags={["React", "PWA", "Typescript"]}
        />

        <ProjectCard
          projectName="TASKER"
          desribtion="A  way to track and manage daily tasks"
          projectImage={
            <Image
              src="/images/todo.png"
              className="object-cover w-full h-full "
              layout="fill"
              alt="project"
            />
          }
          website="https://amwatah-todo.vercel.app/"
          github="https://github.com/amwatah/todo-app"
          tags={["Beginner", "Next JS", "Typescript"]}
        />
        <ProjectCard
          projectName="Contact Manager"
          desribtion="Create and delete  contacts"
          projectImage={
            <Image
              src="/images/contacts.png"
              className="object-cover w-full h-full "
              layout="fill"
              alt="project"
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
