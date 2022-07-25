import React, { useState } from "react";
import Button from "./Button";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="./images/image 300.png" alt="logo" />
        </div>
        <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <div className="links">
            <li>How it works</li>
            <li>Who is eligible</li>
          </div>
          <div className="nav-cta">
            <Button
              textcolor="#217BF4"
              text="Join the waiting list now"
              bgcolor="transparent"
              outline="solid 2px #217BF4"
            />
            <Button
              textcolor="#217BF4"
              text="Join Us"
              bgcolor="transparent"
              outline="solid 2px #217BF4"
            />
          </div>
        </div>
        <div className="burger" onClick={()=> setIsMobile(!isMobile)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
