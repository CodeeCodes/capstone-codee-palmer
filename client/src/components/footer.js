import React from "react";
import linkedInSvg from "../assets/svg/linkedin-logo.svg";
import facebookSvg from "../assets/svg/facebook-logo.svg";
import telegramSvg from "../assets/svg/telegram-logo.svg";
import instagramSvg from "../assets/svg/instagram-logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__social-div">
        <h6 className="footer__social-heading">Created by Codee</h6>
        <a
          href="https://www.linkedin.com/in/codeepalmer/"
          className="footer__social-icons"
        >
          <img
            src={linkedInSvg}
            alt="linkedin"
            className="footer__social-icons"
          />
        </a>
        <a
          href="https://www.facebook.com/cjpalmer1"
          className="footer__social-icons"
        >
          <img
            src={facebookSvg}
            alt="facebook"
            className="footer__social-icons"
          />
        </a>
        <a
          href="https://www.instagram.com/codeejpalmer/"
          className="footer__social-icons"
        >
          <img
            src={instagramSvg}
            alt="instagram"
            className="footer__social-icons"
          />
        </a>
      </div>
    </div>
  );
}
