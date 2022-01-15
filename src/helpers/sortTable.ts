import { IcountryMedals } from "../interfaces/countryMedals.interface";

export type Order = "asc" | "desc";

export function descendingComparator<T>(
  a: T,
  b: T,
  orderBy: keyof T
): 1 | 0 | -1 {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof IcountryMedals;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "country",
    numeric: false,
    label: "Country",
  },
  {
    id: "gold",
    numeric: true,
    label: "All Gold medals",
  },
  {
    id: "silver",
    numeric: true,
    label: "All Silver medals",
  },
  {
    id: "bronze",
    numeric: true,
    label: "All Bronze medals",
  },
  {
    id: "total",
    numeric: true,
    label: "Total medals",
  },
];
