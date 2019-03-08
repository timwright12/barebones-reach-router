import React from 'react';
import { Router } from "@reach/router"

import Home from './pages/home/';
import Dash from './pages/dashboard/';

const App = () => (
    <div className="container">
        <Router>
            <Home path="/" />
            <Dash path="dashboard" />
        </Router>
    </div>
);

export default App;
