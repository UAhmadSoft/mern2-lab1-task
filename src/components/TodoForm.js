import { Add } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useInput from '../hooks/useInput';

// const TodoForm = (props) => {
const TodoForm = ({ addTodo }) => {
  // const { addTodo } = props;

  const [value, handleChange, reset] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box display='flex' justifyContent='center' gap={2} marginTop={5}>
          <TextField
            value={value}
            onChange={handleChange}
            label='Add Todo'
            placeholder='todo'
            required
            size='small'
          />
          <Button
            variant='contained'
            type='submit'
            // color='primary'
            startIcon={<Add />}
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TodoForm;
