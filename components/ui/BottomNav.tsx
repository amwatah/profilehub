import { Icon } from "@iconify/react";
import { Paper, Tooltip } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

const BottomNav = () => {
  const router = useRouter();

  return (
    <>
      <Paper className=" justify-evenly p-3 fixed bottom-0 w-full sm:justify-center sm:gap-x-20 flex   rounded-t-md primary  animate-slideInUp shadow-lg z-50  ">
        <Tooltip label="HOME">
          <Icon
            onClick={() => router.push("/")}
            icon="ant-design:home-filled"
            className=" text-2xl hover:animate-tada"
          />
        </Tooltip>
        <Tooltip label="ABOUT">
          <Icon
            onClick={() => router.push("/resume")}
            icon="simple-icons:aboutdotme"
            className=" text-2xl hover:animate-tada"
          />
        </Tooltip>
        <Tooltip label="PROJECTS">
          <Icon
            onClick={() => router.push("/projects")}
            icon="fluent:apps-32-regular"
            className=" text-2xl hover:animate-tada"
          />
        </Tooltip>{" "}
        <Tooltip label="BLOG">
          <Icon
            onClick={() => router.push("/blog")}
            icon="icomoon-free:blog"
            className=" text-2xl hover:animate-tada"
          />
        </Tooltip>
        <Tooltip label="CONTACTS">
          <Icon
            onClick={() => router.push("/contact")}
            icon="ic:outline-contacts"
            className=" text-2xl hover:animate-tada"
          />
        </Tooltip>
      </Paper>
    </>
  );
};

export default BottomNav;
