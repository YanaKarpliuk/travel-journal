import React from "react";
import planetImg from '../images/planet.svg'

export default function Navbar () {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={planetImg} alt="logo"/>
      <p className="navbar-title">my travel journal</p>
    </nav>
  )
}