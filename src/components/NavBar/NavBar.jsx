import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user}=useAuth()
  console.log(user)
  const navLinks = (
    <>
      <li>
        <NavLink
          className="border border-primary rounded-sm font-semibold text-primary"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border border-primary rounded-sm font-semibold text-primary"
          to="/register-hr"
        >
          join as HR
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border border-primary rounded-sm font-semibold text-primary"
          to="/register-employee"
        >
          Join as Epmloyee
        </NavLink>
      </li>
      <li className="md:hidden">
        <ThemeToggle></ThemeToggle>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300 shadow-xs shadow-neutral rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-1 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="hidden md:block">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
