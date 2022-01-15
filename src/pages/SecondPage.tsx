import React from "react";
import { useTypedSelector } from "../hooks";
import { IcountryMedals } from "../interfaces/countryMedals.interface";
import { withLayout } from "../layout/Layout";
import { TableMedals } from "../components";
import { Typography } from "@mui/material";

const SecondPage = () => {
  const { olympic } = useTypedSelector((state) => state.WinnersState);

  const countryMedals: IcountryMedals[] = [];

  const allCountries: string[] = [];

  olympic.map((athlete: { country: string }) => {
    if (!allCountries.includes(athlete.country)) {
      allCountries.push(athlete.country);
    }
  });

  allCountries.map((countryEl) => {
    const helpArray = olympic.filter(
      (athlete: { country: string }) => athlete.country === countryEl
    );
    const allMedals = helpArray.reduce(
      (acc: number, curr: { total: number }) => {
        return acc + curr.total;
      },
      0
    );
    const allGolds = helpArray.reduce((acc: number, curr: { gold: number }) => {
      return acc + curr.gold;
    }, 0);
    const allSilver = helpArray.reduce(
      (acc: number, curr: { silver: number }) => {
        return acc + curr.silver;
      },
      0
    );
    const allBronze = helpArray.reduce(
      (acc: number, curr: { bronze: number }) => {
        return acc + curr.bronze;
      },
      0
    );
    const helpObj = {
      country: countryEl,
      total: allMedals,
      gold: allGolds,
      silver: allSilver,
      bronze: allBronze,
    };
    countryMedals.push(helpObj);
  });

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ marginBottom: "35px" }}
      >
        Задача №2: Страны и их медали
      </Typography>

      <TableMedals countryMedals={countryMedals} />
    </>
  );
};

export default withLayout(SecondPage);
