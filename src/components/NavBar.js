import React from "react";

const Navbar = props => (
  <nav className="site-header sticky-top py-1 bg-dark">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <a className="mt-2 text-white mx-auto" id="gameLink" href="/">
        <h3>Clicky Game</h3>
      </a>
      <span className="mt-2 text-white mx-auto" id="instruction">
        <h3>Click an image to start!</h3>
      </span>
      <span className="mt-2 text-white mx-auto">
        <h3>Score: {props.score} | Top Score: {props.maxScore}</h3>
      </span>
    </div>
  </nav>
);

export default Navbar;
