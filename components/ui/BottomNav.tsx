import { Icon } from "@iconify/react";
import { ActionIcon, Paper, Tooltip } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";

const BottomNav = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {!showNav && (
        <Paper shadow="xl">
          <ActionIcon
            onClick={() => setShowNav(true)}
            onMouseOver={() => setShowNav(true)}
            className={`fixed bottom-0 left-[50%] primary text-3xl my-3 animate-twSpin animate-infinite animate-duration-[10s]`}
          >
            <Icon icon="fe:app-menu" />
          </ActionIcon>
        </Paper>
      )}
      {showNav && (
        <div
          onMouseLeave={() => setShowNav(false)}
          className=" fixed bottom-0 w-full h-[10vh] flex justify-center  items-center  rounded-t-md primary  animate-slideInUp   "
        >
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
      )}
    </>
  );
};

export default BottomNav;
