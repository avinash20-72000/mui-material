import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" sx={{backgroundColor: 'black'}} >{/* NavigationBar */}
                <Toolbar >
                    <AppleIcon  sx={{ ml: '10px' }} />            {/* icon */}
                    <Typography  sx={{ ml: 'auto' }}>Store</Typography>
                    <Typography  sx={{ ml: 'auto' }}>Mac</Typography>
                    <Typography  sx={{ ml: 'auto' }}>iPad</Typography>
                    <Typography  sx={{ ml: 'auto' }}>iPhone</Typography>
                    <Typography  sx={{ ml: 'auto' }}>Watch</Typography>
                    <Typography  sx={{ ml: 'auto' }}>Airpods</Typography>
                    <Typography  sx={{ ml: 'auto' }}>TV & Home</Typography>
                    <Typography  sx={{ ml: 'auto' }}>Only on Apple</Typography>
                    <Typography  sx={{ ml: 'auto' }}>Accessories</Typography>
                    <Typography  sx={{ ml: 'auto' }}>Support</Typography>
                    <SearchIcon  sx={{ ml: 'auto' }}/>
                    <LocalMallIcon  sx={{  ml: 'auto',mr:'auto' }}/>
                        
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align="center"  gutterBottom>
                            iPhone
                        </Typography>
                        
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;