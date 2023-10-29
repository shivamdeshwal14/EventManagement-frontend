import { Link } from "react-router-dom";
import * as React from 'react';
import { Avatar } from "@mui/material";
import { Typography, Box } from "@mui/material";
import Style from "./Event.module.css"
const NavBar = () => {
    return (
        <div className={Style.NavBar}>
            <Typography variant="h6" component="div">
                EventManagement
            </Typography>
            <Typography variant="h6" component="div">
                <Link>
                </Link>
            </Typography>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="Your Name" src="" />
                <Typography variant="body2" style={{ marginLeft: '10px' }}>
                    Your Name
                </Typography>
            </Box>
            
        </div>
    );
}

export default NavBar;
