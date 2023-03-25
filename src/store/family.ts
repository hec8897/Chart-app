import { atom, atomFamily, selectorFamily } from "recoil";

interface IAutho {
  uid: string;
  name: string;
  login: boolean;
}

export const familyAtomFamily = atomFamily({
  key: "cardFamily",
  default: (id) => ({ id, count: 0, title: "title" + id?.toString() }),
});

export const atomCard = atom({
  key: "cardAtom",
  default: {
    count: 0,
    title: "title",
  },
});

export const familySelector = selectorFamily({
  key: "cardFamil/Sector",
  get:
    (id) =>
    ({ get }) => {
      const data = get(atomCard);
      return { data, id: id };
    },
});
