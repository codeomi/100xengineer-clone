import React from "react";
import "./section9.css";

const Section9 = () => {
  return (
    <>
      <div className="section9-container  mobile-global-padding  section-seperator section-margin-top">
        <div className="heading-container margin-bottom ">
          <div className="heading-description text-size-small text-weight-light body-color">
            testimonials
          </div>
          <div className="heading h-2 text-size-large">Word on the street</div>
        </div>
        <div className="testimonial-container flex-center margin-top">
          <div className="flex-row">
            <div className="col-testimony-container ">
              <div className="col-testimony mobile-testimony-container testimony box-shadow-light">
                <div className="client-details">
                  <div className="img-container">
                    <img
                      className="testimonial-img"
                      src="https://www.100xengineers.com/images/Group-13.png"
                      alt=""
                    />
                  </div>
                  <div className="client-info">
                    <div className="text-size-small text-bold">
                      Sankhadeep Roy
                    </div>
                    <div className="text-size-small text-semi-bold">
                      Author, Nativebase
                    </div>
                  </div>
                </div>
                <div className="testimony-details text-size-small">
                  An amazing course to start building React applications, the
                  mentors are extremely great, they explain everything in
                  multiple ways and show us all the possible ways to work with
                  React. If you're thinking about taking your career to the next
                  level and learn something trendy, I really advise you in this
                  course.
                </div>
              </div>
            </div>
            <div className="row-testimony-container">
              <div className="row-testimony mobile-testimony-container  box-shadow-light">
                <div className="client-details">
                  <div className="img-container">
                    <img
                      className="testimonial-img"
                      src="https://www.100xengineers.com/images/Group-55.png"
                      alt=""
                    />
                  </div>
                  <div className="client-info">
                    <div className="text-size-small text-bold">
                      Pragati Singh
                    </div>
                    <div className="text-size-small text-semi-bold">
                      Engineer, JP Morgan Chase & Co.
                    </div>
                  </div>
                </div>
                <div className="testimony-details row-testimony-details text-size-small">
                  The mentors have expert-command over their skills as
                  developers. Being mentored by them has helped me up-upskill my
                  career - I got placed in JP Morgan after the training.
                </div>
              </div>
              <div className="row-testimony mobile-testimony-container  box-shadow-light">
                <div className="client-details">
                  <div className="img-container">
                    <img
                      className="testimonial-img"
                      src="https://www.100xengineers.com/images/Group-54.png"
                      alt=""
                    />
                  </div>
                  <div className="client-info">
                    <div className="text-size-small text-bold">Bhanvi Goel</div>
                    <div className="text-size-small text-semi-bold">
                      Software Developer, OYO
                    </div>
                  </div>
                </div>
                <div className="testimony-details row-testimony-details text-size-small">
                  I got a placement in OYO after taking a course with
                  100xEngineers. It was a very enriching experience and I got to
                  learn a lot and was very happy that I a placement after only
                  3-4 month of this journey in learning React.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section9;
