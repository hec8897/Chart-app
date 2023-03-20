import { atom, selector } from "recoil";

interface IList {
  id: number;
  name: string;
  desc: string;
}

export const List = atom<IList[]>({
  key: "list",
  default: [{ id: 0, name: "리스트", desc: "리스트다" }],
});

export const listSelector = selector<{ list: IList[] }>({
  key: "list/get",
  get: ({ get }) => {
    const list = get(List);
    return { list: [...list, { id: 1, name: "리스트2", desc: "리스트디2" }] };
  },
});
