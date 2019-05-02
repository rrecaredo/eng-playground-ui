import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupLogin from './user/SignupLogin';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
          <Route path='/login' component={SignupLogin} />
          <Route path='/signup' component={SignupLogin} />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
