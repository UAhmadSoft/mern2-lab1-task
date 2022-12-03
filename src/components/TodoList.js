import React, { useEffect, useContext } from 'react';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Delete } from '@mui/icons-material';
import Todo from './Todo';
import { TodosContext } from '../contexts/TodosContext';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const { displayTodos } = useContext(TodosContext);

  useEffect(() => {
    console.log('TodoList component re-render');
  });

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
