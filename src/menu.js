import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Menu = (c)=> {
    return(
        <AppBar position="absolute" elevation={0} color='transparent'>
        <Toolbar>
            <IconButton aria-label="Menu" className="menu" style={{ color: 'white' }}>
                <MenuIcon fontSize="large" />
            </IconButton>
        </Toolbar>
        </AppBar>
)};

export default Menu;