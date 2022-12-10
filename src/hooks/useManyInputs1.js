import React from 'react';

const useManyInputs = (intitalVal = {}) => {
  const [value, setValue] = React.useState(intitalVal);

  const onChange = (e) => {
    setValue((st) => ({ ...st, [e.target.name]: e.target.value }));
  };

  const reset = () => {
    setValue(intitalVal);
  };

  return [value, onChange, reset];
};

export default useManyInputs;
