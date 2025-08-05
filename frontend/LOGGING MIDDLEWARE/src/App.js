import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatsPage from './pages/StatsPage';
import RedirectHandler from './pages/RedirectHandler';
import { LoggerProvider } from './logging/LoggerProvider';
import { Box, AppBar, Toolbar, Button } from '@mui/material';

function App() {
  return (
    <LoggerProvider>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Shortener</Button>
            <Button color="inherit" component={Link} to="/stats">Statistics</Button>
          </Toolbar>
        </AppBar>
        <Box minHeight="calc(100vh - 64px)">
          <Routes>
            <Route path="/" element={<ShortenerPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/:shortcode" element={<RedirectHandler />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </LoggerProvider>
  );
}

export default App;
