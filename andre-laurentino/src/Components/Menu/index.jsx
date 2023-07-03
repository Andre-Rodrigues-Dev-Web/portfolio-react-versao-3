import React from 'react';
import { Link } from 'react-router-dom';
import{
    Navbar
} from './style'

function Menu() {
  return (
   <>
    <Navbar>
        <div className='container_menu'>
            <div className='logo'>
                <Link to="/">
                    <h1>André Laurentino</h1>
                </Link>
            </div>
            <ul className='links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    </Navbar>
   </>
  );
}

export default Menu;
