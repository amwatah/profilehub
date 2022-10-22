import { Icon } from "@iconify/react";
import { ActionIcon, Blockquote, Button } from "@mantine/core";
import { openModal } from "@mantine/modals";
import Image from "next/image";
import React, { useState } from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className=" flex flex-col items-center gap-3 mt-3">
      <section className="intro flex flex-col items-center w-full gap-3">
        <Image
          width={120}
          height={120}
          src="/images/amwatah.png"
          className=" rounded-full border-4 hover:animate-tada"
        />
        <h3>I AM</h3>
        <Typed
          strings={[
            "Amwatah Obuya",
            "A fullstack Developer",
            "A mobile app Developer",
          ]}
          typeSpeed={60}
          loop
          className=" primary text-3xl font-bold"
        />
        <Blockquote cite="– Amwatah Obuya" className=" shadow-lg rounded-lg">
          good code runs , <br />
          better code solves problems <br />
          perfect code changes lives .
        </Blockquote>
        <Button
          onClick={() => {
            openModal({
              title: "PERSONAL INFO",
              centered: true,
              children: (
                <div className=" w-full">
                  <p className=" flex justify-evenly ">
                    <span className="flex-1 ">First Name</span>
                    <Icon
                      icon="fa6-regular:hand-point-right"
                      className=" flex-1"
                    />
                    <span className="flex-1">Amwatah</span>
                  </p>
                  <p className=" flex justify-evenly ">
                    <span className="flex-1 ">Last Name</span>
                    <Icon
                      icon="fa6-regular:hand-point-right"
                      className=" flex-1"
                    />
                    <span className="flex-1">Obuya</span>
                  </p>
                  <p className=" flex justify-evenly ">
                    <span className="flex-1 ">Nationality</span>
                    <Icon
                      icon="fa6-regular:hand-point-right"
                      className=" flex-1"
                    />
                    <span className="flex-1">Kenyan</span>
                  </p>
                  <p className=" flex justify-evenly ">
                    <span className="flex-1 ">Age</span>
                    <Icon
                      icon="fa6-regular:hand-point-right"
                      className=" flex-1"
                    />
                    <span className="flex-1">21</span>
                  </p>
                  <p className=" flex justify-evenly ">
                    <span className="flex-1 ">Languages</span>
                    <Icon
                      icon="fa6-regular:hand-point-right"
                      className=" flex-1"
                    />
                    <span className="flex-1">English , Swahili</span>
                  </p>
                  <p className=" flex justify-evenly ">
                    <span className="flex-1 ">Profession</span>
                    <Icon
                      icon="fa6-regular:hand-point-right"
                      className=" flex-1"
                    />
                    <span className="flex-1">Software Engineer</span>
                  </p>
                </div>
              ),
            });
          }}
          variant="gradient"
          color="blue"
          className=" mt-7 text-xl rounded-full  hover:animate-jello"
        >
          INFO
        </Button>
      </section>
    </div>
  );
};

export default Home;
