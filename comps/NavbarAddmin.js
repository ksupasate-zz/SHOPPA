import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountMenu from "./Account";
export default function Navbar() {
  return (
    <Nav className="nav justify-content-center text-center mb-3 mt-3">
      <div className="w-25">
        <Link href="/">
          <a className="navbar-brand text-black">S H O P P A</a>
        </Link>
      </div>
      <style jsx>{`
        .w-25 {
          width: 25%;
          float: left;
        }
        .w-50 {
          width: 50%;
          float: left;
        }
        .navbar-brand {
          line-height: 44px;
        }
        .list-inline-item {
          line-height: 27px;
        }
        li {
          text-align: center;
        }
        .w-25 {
          text-align: center;
        }
        .w-25:nth-child(3) {
          text-align: center;
        }
        .navbar-brand {
          font-weight: 650;
          font-size: 25px;
        }
      `}</style>
      <div className="w-50">
      </div>
      <div className="w-25">
      <li className="list-inline-item">
          <Link href="/Profile">
            <a className="nav-link text-black">
              <div>Narith Thanomsup</div>
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