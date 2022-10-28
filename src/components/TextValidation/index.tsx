import React from 'react';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  isValid: boolean;
  text: string;
}

export const TextValidation = ({ text, isValid }: Props) => {

  return (
    <Typography
      display="flex"
      marginBottom="8px"
    >
      {isValid ? <CheckIcon color="success"/> : <CloseIcon color="error"/>}
      {text}
    </Typography>
  );
};