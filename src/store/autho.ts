import { atom } from "recoil";

interface IAutho {
  uid: string;
  name: string;
  login: boolean;
}

export const authoState = atom<IAutho>({
  key: "autho",
  default: {
    login: false,
    uid: "",
    name: "",
  },
});
