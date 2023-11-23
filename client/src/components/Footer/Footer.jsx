import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import creditcardLogo from '../../assets/creditcard-logo.png';
import log2 from '../../assets/log2.png';
library.add(faFacebook, faTwitter, faInstagram);
const Footer = () => {
  return (
    <div className="footer-2">
      <div className="bg" />
      <div className="bg1" />
      <div className="copyright">
        <div className="copyright-child" />
        <div className="copyright-terms">
          <div className="tripgo-all-rights">
            © 2022 Tripgo All Rights Reserved.
          </div>
        </div>
        <img className="creditcard-logo-1-icon" alt="" src={creditcardLogo} />
      </div>
      <div className="widget-4">
        <div className="contact-info">Contact Info</div>
        <div className="west-orchard-street">
          455 West Orchard Street Kings Mountain, NC 280867
        </div>
        <div className="mail">
          <div className="examplegmailcom">example@gmail.com</div>
          <FontAwesomeIcon
            className="envelope-icon orange-icon"
            icon={faEnvelope}
          />
        </div>
        <div className="call">
          <div className="div">+088 (006) 992-99-10</div>
          <FontAwesomeIcon className="call-icon orange-icon" icon={faPhone} />
        </div>
      </div>
      <div className="widget-3">
        <div className="about-us">About Us</div>
        <div className="footer-list">
          <div className="tripgo-all-rights">Our Story</div>
          <div className="travel-blog">{`Travel Blog & Tips`}</div>
          <div className="working-with-us">Working With Us</div>
          <div className="be-our-partner">Be Our Partner</div>
        </div>
      </div>
      <div className="widget-2">
        <div className="support">Support</div>
        <div className="footer-list1">
          <div className="tripgo-all-rights">Customer Support</div>
          <div className="privacy-policy">{`Privacy & Policy`}</div>
          <div className="contact-channels">Contact Channels</div>
        </div>
      </div>
      <div className="widget-1">
        <div className="there-are-many">
          There are many variations of passages of Lorem the Ipsum available but
          it is the majority of suffered that a alteration in that some dummy
          text.
        </div>
        <div className="calque1Icon">
          <img src={log2} alt="" />
        </div>
        <div className="social-icon">
          <FontAwesomeIcon className="twitte-icon" icon={faTwitter} />
          <FontAwesomeIcon className="twitte-icon" icon={faFacebook} />
          <FontAwesomeIcon className="twitte-icon" icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
