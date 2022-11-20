import React, { useState } from 'react';

import { Box } from '@mui/system';
import { Typography, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import useToggle from '../hooks/useToggle';
import EditTodoForm from './EditTodoForm';

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditOpen, toggleEditOpen] = useToggle(false);

  const handleUpdate = (newTodo) => {
    console.log('newTodo', newTodo);
    updateTodo(todo.id, newTodo);
    toggleEditOpen();
  };

  return (
    <Box key={todo.id} display='flex' gap={2} marginTop={2} alignItems='center'>
      {isEditOpen ? (
        <EditTodoForm
          updateTodo={handleUpdate}
          title={todo.title}
          toggleForm={toggleEditOpen}
        />
      ) : (
        <Typography variant='h6'>{todo.title}</Typography>
      )}
      <IconButton onClick={toggleEditOpen}>
        <Edit color='primary' />
      </IconButton>
      <IconButton onClick={deleteTodo} data-id={todo.id}>
        <Delete color='error' />
        {/* <Delete
              color='error'
              onClick={() => {
                deleteTodo(todo.id);
              }}
            /> */}
      </IconButton>
    </Box>
  );
};

export default Todo;
