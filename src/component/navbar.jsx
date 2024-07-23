import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <header className="header">
    <nav id="navbar">
      <div class="container">
        
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Dessert</a></li>
          <li><a href="#">Appetizer</a></li>
          <li><a href="#">Pasta</a></li>
          <li><a href="#">Salad</a></li>
          <li><a href="#">Burger</a></li>
          <li><a href="#">Pizza</a></li>
          <li><a href="#">More Recipes</a></li>
        </ul>
      </div>
    </nav>
    <section id="headings">
      <div className="con">
        <div className="centered">
          <h1>HOMIE RECIPES</h1>
        </div>
        <div className="btn">
        <button class="btn1">WATCH VIDEOS</button>
        <button class="btn1">BASIC SKILLS</button>
        <button class="btn1">LEARN MORE</button>
        </div>
      </div>
    </section>
    </header>
  )
}

export default Navbar;