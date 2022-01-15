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

export const TableMedals = ({
  countryMedals,
  ...props
}: TableProps): JSX.Element => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Table sx={{ maxWidth: 1000 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">All Gold medals</TableCell>
              <TableCell align="right">All Silver medals</TableCell>
              <TableCell align="right">All Bronze medals</TableCell>
              <TableCell align="right">Total medals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countryMedals.map((row) => (
              <TableRow
                key={row.country}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.country}
                </TableCell>
                <TableCell align="right">{row.gold}</TableCell>
                <TableCell align="right">{row.silver}</TableCell>
                <TableCell align="right">{row.bronze}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Table;
