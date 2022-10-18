import { atom } from "jotai";

export const activeThemeAtom = atom<"light"|"dark">("light")