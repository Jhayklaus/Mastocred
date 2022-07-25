import React from "react";
import ButtonBig from "./ButtonBig";
import { FaArrowRight } from "react-icons/fa";

const Eligible = () => {
  return (
    <div className="eligibility-wrapper">
      <div className="section-title">
        <h1>Who is Eligible?</h1>
      </div>

      <div className="eligible-context">
        <div className="eli-left ">
          <h2>Small And Medium Scale Business Owners(SMEs)</h2>
          <p style={{ color: "#656464" }}>
            Running a business in Nigeria can be daunting, it comes with various
            challenges which could be a stumbling block to business growth. At
            MastoCred we provide you with finance needed so that you can focus
            on what matters.
          </p>
          <ButtonBig
            icon={<FaArrowRight />}
            bgcolor="#94C146"
            textcolor="#fff"
            text={`join the watchlist now`}
            outline="none"
          />
        </div>

        <div className="eli-right child-2">
          <h2>
            Persons who are also in need of loan for basic needs (Individual)
          </h2>
          <p style={{ color: "#656464" }}>
            Also as an individual you can also have access to our instant low
            rate as long as you are a registered member with one of our
            accredited associations. Join our waitlist so that you get notified
            once we go live.
          </p>
          <ButtonBig
            icon={<FaArrowRight />}
            bgcolor="#94C146"
            textcolor="#fff"
            text={`join the watchlist now   `}
            outline="none"
          />
        </div>
      </div>
    </div>
  );
};

export default Eligible;
