import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Delete } from '@mui/icons-material';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
      alignItems='center'
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        width: 400,
        margin: '20px auto',
      }}
    >
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </Box>
  );
};

export default TodoList;
