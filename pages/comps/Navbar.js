import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountMenu from "./Account";

export default function Navbar() {
  return (
    <Nav className="nav justify-content-center text-center mb-5 mt-3">
      <div className="w-25">
        <Link href="/">
          <a className="navbar-brand text-black">S H O P P A</a>
        </Link>
      </div>
      <style jsx>{`
        .navbar-brand {
          line-height: 44px;
        }
        .list-inline-item {
          line-height: 27px;
        }
        li {
          text-align: center;
        }
        .navbar-brand {
          font-weight: 650;
          font-size: 25px;
        }
      `}</style>
      <div className="w-50">
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
      <div className="w-25">
        <li className=" list-inline-item">
          <Link href="/cart">
            <a className="nav-link text-black">
              <ShoppingCartOutlinedIcon />
            </a>
          </Link>
        </li>

        <li className="list-inline-item">
          <Link href="/#">
            <a className="nav-link text-black">
              <FavoriteBorderOutlinedIcon />
            </a>
          </Link>
        </li>

        <li className="list-inline-item">
          <AccountMenu/>
        </li>
      </div>
    </Nav>
  );
}