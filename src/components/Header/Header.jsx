import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='headerTitle'>Intuitive Quizz App</Link>
    </div>
  )
}

export default Header
