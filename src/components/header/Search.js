import React, { useState } from "react";
import { TextField } from "@mui/material";
export default function PrimarySearchAppBar() {
  return (
    <>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Search..."
        variant="filled"
        size="small"
      />
    </>
  );
}
