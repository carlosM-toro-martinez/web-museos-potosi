import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Map from './Map';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';
import '../styles/components/app.css';
import '../styles/components/cards.css';
import '../styles/components/header.css';
import '../styles/components/footer.css';
import '../styles/components/map.css';





function App() {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={(initialState)}>    
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="Map" element={<Map  />} />
                    <Route component={<h1>error</h1>} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;
