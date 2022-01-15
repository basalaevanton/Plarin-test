import React from "react";
import { Box, CircularProgress } from "@mui/material";
import styles from "./Loading.module.scss";

export const Loading = (): JSX.Element => {
  return (
    <>
      <Box className={styles.container}>
        <CircularProgress
          color="secondary"
          size={150}
          className={styles.loading}
        />
      </Box>
    </>
  );
};
