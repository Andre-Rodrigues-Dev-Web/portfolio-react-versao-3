import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

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
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </ul>
        </div>
    </Navbar>
   </>
  );
}

export default Menu;
