import React from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector } from "../hooks";
import { Athlete } from "../components";
import { IOlympic } from "../interfaces/winners.interface";

const FirstPage = () => {
  const { olympic } = useTypedSelector((state) => state.WinnersState);

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ marginBottom: "35px" }}
      >
        Задача №1: Атлеты с 10 по 20
      </Typography>
      {olympic.slice(9, 19).map((olympic: IOlympic, id: number) => (
        <Athlete key={id} olympic={olympic} />
      ))}
    </>
  );
};

export default withLayout(FirstPage);
