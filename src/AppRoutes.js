import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
