import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import SecondPage from "./pages/SecondPage";
import FirstPage from "./pages/FirstPage";
import { useActions, useTypedSelector } from "./hooks";
import { Loading } from "./components";

const App = function (): JSX.Element {
  const { isLoading } = useTypedSelector((state) => state.WinnersState);
  const { fetchWinners } = useActions();

  useEffect(() => {
    fetchWinners();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="second" element={<SecondPage />} />
      </Routes>
    </>
  );
};

export default App;
