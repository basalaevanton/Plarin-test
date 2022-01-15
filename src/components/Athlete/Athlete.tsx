import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { AthleteProps } from "./Athlete.props";
import styles from "./Athlete.module.scss";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Collapse, Typography } from "@mui/material";

export const Athlete = ({ olympic, ...props }: AthleteProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.athlete}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        onClick={() => setOpen(!open)}
        className={styles.title}
      >
        <IconButton aria-label="expand row" size="small">
          {open ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
        {olympic?.athlete}
      </Typography>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={styles.collapse}>
          <Typography variant="h6" gutterBottom component="div">
            Age: {olympic?.age}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Sport: {olympic?.sport}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Country:{olympic?.country}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Medals:{olympic?.total}
          </Typography>
        </div>
      </Collapse>
    </div>
  );
};

export default Athlete;
