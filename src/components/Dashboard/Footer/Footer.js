import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <div className="logo-container footer-logo-img">
            <img
              className="logo"
              src="https://www.100xengineers.com/images/LOD-logo.svg"
              alt="logo"
            />
          </div>
          <div className="link-text pointer-cursor underline onhover-cyan">Youtube</div>
        </div>
        <div className="footer-sec">
            <div className="copy-rights">© 2023 100x Engineers</div>
            <div className="tc-container">
            <div className="link-text pointer-cursor underline onhover-cyan">Privacy Policy</div>
            <div className="link-text pointer-cursor underline onhover-cyan">Terms of Service</div>
            <div className="link-text pointer-cursor underline onhover-cyan">Cookie Setting</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
