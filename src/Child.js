import { List } from '@mui/material';
import React, { memo, useEffect } from 'react';

const Child = memo(({ list, deleteItem }) => {
  useEffect(() => {
    console.log('Child coomponent re-render');
  });
  return (
    <div>
      <List>
        {list.map((item, idx) => (
          <li
            onClick={() => {
              deleteItem(idx);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </List>
    </div>
  );
});

export default Child;
