import React from 'react';

const useToggle = () => {
  const [value, setValue] = React.useState(false);

  const toggle = () => {
    setValue((st) => !st);
  };

  return [value, toggle];
};

export default useToggle;
