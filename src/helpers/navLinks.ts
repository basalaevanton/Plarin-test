export interface IHeaderLinks {
  id: number;
  name: string;
  link: string;
}

export const HeaderLinks: IHeaderLinks[] = [
  {
    id: 1,
    name: "Атлеты с 10 по 20",
    link: "/",
  },
  {
    id: 2,
    name: "Second page",
    link: "/second",
  },
];
