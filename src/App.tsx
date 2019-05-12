import React, { useState } from 'react';
import { Router, Route } from 'react-router-dom';
import SignupLogin from './user/SignupLogin';
import { MuiThemeProvider, IconButton } from '@material-ui/core';
import theme from './theme';
import { errorBus } from './infrastructure/errorBus';
import IError from './infrastructure/error';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import FlashCard from './flashcards/FlashCard';
import { PrivateRoute } from './infrastructure/PrivateRoute';
import { history } from 'src/infrastructure/history';

interface INotificationError {
  open: boolean;
  message?: string;
}

const App: React.FC = () => {

  const [error, setError] = useState<INotificationError>({ open: false });
  const handleErrorClose = () => setError({ open: false });

  errorBus.subscribe((event: IError) => {
    setError({ open: true, message: event.payload });
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
          <Route path='/login' component={SignupLogin} />
          <PrivateRoute path='/flashcards' component={FlashCard} />
      </Router>
      <Snackbar
        open={error.open}
        onClose={handleErrorClose}
        onExit={handleErrorClose}
        message={error.message}
        action={[
          <IconButton
            key='close'
            onClick={handleErrorClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      ></Snackbar>
    </MuiThemeProvider>
  );
}

export default App;
