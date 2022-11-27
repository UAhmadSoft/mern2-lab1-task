import { Button, Typography } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const [first, setFirst] = useState(0);

  useEffect(() => {
    console.log('Counter changed');
  }, [counter]);

  useEffect(() => {
    console.log('App mounted');
  }, []);

  useEffect(() => {
    console.log('Every Time coomponent re-render');
  });

  // * callback function

  const deleteItem = useCallback((index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }, []);

  //  use memo example
  const countetSquared = useMemo(() => {
    return counter * counter;
  }, [counter]);

  return (
    <div>
      <Typography variant='h1'>Counter: {counter}</Typography>
      <Button
        variant='contained'
        onClick={() => {
          setCounter((st) => st + 1);
          // setCounter(counter + 1);
        }}
      >
        Increment
      </Button>
      <Child
        list={list}
        deleteItem={deleteItem}
        countetSquared={countetSquared}
      />
    </div>
  );
}

export default App;

// * Component Rerenders when :
// * 1. State changes
// * 2. Props changes
// * 3. Parent component rerenders X
