import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { Navbar } from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Navbar />
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