import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';    
import { useAddItem, useDecreaseItem, useRemoveItem } from "./../../store/hooks";

export default function CartQtyButtons({ item }) {
    const add = useAddItem();
    const remove = useRemoveItem();
    const decrease = useDecreaseItem();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        <Button onClick={() => decrease(item)}>-</Button>
        <Button onClick={() => add(item)}>+</Button>
        <Button onClick={() => remove(item)}>x</Button>
      </ButtonGroup>
    
    </Box>
  );
}
