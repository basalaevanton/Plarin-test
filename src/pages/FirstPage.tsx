import React, { useEffect } from 'react';
import { withLayout } from '../layout/Layout';

import { Typography } from '@mui/material';
import { useTypedSelector, useActions } from '../hooks';

const FirstPage = () => {
  const { olympic } = useTypedSelector((state) => state.WinnersState);
  const { fetchWinners } = useActions();

  useEffect(() => {
    fetchWinners();
  }, []);

  console.log(olympic);

  return (
    <>
      <h1>Start React KIT</h1>
    </>
  );
};

export default withLayout(FirstPage);
