import React from "react";
import "./loginSignup.css";
import SvgCircle from "../../svg/Circle";
import SvgComas from "../../svg/Comas";

export default function LoginSignUp() {
  return (
    <div className="signup-page">
      <div className="left-side">
        <div className="paragraph">
          <div>
            <SvgComas />
            <p>
              The passage experienced a surge in popularity
              <br /> during the 1960s when Letraset used it on their
              <br /> dry-transfer sheets, and again during the 90s as <br />
              desktop publishers bundled the text with their
              <br /> software.
            </p>
            <div className="head">
              <h6>Vincent Obi</h6>
              <SvgCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <a href="">Do not have an account?Signup</a>
        {/* <Login/>
        <Signup/> */}
      </div>
    </div>
  );
}
