import React from "react";
import SvgLogo from "../../svg/Logo";

export default function Header() {
  return (
    <div>
      <div className="header-wrap">
        <ul>
          <li><SvgLogo/></li>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li><button>Log In</button></li>
          <li><button>Buy Now – 24$</button></li>
        </ul>
        
      </div>
    </div>
  );
}
