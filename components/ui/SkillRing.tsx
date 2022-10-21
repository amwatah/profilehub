import { RingProgress, Text } from "@mantine/core";
import React from "react";

interface Props {
  rating: number;
  skillName: string;
}
const SkillRing = ({ rating, skillName }: Props) => {
  return (
    <div className=" shadow-lg w-fit animate-rubberBand hover:animate-headShake  md:col-span-2 md:w-full flex justify-center items-center">
      <RingProgress
        sections={[{ value: rating, color: "blue" }]}
        label={
          <Text
            color="blue"
            weight={700}
            align="center"
            className=" text-[0.6rem]"
          >
            {skillName} <br />
            <span className=" text-sm"> {rating}%</span>
          </Text>
        }
        roundCaps
      />
    </div>
  );
};

export default SkillRing;
