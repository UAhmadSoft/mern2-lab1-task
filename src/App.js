import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useToggle from './hooks/useToggle';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import useInput from './hooks/useInput';
import { Box, Button, capitalize } from '@mui/material';
import { Add } from '@mui/icons-material';

function App() {
  // loading state

  return (
    <Box
      padding={5}
      border='1px solid #ccc'
      width='fit-content'
      margin='20px auto'
    ></Box>
  );
}

export default App;
