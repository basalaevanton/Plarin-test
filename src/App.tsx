import React from "react";
import { Route, Routes } from "react-router-dom";

import SecondPage from "./pages/SecondPage";
import FirstPage from "./pages/FirstPage";

const App = function (): JSX.Element {
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
