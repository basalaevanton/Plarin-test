import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import { Athlete } from "../components";

const FirstPage = () => {
  const { olympic, isLoading } = useTypedSelector(
    (state) => state.WinnersState
  );

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
      {olympic.slice(9, 19).map((olympic, id) => (
        <Athlete key={id} olympic={olympic} />
      ))}
    </>
  );
};

export default withLayout(FirstPage);
