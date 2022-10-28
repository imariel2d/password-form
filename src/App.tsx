import React, { useState, ChangeEvent } from 'react';
import { Box, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { TextValidation } from './components/TextValidation';

import {
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasMinimumCharacters,
  MINIMUM_OF_CHARACTERS_FOR_PASSWORD,
} from './utils';

export const App = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email] = useState('');

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onVisibilityClick = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordHasLowercase = Boolean(hasLowercase(password));
  const passwordHasUppercase = Boolean(hasUppercase(password));
  const passwordHasNumbers = Boolean(hasNumbers(password));
  const passwordHasMinimumCharacters = Boolean(hasMinimumCharacters(password));

  const passwordInputFieldType = showPassword ? 'text' : 'password';

  return (
    <Grid
      height="100vh"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        minWidth="400px"
        border="solid"
        borderColor="peru"
        padding="16px"
        borderRadius="8px"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="baseline"
          marginBottom="32px"
        >
          <Box width="100%" marginBottom="16px">
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              value={email}
            />
          </Box>
          <TextField
            fullWidth
            label="Password"
            variant="standard"
            value={password}
            type={passwordInputFieldType}
            onChange={onPasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={onVisibilityClick}>
                    { showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="baseline"
        >
          <TextValidation
            isValid={passwordHasLowercase}
            text="A lowercase letter."
          />
          <TextValidation
            isValid={passwordHasUppercase}
            text="A uppercase letter."
          />
          <TextValidation
            isValid={passwordHasNumbers}
            text="A number."
          />
          <TextValidation
            isValid={passwordHasMinimumCharacters}
            text={`Minimum ${MINIMUM_OF_CHARACTERS_FOR_PASSWORD} characters.`}
          />
        </Grid>
      </Box>
    </Grid>
  );
}