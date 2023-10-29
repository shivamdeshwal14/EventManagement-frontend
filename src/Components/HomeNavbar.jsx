import { Link } from "react-router-dom";
import * as React from 'react';
import { Avatar } from "@mui/material";
import { Typography, Box } from "@mui/material";

const NavBar = () => {
    return (
        <div style={{ display: 'flex', position:'fixed',width:'100%',background: '#9AA4EC', justifyContent: 'space-between', alignItems: 'center', padding: '10px',height:'80px'}}>
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
