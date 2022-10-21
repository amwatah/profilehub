import { Switch } from "@mantine/core";
import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { activeThemeAtom } from "../../store";
import BottomNav from "../ui/BottomNav";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const [activeTheme, setActiveTheme] = useAtom(activeThemeAtom);
  return (
    <div>
      <Switch
        onChange={() =>
          setActiveTheme(activeTheme === "light" ? "dark" : "light")
        }
        className=" fixed top-0 right-0 p-1 z-30"
        onLabel={<Icon icon="emojione:sun" className=" text-lg" />}
        offLabel={<Icon icon="bxs:moon" className=" text-lg" />}
        size="md"
      />
      <div className="slot mb-[10vh]  ">{children}</div>

      <BottomNav />
    </div>
  );
};

export default AppLayout;
