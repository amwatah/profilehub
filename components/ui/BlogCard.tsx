import { Icon } from "@iconify/react";
import { Button, Card, Chip, Paper, Skeleton } from "@mantine/core";
import Image from "next/image";
import React, { Children, ReactNode } from "react";

interface Props {
  blogTitle: string;
  blogImage?: ReactNode;
  website?: string;
  tags?: string[];
}
const BlogCard = ({ blogTitle, blogImage, website, tags }: Props) => {
  return (
    <Paper
      withBorder
      shadow="lg"
      className="w-full   p-3 flex  flex-col items-center gap-2 border-2  my-3  animate-rubberBand"
    >
      <Paper withBorder className="image  w-full h-64 ">
        {!blogImage && (
          <Icon icon="ant-design:read-outlined" className="  h-full w-full " />
        )}
        {blogImage && blogImage}
      </Paper>
      <section className="describtion  w-full text-center">
        <h4>{blogTitle}</h4>
      </section>
      <section className="links w-full flex justify-around ">
        <a href={website}>
          <Button
            variant="gradient"
            size="lg"
            className=" hover:animate-jello rounded-full"
          >
            READ
          </Button>
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

export default BlogCard;
