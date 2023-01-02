import { Accordion, Container, Tabs, Text, Timeline } from "@mantine/core";

import React, { useState } from "react";
import SkillRing from "../components/ui/SkillRing";

const ResumePage = () => {
  return (
    <div className=" flex flex-col items-center gap-3 ">
      <section className="fields w-full p-3 m-3">
        <h3>MY SKILL SET</h3>
        <Tabs
          variant="outline"
          orientation="horizontal"
          defaultValue="FRONTEND"
        >
          <Tabs.List grow position="center">
            <Tabs.Tab value="FRONTEND">FRONTEND DEV</Tabs.Tab>
            <Tabs.Tab value="BACKEND">BACKEND DEV </Tabs.Tab>
            <Tabs.Tab value="OTHERS">OTHERS</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="FRONTEND">
            <section className=" w-full grid grid-cols-3 md:grid-cols-6 justify-items-center">
              <SkillRing skillName="HTML" rating={70} />
              <SkillRing skillName="CSS" rating={60} />
              <SkillRing skillName="JAVASCRIPT" rating={60} />
              <SkillRing skillName="REACT JS" rating={80} />
              <SkillRing skillName="VUE JS" rating={70} />
              <SkillRing skillName="SVELTE" rating={80} />
              <SkillRing skillName="NEXT JS" rating={70} />
              <SkillRing skillName="SVELTEKIT" rating={50} />
              <SkillRing skillName="NUXT JS" rating={20} />
              <SkillRing skillName="FLUTTER" rating={75} />
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="BACKEND">
            <section className=" w-full grid grid-cols-3 md:grid-cols-6 justify-items-center">
              <SkillRing skillName="NODE JS" rating={50} />
              <SkillRing skillName="EXPRESS JS" rating={60} />
              <SkillRing skillName="HTTP" rating={60} />
              <SkillRing skillName="FIREBASE" rating={90} />
              <SkillRing skillName="MONGO DB" rating={70} />
              <SkillRing skillName="GRAPHQL" rating={65} />
              <SkillRing skillName="REST APIs" rating={50} />
              <SkillRing skillName="tRPC" rating={80} />
              <SkillRing skillName="PRISMA" rating={50} />
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="OTHERS">
            <section className=" w-full grid grid-cols-3 md:grid-cols-6 justify-items-center">
              <SkillRing skillName="GIT & GITHUB" rating={80} />
              <SkillRing skillName="TOUCH TYPING" rating={70} />
              <SkillRing skillName="TESTING" rating={60} />
              <SkillRing skillName="UI & UX " rating={30} />
              <SkillRing skillName="COMPONENT LIBRARIES" rating={70} />
            </section>
          </Tabs.Panel>
        </Tabs>
      </section>
      <section className="timeline w-full">
        <h3>Education qualifilcation</h3>
        <Container>
          <Accordion className=" shadow-lg ">
            <Accordion.Item value="high-school">
              <Accordion.Control>HIGH SCHOOL</Accordion.Control>
              <Accordion.Panel className=" animate-backInLeft">
                <h3>2015-2018</h3>
                <a href="https://www.kisiischool.ac.ke/"> Kisii School</a>
                <p>Scored a B+ MEAN GRADE , with A in computer studies</p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="college">
              <Accordion.Control>COLLEGE</Accordion.Control>
              <Accordion.Panel className=" animate-backInLeft">
                <h3>2018-2019</h3>
                <a href="https://inceptor.co.ke/k-course/computer-packages-course">
                  Inceptor Kenya
                </a>
                <p>
                  A short course on computer packages and software Applications
                </p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="university">
              <Accordion.Control>UNIVERSITY</Accordion.Control>
              <Accordion.Panel className=" animate-backInLeft">
                <h3>2018-2023</h3>
                <a href="https://www.mmu.ac.ke/">
                  Multimedia University Of Kenya
                </a>
                <p>Bachelor of Science (Computer Technology)</p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </div>
  );
};

export default ResumePage;
