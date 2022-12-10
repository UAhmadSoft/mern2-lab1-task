import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useToggle from './hooks/useToggle';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import useInput from './hooks/useInput';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

function App() {
  // loading state

  // * Generic form Example
  const [form, setForm] = useState([
    { id: 1, field: 'name', value: '', type: 'text' },
    { id: 2, field: 'email', value: '', type: 'email' },
    { id: 3, field: 'password', value: '', type: 'password' },
    { id: 4, field: 'confirmPassword', value: '', type: 'password' },
  ]);

  const [fieldAdded, onFieldChange, resetField] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm([...form, { id: form.length, field: fieldAdded, value: '' }]);
    resetField();
  };

  return (
    <div>
      {form.map((item) => (
        <TextField
          key={item.id}
          label={item.field}
          variant='outlined'
          value={item.value}
          type={item.type || 'text'}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <TextField
          label='Field Name'
          variant='outlined'
          value={fieldAdded}
          onChange={onFieldChange}
        />
        <Button
          variant='contained'
          color='success'
          startIcon={<Add />}
          type='submit'
        >
          Add Field
        </Button>
      </form>
    </div>
  );
}

export default App;
