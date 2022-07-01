import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          </>
        } />
        </Routes>
        </Router>
    )
}
