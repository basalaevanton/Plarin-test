import React from "react";
import { AthleteFilterProps } from "./AthleteFilter.props";

import { Box, TextField } from "@mui/material";

export const AthleteFilter = ({
  search,
  setSearch,
  ...props
}: AthleteFilterProps): JSX.Element => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        {...props}
      >
        <TextField
          label="Поиск по атлету..."
          value={search.search}
          onChange={(e) => setSearch({ ...search, search: e.target.value })}
          placeholder="Поиск по атлету..."
        />
        <TextField
          label="Атлетов на странице"
          variant="standard"
          value={search.amountOnPage}
          onChange={(e) =>
            setSearch({ ...search, amountOnPage: Number(e.target.value) })
          }
          placeholder="Поиск по атлету..."
        />
      </Box>
    </>
  );
};
