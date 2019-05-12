import { SwipeableDrawer, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { logout } from "src/infrastructure/authService";
import { history } from 'src/infrastructure/history';

const Layout : React.FC = ({ children }) => {

    const [opened, setOpened] = useState(false);

    const logoutFromApp = () => {
        logout();
        history.push('/login');
    };

    const menu = (
        <div>
          <List>
          </List>
          <Divider />
          <List>
              <ListItem button key="Logout" onClick={() => logoutFromApp()}>
                <ListItemIcon>
                    <ExitIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
        </div>
      );

    return(
        <React.Fragment>
            <Button onClick={() => setOpened(true)}>
                <MenuIcon/>
            </Button>
            <SwipeableDrawer
                anchor="left"
                open={opened}
                onClose={() => setOpened(false)}
                onOpen={() => setOpened(true)}>
                {menu}
            </SwipeableDrawer>
            {children}
        </React.Fragment>
    );
};

export default Layout;
