import React, { createContext, useCallback, useState } from 'react';

// ! Create Context
export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([{ id: 1, title: 'Todo 1' }]);

  const displayTodos = useCallback(() => {
    console.log(todos);
  }, []);

  // ! Return Provider instead of JSX
  return (
    <TodosContext.Provider
      value={{
        todos,
        // todos : todos,
        displayTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
