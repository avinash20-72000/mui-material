import React from 'react'
import { Typography, AppBar,  Toolbar, CssBaseline } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const Navbar = (props) => {
    return (
        <>
            <CssBaseline  />
            <AppBar position="relative" style={{ background: '#252529' }} >{/* NavigationBar */}
                <Toolbar >
                    <AppleIcon sx={{ ml: 25,color:'#d7d7c8' }} />            {/* icon */}
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>Store</Typography>
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>Mac</Typography>
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>iPad</Typography>
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>iPhone</Typography>
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>Watch</Typography>
                    <Typography variant="overline" sx={{ ml: 5 ,color:'#d7d7c8' }}>Airpods</Typography>
                    <Typography variant="caption" sx={{ ml: 5  ,color:'#d7d7c8'}}>TV & Home</Typography>
                    <Typography variant="caption" sx={{ ml: 7  ,color:'#d7d7c8'}}>Only on Apple</Typography>
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>Accessories</Typography>
                    <Typography variant="overline" sx={{ ml: 7 ,color:'#d7d7c8' }}>Support</Typography>
                    <SearchIcon variant="overline" sx={{ ml: 7 ,color:'#d7d7c8'}} />
                    <LocalMallIcon sx={{ ml: 7, mr: 25 ,color:'#d7d7c8' }} />
                </Toolbar>
            </AppBar>
        </>
    )
}