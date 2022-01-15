import React, { useState } from "react";
import { TableProps } from "./Table.props";
import styles from "./Table.module.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IcountryMedals } from "../../interfaces/countryMedals.interface";
import { getComparator, headCells, Order } from "../../helpers/sortTable";
import { Box, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

export const TableMedals = ({
  countryMedals,
  ...props
}: TableProps): JSX.Element => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof IcountryMedals>("country");

  const handleRequestSort = (property: keyof IcountryMedals) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-around" }}
        {...props}
      >
        <Table sx={{ maxWidth: 1000 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "left"}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={() => handleRequestSort(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countryMedals
              .sort(getComparator(order, orderBy))
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    key={row.country}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.country}
                    </TableCell>
                    <TableCell align="right">{row.gold}</TableCell>
                    <TableCell align="right">{row.silver}</TableCell>
                    <TableCell align="right">{row.bronze}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
