import React from "react";

const Works = () => {
  return (
    <>
      <div className="work-wrapper">
        <div className="section-header">
          <p>What's MastoCred?</p>
          <h2>How it Works!</h2>
        </div>
        <div className="section-body">
          <div className="left">
            <div className="step">
              <img src="./images/step1.png" alt="step1" />
              <div className="step-context">
                <h4>Step 1</h4>
                <p>Ensure you belong to one of our accredited association</p>
              </div>
            </div>
            <div className="step">
              <img src="./images/step2.png" alt="step2" />
              <div className="step-context">
                <h4>Step 2</h4>
                <p>Signup on the MastoCred platform</p>
              </div>
            </div>
            <div className="step">
              <img src="./images/step3.png" alt="step3" />
              <div className="step-context">
                <h4>Step 3</h4>
                <p>Apply for a Loan</p>
              </div>
            </div>
            <div className="step">
              <img src="./images/step4.png" alt="step4" />
              <div className="step-context">
                <h4>Step 4</h4>
                <p>Application is reviewed and funds disbursed</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="./images/image 304.png" alt="man with phone" />
            <div className="img-col">
                <img src="./images/image 303.png" alt="" />
                <img src="./images/image 302.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
