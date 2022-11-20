import React from 'react';
import useInput from '../hooks/useInput';

import { Box } from '@mui/system';
import { TextField, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const EditTodoForm = ({ title, updateTodo, toggleForm }) => {
  const [value, handleChange, reset] = useInput(title || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    updateTodo(value);
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box display='flex' justifyContent='center' gap={2}>
          <TextField
            value={value}
            onChange={handleChange}
            label='Edit Todo'
            placeholder='todo'
            required
            size='small'
          />
          <IconButton onClick={toggleForm}>
            <CloseIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};

export default EditTodoForm;
