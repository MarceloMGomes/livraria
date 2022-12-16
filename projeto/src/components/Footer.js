import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

const Footer = () =>{
    return(
        <div>   
             <footer className='footer bg-dark  d-flex flex-wrap justify-content-between align-items-center'>
                <p className='col-md-6  m-2 mb-1  text-muted py-2 '> &copy; Direitos Reservados</p>
                
                <ul className='nav  col-md-2 m-2 mb-1 justify-content-between align-items-center'>
                        
                            <li className='nav-item col-md-2 px-2'>
                                <Link className='nav-link px-2 text-muted'> <i className='bi bi-instagram'></i>
                                </Link>
                            </li>

                            <li className='nav-item col-md-2'> 
                                <Link className='nav-link px-2 text-muted'><i className='bi bi-envelope '></i></Link>
                            </li>

                            <li className='nav-item col-md-2 py-2'>
                                <Link><i className='bi bi-facebook'></i></Link>
                            </li>
                    
                </ul>
            </footer>
        </div>
    )
}
export default Footer
