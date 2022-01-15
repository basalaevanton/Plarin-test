import React, { useEffect } from 'react';
import { withLayout } from '../layout/Layout';

import { Typography } from '@mui/material';
import { useTypedSelector, useActions } from '../hooks';
import { Athlete } from '../components';

const FirstPage = () => {
  const { olympic, isLoading } = useTypedSelector(
    (state) => state.WinnersState
  );
  const { fetchWinners } = useActions();

  useEffect(() => {
    fetchWinners();
  }, []);

  // console.log(olympic[0]);

  if (isLoading) {
    return <div>LOADING.....</div>;
  }
  return (
    <>
      <Athlete olympic={olympic[0]} />
    </>
  );
};

export default withLayout(FirstPage);
