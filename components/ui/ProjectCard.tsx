import { Icon } from "@iconify/react";
import { Chip, Paper } from "@mantine/core";
import React, { ReactNode } from "react";

interface Props {
  projectName: string;
  desribtion: string;
  projectImage?: ReactNode;
  website?: string;
  github?: string;
  tags?: string[];
}
const ProjectCard = ({
  projectName,
  desribtion,
  projectImage,
  website,
  github,
  tags,
}: Props) => {
  return (
    <Paper
      withBorder
      shadow="lg"
      className="w-full   p-3 mx-auto flex  flex-col items-center gap-2 border-2  my-3  animate-rubberBand"
    >
      <Paper withBorder className="image  w-full h-64 ">
        {!projectImage && (
          <Icon icon="carbon:no-image" className="  h-full w-full " />
        )}
        {projectImage && projectImage}
      </Paper>
      <section className="describtion leading-[0.5rem] w-full">
        <h4>{projectName}</h4>
        <p>{desribtion}</p>
      </section>
      <section className="links w-full flex justify-around ">
        <a href={website}>
          <Icon
            icon="cil:external-link"
            className=" primary text-2xl font-bold"
          />
        </a>
        <a href={github}>
          <Icon
            icon="ant-design:github-filled"
            className=" primary text-2xl font-bold"
          />
        </a>
      </section>
      <section className="tech w-full flex justify-evenly p-2  overflow-auto  ">
        {tags?.map((tag) => (
          <Chip variant="filled">{tag}</Chip>
        ))}
      </section>
    </Paper>
  );
};

export default ProjectCard;
