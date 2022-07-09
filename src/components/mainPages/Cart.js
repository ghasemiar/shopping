import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRecoilValue } from "recoil";
import {cart} from "./../../store/atoms"
export default function Cart() {
    const cartItem = useRecoilValue(cart)
  return (
    <TableContainer component={Paper} sx={{mt:10}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Price</b></TableCell>
            <TableCell><b>Rating</b></TableCell>
            <TableCell><b>Category</b></TableCell>
            <TableCell><b>Count</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItem.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.rating.rate}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.rating.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
