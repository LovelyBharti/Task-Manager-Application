import React from "react";
import boyImg from './boyImg.gif'
const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center gx-0">
          <div className="col-md-6">
            <img src={boyImg} alt="loading..." height={600} />
          </div>
          <div className="col-md-6">
            <div className="brand-container">
              <h1 data-aos="slide-right">
                <b>Lovely Bharti</b>
              </h1>
              <p data-aos="slide-left">
                Frontend <b>Developer</b> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;