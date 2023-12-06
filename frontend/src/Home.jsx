import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import EDA from './pages/EDA';
import Description from './pages/Description';
import Models from './pages/Models';

function Home() {
    const [page, setPage] = useState(0)

    return (
        <div >
            <AppBar position="static" style={{ backgroundColor: '#173E5E' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Analysis of LA Crime Dataset
                    </Typography>
                    <Button onClick={() => { setPage(0) }} color="inherit">Description</Button>
                    <Button onClick={() => { setPage(1) }} color="inherit">EDA</Button>
                    <Button onClick={() => { setPage(2) }} color="inherit">Models</Button>
                </Toolbar>
            </AppBar>

            <div className='content'>
                {
                    {
                        0: <Description />,
                        1: <EDA />,
                        2: <Models />
                    }[page]
                }
            </div>
        </div>
    )
}

export default Home