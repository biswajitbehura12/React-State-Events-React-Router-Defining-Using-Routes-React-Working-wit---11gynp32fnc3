import React from 'react';

import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return(
        <div>
       <nav>
        <ul>
        <li>  <NavLink to="/" class="index-link">
  FAQs
</NavLink> </li>
        <li> <NavLink to="/home" class="home-link">
  Home
</NavLink>  
        </li>
        </ul>
        
        </nav>
        
        </div>
    )
}
