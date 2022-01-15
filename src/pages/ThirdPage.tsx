import React, { useMemo, useState } from "react";
import { useTypedSelector } from "../hooks";
import { withLayout } from "../layout/Layout";
import { Pagination, Typography } from "@mui/material";
import { IOlympic } from "../interfaces/winners.interface";
import { Athlete, AthleteFilter } from "../components";

const ThirdPage = () => {
  const { olympic } = useTypedSelector((state) => state.WinnersState);
  const [page, setPage] = useState<number>(1);

  const [search, setSearch] = useState({ search: "", amountOnPage: 9 });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const SearchedPosts: IOlympic[] = useMemo(() => {
    return olympic.filter((post: IOlympic) =>
      post.athlete.toLowerCase().includes(search.search.toLowerCase())
    );
  }, [search]);
  const count: number = Math.ceil(SearchedPosts.length / search.amountOnPage);

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
          (page - 1) * search.amountOnPage,
          page * search.amountOnPage
        ).map((olympic: IOlympic, id: number) => (
          <Athlete key={id} olympic={olympic} />
        ))}
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default withLayout(ThirdPage);
