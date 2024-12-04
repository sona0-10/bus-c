import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Signup from './components/Signup';
import { Container, Typography, Box } from '@mui/material';
import Login from './components/Login';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import Home from './Admindashboard/Home';
import './style.css';
import Students from './Admindashboard/Students';

function App() {
    return (
        <Router>
            <Container component="main" maxWidth="xs" className="main-container">
                <Box className="box">
                    <Typography align="center" variant="h6" gutterBottom className="typography">
                        <Link to="/" className="link">
                            <Avatar sx={{ m: 1 }} className="avatar">
                                <DirectionsBusIcon />
                            </Avatar>
                        </Link>
                        <Link to="/signup" className="link">
                            {/* You can add some text here if needed */}
                        </Link>
                    </Typography>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/student" element={<Students />} />
                    </Routes>
                </Box>
            </Container>
        </Router>
    );
}

export default App;


