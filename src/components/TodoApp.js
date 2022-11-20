import { Typography } from '@mui/material';
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' },
  ]);

  const addTodo = (todo) => {
    setTodos((st) => [...st, { id: st.length + 1, title: todo }]);
    // setTodos((st) => {
    //   return [...todos, todo];
    // });
  };

  // Delete Todo
  const deleteTodo = (e) => {
    const { id } = e.currentTarget.dataset;
    setTodos((st) => st.filter((el) => el.id != id));
  };
  // Update Todo
  const updateTodo = (id, newTodo) => {
    console.log('id', id);
    console.log('newTodo', newTodo);
    setTodos((st) =>
      st.map((todo) => (todo.id === id ? { ...todo, title: newTodo } : todo))
    );
  };

  return (
    <div>
      <Typography align='center' variant='h5'>
        Todo App
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoApp;

// Sum function

// export const sum = (a, b) => {
//   return a + b;
// };
// export const sum2 = (a, b) => {
//   return a + b;
// };

// export { sum, sum2 };
