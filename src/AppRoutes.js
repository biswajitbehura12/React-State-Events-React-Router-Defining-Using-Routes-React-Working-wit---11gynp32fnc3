import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
    return (
        
        <Router>
        <Routes>
        <Route exact path='/' element={
          <Index />
        } />
        </Routes>
        </Router>
    )
}
