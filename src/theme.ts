import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B', // Cor principal da loja
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

export default theme;