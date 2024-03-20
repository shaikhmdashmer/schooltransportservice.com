import React, { useState } from "react";

function YourComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/Images/bg1.jpg",
    "/Images/bg2.jpg",
    "/Images/bg3.jpg",
    "/Images/bg2.jpg",
    "/Images/bg1.jpg",
  ];

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className="col-sm-6">
        {/* First Column with Background Image */}
        <div className=" pdgbtm0 mngbtm0">
          <div className="col-sm-10 col-sm-offset-1 ">
            <div
              className="img-responsive"
              id="backgroundImage"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 text-center">
        {/* Second Column with List */}
        <div className="pdgbtm0 mngbtm0">
          <div className="col-sm-12">
            <div className="mobrow">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <React.Fragment key={index}>
                  <div className="activelist">
                    <div
                      className="list-item-content d-flex align-items-center justify-content-center"
                      onClick={() => changeImage(index)}
                    >
                      <span>{num}</span>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="arrow">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div>
              <h4 className="media-headingmob">Easy Booking</h4>
              <p className="txttittlemob">
                Find a vehicle and book in a couple of taps by entering your
                pick-up and drop-off locations. You would also see the estimated
                trip fare
              </p>
            </div>

            <div className="img-responsive" id="backgroundImage"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
