export interface IHeaderLinks {
  id: number;
  name: string;
  link: string;
}

export const HeaderLinks: IHeaderLinks[] = [
  {
    id: 1,
    name: 'First page',
    link: '/',
  },
  {
    id: 2,
    name: 'Second page',
    link: '/second',
  },
];
