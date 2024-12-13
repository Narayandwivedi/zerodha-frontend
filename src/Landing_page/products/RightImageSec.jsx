import React from "react";

function RightSection({imgUrl, heading, description, learnMore }) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-4 p-5 mt-5 pt-5">
          <h1 className="mb-4">{heading}</h1>
          <p style={{lineHeight:"1.9"}} >{description}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;