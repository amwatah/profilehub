import { Icon } from "@iconify/react";
import { Paper, Tooltip } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

const BottomNav = () => {
  const router = useRouter();

  return (
    <>
      <div className=" fixed bottom-0 w-full h-[10vh] flex justify-center  items-center  rounded-t-md primary  animate-slideInUp   ">
        <Paper
          shadow="lg"
          withBorder
          className="inner w-full sm:w-1/2 flex justify-evenly h-full items-center"
        >
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
      </div>
    </>
  );
};

export default BottomNav;
