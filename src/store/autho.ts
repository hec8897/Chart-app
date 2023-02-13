import { atom } from "recoil";

export const authoState = atom({
  key: "autho",
  default: {
    uid: "",
    name: "",
  },
});
