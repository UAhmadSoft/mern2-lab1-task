import { Container, Typography } from '@mui/material';
import React, { memo } from 'react';

const Table = memo(({ state, users }) => {
  return (
    <Container>
      <Typography variant='h1'>User</Typography>
      {state && (
        <>
          <Typography variant='h5'>Name : {state.name}</Typography>
          <Typography variant='h5'>Email : {state.email}</Typography>
          <Typography variant='h5'>Password : {state.password}</Typography>
        </>
      )}

      {users?.map((el) => (
        <h1>el</h1>
      ))}
    </Container>
  );
});

export default Table;
