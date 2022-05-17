import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 , width: "100%"}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to={'/'} style={{textDecoration: "none", color: "white"}}>
                        <Typography variant="h6" color="inherit" component="div">
                            All Products
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
