import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";

import NotFound from "./Pages/NotFound";

export const AppRoutes = () => {
    return (
        
        <Router>
        <Routes>
        <Route exact path='/' element={
          <Index/>
        } />
 <Route exact path='/home' element={
          <Home/>
        } />
      <Route exact path='/notfound' element={
          <NotFound/>
        } />
        </Routes>
        </Router>
    )
}
