import React from "react";
import ButtonBig from "./ButtonBig";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-context">
        <h1>Instant Loan for your Business</h1>
        <h2>"...not just another loan"</h2>
        <p>
          Mastocred provides access to instant low rate loans for SMEs and
          individuals who are actively interested in growing their businesses.
          MastoCred is a solution to your business financing challenges through
          quick loan disbursements and collateral-free loans.
        </p>
        <div className="cta">
          <ButtonBig
            btnBig="btnBig"
            textcolor="#fff"
            text="Join the waitlist now"
            bgcolor="#94C146"
            outline="none"
          />
        </div>
      </div>

      <div className="hero-img">
        <img src="./images/image 305.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
