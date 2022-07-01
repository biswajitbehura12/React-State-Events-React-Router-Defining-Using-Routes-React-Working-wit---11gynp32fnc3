import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";

import NotFound from "./Pages/NotFound";

export const AppRoutes = () => {
    return (
        
        <Router>
        <Routes>
        <Route  path='/' element={
          <Index/>
        } />
 <Route  path='/home' element={
          <Home/>
        } />
      <Route  path='/notfound' element={
          <NotFound/>
        } />
        </Routes>
        </Router>
    )
}
