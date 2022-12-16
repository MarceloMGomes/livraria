import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from '../Img/Logo.png'


const Layout = () => {
  return (
    <>
    <header>
            <nav className='navbar navbar-expand-md '>
                <Link to='/Home'>
                <img src={Logo} className='img-logo mx-1' width='150' height='90' alt="logo da livraria"/>
                </Link>
                <div className='collapse navbar-collapse ' >
                  <ul className="navbar-nav mx-auto ">
                    <li className='nav-item active '>
                      <Link className='nav-link text-white' to='/Home'> Home</Link>
                    </li>
                    <li className='nav-item '>
                    <Link className='nav-link text-white' to='/get'> Nossos Livros</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link text-white' to='/post'> Emprestar Livros</Link>
                    </li>
                  </ul>
                </div>
              </nav>
          
      
      </header>
      <Outlet />
      
    </>
  )
};

export default Layout;