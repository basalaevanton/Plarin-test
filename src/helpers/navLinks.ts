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
    name: "Таблица: страны и их медали",
    link: "/second",
  },
  {
    id: 3,
    name: "Пагинация и поиск атлетов",
    link: "/third",
  },
];
