import React from 'react';
import NavbarComponent from './NavbarComponent';
import Home from '../pages/Home';

export default function Dashboard() {
  return (
    <div className='body-container'>
      <div className='main-container'>
        <NavbarComponent />
        <Home />
      </div>
    </div>
  );
}
