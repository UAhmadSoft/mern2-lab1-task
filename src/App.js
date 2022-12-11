import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useToggle from './hooks/useToggle';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import useInput from './hooks/useInput';
import { Box, Button, capitalize } from '@mui/material';
import { Add } from '@mui/icons-material';
import GenericForm from './GenericForm';

function App() {
  // loading state

  const [formFields, setFormFields] = useState([
    {
      name: 'name',
      value: '',
      type: 'text',
      label: 'Name',
    },
    {
      name: 'email',
      value: '',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'password',
      value: '',
      type: 'password',
      label: 'Password',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formFields', formFields);

    const user = formFields.reduce((preVal, currVal) => {
      preVal[currVal.name] = currVal.value;
      return preVal;
    }, {});

    // * reset formFields
    setFormFields((st) =>
      st.map((el) => ({
        ...el,
        value: '',
      }))
    );
  };

  const addNewField = (newField) => {
    setFormFields((st) => [
      ...st,
      {
        name: newField,
        value: '',
        type: 'text',
        label: capitalize(newField),
        // label: `${newField.charAt(0).toUpperCase()}${newField.slice(1)}]}`,
      },
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((st) =>
      st.map((el) =>
        el.name === name
          ? {
              ...el,
              value,
              // value: value,
            }
          : el
      )
    );
  };

  return (
    <Box
      padding={5}
      border='1px solid #ccc'
      width='fit-content'
      margin='20px auto'
    >
      <GenericForm
        handleSubmit={handleSubmit}
        formFields={formFields}
        addNewField={addNewField}
        handleChange={handleChange}
      />
    </Box>
  );
}

export default App;
