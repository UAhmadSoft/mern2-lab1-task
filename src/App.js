import { Add } from '@mui/icons-material';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import useInput from './hooks/useInput';
// import useManyInputs from './hooks/useManyInputs1';
import { useManyInputs } from 'react-nice-hooks';
import Table from './Table';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function App() {
  const [state, handleChange] = useManyInputs({ initialState });
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setData(state);
    // resetState();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={state.name}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <TextField
          label='Email'
          name='email'
          value={state.email}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <TextField
          type='password'
          label='Password'
          name='password'
          value={state.password}
          onChange={handleChange}
          variant='outlined'
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='success'
          startIcon={<Add />}
        >
          Submit
        </Button>
      </form>

      <Table state={data} />
    </Box>
  );
}

export default App;
