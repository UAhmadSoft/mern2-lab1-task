import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useToggle from './hooks/useToggle';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import useInput from './hooks/useInput';
import { Box, Button, capitalize } from '@mui/material';
import { Add } from '@mui/icons-material';
import GenericTable from './GenericTable';

const columns = [
  {
    id: 'firstName',
    label: 'First Name',
  },
  {
    id: 'lastName',
    label: 'Last Name',
  },
  {
    id: 'age',
    label: 'Age',
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function App() {
  // loading state

  return (
    <Box
      padding={5}
      border='1px solid #ccc'
      width='fit-content'
      margin='20px auto'
    >
      <GenericTable columns={columns} rows={rows} />
    </Box>
  );
}

export default App;
