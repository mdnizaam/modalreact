import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css'
const MainNavigation = () => {
  return (
      <div>
          <header className='header'>
              <div className='logo'>
                  React Posts
              </div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">All Posts</Link>
                      </li>
                      <li>
                          <Link to="/addnewposts">Add New Posts</Link>
                      </li>
                      <li>
                          <Link to="/favoriteposts">Favorite Posts</Link>
                      </li>
                  </ul>
                  </nav>
          </header>
      </div>
  )
};

export default MainNavigation;
