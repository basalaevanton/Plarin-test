import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { AthleteProps } from './Athlete.props';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Collapse, Typography } from '@mui/material';

export const Athlete = ({ olympic, ...props }: AthleteProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <Typography variant="h4" gutterBottom component="div">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          {olympic?.athlete}
        </Typography>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
      </Collapse>
    </>
  );
};

export default Athlete;
