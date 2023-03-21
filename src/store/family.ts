import { atomFamily, selectorFamily } from "recoil";

interface IAutho {
  uid: string;
  name: string;
  login: boolean;
}

export const familyAtomFamily = atomFamily({
  key: "cardFamily",
  default: (id) => ({ id, count: 0, title: "title" + id?.toString() }),
  //   set:(id)=>{}
  //   default: [
  //     { id: 0, count: 0, title: "title1" },
  //     { id: 0, count: 0, title: "title2" },
  //   ],
});
