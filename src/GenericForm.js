import { Add } from '@mui/icons-material';
import { Button, Divider, IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useInput from './hooks/useInput';
import useToggle from './hooks/useToggle';

const GenericForm = ({
  formFields,
  handleChange,
  handleSubmit,
  addNewField,
}) => {
  const [newField, handleNewFieldChange, resetNewField] = useInput('');
  const [showField, toggleField] = useToggle(false);

  const handleCreateNew = (e) => {
    e.preventDefault();
    addNewField(newField);
    resetNewField();
    toggleField();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            value={field.value}
            type={field.type || 'text'}
            label={field.label}
            onChange={handleChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />
        ))}
        <Button
          type='submit'
          variant='contained'
          color='success'
          startIcon={<Add />}
        >
          Submit
        </Button>
      </form>
      <Box sx={{ mt: 4 }} />
      <IconButton onClick={toggleField} sx={{ mb: 2 }}>
        <Add />
      </IconButton>

      {showField && (
        <form onSubmit={handleCreateNew}>
          <TextField
            value={newField}
            type='text'
            label='Name'
            onChange={handleNewFieldChange}
            fullWidth
            variant='outlined'
            size='small'
          />
        </form>
      )}
      <Divider />
    </div>
  );
};

export default GenericForm;
