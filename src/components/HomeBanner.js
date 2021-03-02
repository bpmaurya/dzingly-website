import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const HomeBanner = () => {
  const renderTooltip = (props) => (
    <Tooltip {...props} >
      <div style={{padding:"9px"}} >
      Once your design palettes are finalized, your completed rendering will be
      delivered within two business days.
      </div>
    </Tooltip>
  );

  return (
    <div>
      <div className="home_banner" style={{ marginTop: "43px" }}>
        <div className="container">
          <div className="row d-flex mobile-flex">
            <div className="col-md-5 text-center big-screen mt-5">
              <h1
                className="banner-title"
                style={{
                  paddingBottom: "22px",
                  borderBottom: "2px solid #01adef",
                }}>
                Reimagine Your Home
              </h1>
              <p style={{padding:"12px",fontSize:"25px"}}>
                The simple and affordable approach to virtual exterior design.
                See ideas rendered on your home, from professional designers,
                within two business days.&nbsp;
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <a href="javascript:;" class="house-wrap-stage red-tooltip">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </a>
                </OverlayTrigger>
              </p>
              <a href="http://thereshome.com/get-started" className="blue-btn">
                Get Started
              </a>
              <a
                href="http://thereshome.com/get-started"
                className=" m blue-btn m-4">
                Get Started
              </a>
            </div>
            <div className="col-md-7 right-wrapper-home-banner-image">
              <div id="header-rotating-wrapper">
                <img
                  className="home-banner-item"
                  alt="Homeowner Banner One"
                  src="/public/img/homepage-header-3.png"
                  style={{ border: "none", display: "none" }}
                />
                <img
                  className="home-banner-item"
                  alt="Homeowner Banner Two"
                  src="/public/img/homepage-header-3.png"
                  style={{
                    border: "none",
                    display: "block",
                    opacity: "0.00198879",
                  }}
                />
                <img
                  className="home-banner-item"
                  alt="image"
                  src="img/dzinly-banner.gif"
                  style={{
                    border: "none",
                    display: "block",
                    opacity: "0.998011",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
