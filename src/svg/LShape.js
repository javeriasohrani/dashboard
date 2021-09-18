import * as React from "react";

function SvgLshape(props) {
  return (
    <svg
      width={34}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 0h12.5v33H0V20.5h21V0z" fill="#fff" />
    </svg>
  );
}

export default SvgLshape;
