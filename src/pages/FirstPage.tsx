import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";

const FirstPage = () => {
  return (
    <>
      <h1>Start React KIT</h1>
    </>
  );
};

export default withLayout(FirstPage);
