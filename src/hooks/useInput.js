import React from 'react';

const useInput = (intitalVal = '') => {
  const [value, setValue] = React.useState(intitalVal);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, onChange, reset];
};

export default useInput;
