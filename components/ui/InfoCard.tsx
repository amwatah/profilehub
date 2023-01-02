import { Paper } from "@mantine/core";
import React, { ReactNode } from "react";

interface Props {
  skillName: string;
  describtion: string;
  logo: ReactNode;
}
const InfoCard = ({ skillName, describtion, logo }: Props) => {
  return (
    <Paper
      sx={(theme) => ({
        borderColor: "#228BE6",
        borderWidth: 1,
      })}
      withBorder
      className="  w-full p-2 h-40 "
    >
      <div className=" logo text-3xl animate-flipInX hover:animate-flipInX text-[#228BE6]">
        {logo}
      </div>
      <h4>{skillName}</h4>
      <p className=" grow">{describtion}</p>
    </Paper>
  );
};

export default InfoCard;
