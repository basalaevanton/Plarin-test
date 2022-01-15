import React, { useMemo, useState } from "react";
import { useTypedSelector } from "../hooks";
import { withLayout } from "../layout/Layout";
import { Pagination, Typography } from "@mui/material";
import { IOlympic } from "../interfaces/winners.interface";
import { Athlete, AthleteFilter } from "../components";

const ThirdPage = () => {
  const { olympic } = useTypedSelector((state) => state.WinnersState);
  const [pagination, setPagination] = useState({
    page: 1,
    amount: 0,
  });

  const [search, setSearch] = useState({ search: "", amountOnPage: 9 });

  const count: number = Math.ceil(olympic.length / search.amountOnPage);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination({
      ...pagination,
      amount: pagination.amount + search.amountOnPage,
      page: value,
    });
  };

  const SearchedPosts: IOlympic[] = useMemo(() => {
    return olympic.filter((post: IOlympic) =>
      post.athlete.toLowerCase().includes(search.search.toLowerCase())
    );
  }, [search]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ marginBottom: "35px" }}
      >
        Задача №*: Пагинация и поиск атлетов
      </Typography>
      <div>
        <AthleteFilter search={search} setSearch={setSearch} />

        {SearchedPosts.slice(
          pagination.amount,
          pagination.amount + search.amountOnPage
        ).map((olympic: IOlympic, id: number) => (
          <Athlete key={id} olympic={olympic} />
        ))}
        <Pagination
          count={count}
          page={pagination.page}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default withLayout(ThirdPage);
