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
      className="flex flex-col items-center w-full gap-2 p-3 mx-auto my-3 border-2 animate-rubberBand"
    >
      <Paper withBorder className="relative w-full h-64 image">
        {!projectImage && (
          <Icon icon="carbon:no-image" className="w-full h-full " />
        )}
        {projectImage && projectImage}
      </Paper>
      <section className="w-full describtion">
        <h4>{projectName}</h4>
        <p>{desribtion}</p>
      </section>
      <section className="flex justify-around w-full links ">
        <a href={website}>
          <Icon
            icon="cil:external-link"
            className="text-2xl font-bold  primary"
          />
        </a>
        <a href={github}>
          <Icon
            icon="ant-design:github-filled"
            className="text-2xl font-bold  primary"
          />
        </a>
      </section>
      <section className="flex w-full overflow-scroll tech ">
        {tags?.map((tag) => (
          <Chip variant="filled">{tag}</Chip>
        ))}
      </section>
    </Paper>
  );
};

export default ProjectCard;
