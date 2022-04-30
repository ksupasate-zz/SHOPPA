import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Navbar() {
    return ( 
      <Nav className='nav bg-white justify-content-center text-center'>
        <div className='w-25'>
            <Link href = "/">
              <a className="navbar-brand text-black">S H O P P A</a>
            </Link>
        </div>
        <style jsx>{`
                .navbar-brand {
                    line-height: 44px;
                }
                .list-inline-item{
                    line-height : 27px;
                }
                li{
                    text-align:center;
                }
                .w-25{
                    text-align : right ;
                }
                .w-25:nth-child(3){
                    text-align : left ;
                }
                .navbar-brand{
                    font-weight : 700 ;
                }
        `}</style>
        <div className='w-50'>
                <li className="list-inline-item">
                    <Link href="/Shoes">
                        <a className="nav-link text-black">Shoes</a>
                    </Link>
                </li>
       
                <li className="list-inline-item">
                    <Link href="/Collectibles">
                        <a className="nav-link text-black">Collectibles</a>
                    </Link>
                </li>
                    
                <li className="list-inline-item">
                    <Link href="/Apparel">
                        <a className="nav-link text-black">Apparel</a>
                    </Link>
                </li>

                <li className="list-inline-item">
                    <Link href="/Bags">
                        <a className="nav-link text-black">Bags</a>
                    </Link>
                </li>

                <li className=" list-inline-item">
                    <Link href="/Accessories">
                    <a className="nav-link text-black">Accessories</a>
                    </Link>
                </li>
        </div>
        <div className='w-25'>
                <li className=" list-inline-item">
                    <Link href="/Accessories">
                        <a className="nav-link text-black">
                            <ShoppingCartOutlinedIcon />
                        </a>
                    </Link>
                </li>

                <li className="list-inline-item">
                    <Link href="/Accessories">
                        <a className="nav-link text-black">
                            <FavoriteBorderOutlinedIcon />
                        </a>
                    </Link>
                </li>

                <li className="list-inline-item">
                    <Link href="/Accessories">
                        <a className="nav-link text-black">
                            <AccountCircleOutlinedIcon />
                        </a>
                    </Link>
                </li>
        </div>
      </Nav>
     )
}
 




