import React from 'react'
import { Nav } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
    return ( 
      <Nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className="container-xl">
            <Link href = "/">
              <a className="navbar-brand">Shoppa</a>
            </Link>
            <p>Hi</p>

            <div className="collapse navbar-collapse" id="navbarsExample07XL">
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/Shoes">
                            <a className="nav-link">Shoes</a>
                        </Link>
                    </li>
       
                    <li className="nav-item">
                        <Link href="/Collectibles">
                            <a className="nav-link">Collectibles</a>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="/Apparel">
                            <a className="nav-link">Apparel</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/Bags">
                            <a className="nav-link">Bags</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/Accessories">
                            <a className="nav-link">Accessories</a>
                        </Link>
                    </li>
      
                </ul>
   
            </div> 
        </div>
      </Nav>
     )
}
 




