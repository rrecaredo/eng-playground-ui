import { createMuiTheme } from '@material-ui/core';
import { cyan, orange } from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
      primary: { main: cyan[700] },
      secondary: { main: orange[700] },
    },
    typography: { useNextVariants: true },
  });