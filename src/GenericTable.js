import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import React from 'react';

const GenericTable = ({ columns = [], rows = [] }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          {columns.map((el) => (
            <TableCell key={Math.floor(Math.random() * 1000)}>
              <TableSortLabel>{el.label}</TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((el) => (
          <TableRow key={Math.floor(Math.random() * 1000)}>
            {columns.map((column) => (
              <TableCell key={Math.floor(Math.random() * 1000)}>
                {el[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default GenericTable;
