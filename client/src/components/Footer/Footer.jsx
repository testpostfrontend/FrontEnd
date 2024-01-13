

import './Footer.css';
import creditcardLogo from '../../assets/creditcard-logo.png';
import log2 from '../../assets/log2.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <img
              className="headin5_amrc col_white_amrc pt2"
              src={log2}
              alt="blog"
            />

            {/* <!--headin5_amrc--> */}
            <p className="mb10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>

            <div className="social-icons">
              <p>
                <i className="fab fa-instagram"></i>
              </p>
              <p>
                <i className="fab fa-twitter"></i>
              </p>
              <p>
                <i className="fab fa-facebook"></i>
              </p>
            </div>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Support</h5>
            {/* <!--headin5_amrc--> */}
            <ul className="footer_ul_amrc">
              <li>
                <a href="">Customer Support</a>
              </li>
              <li>
                <a href="">Privacy & Policy</a>
              </li>
              <li>
                <a href="">Contact Channels</a>
              </li>
            </ul>
            {/* <!--footer_ul_amrc ends here--> */}
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">About Us</h5>
            {/* <!--headin5_amrc--> */}
            <ul className="footer_ul_amrc">
              
              <li>
                <a href="">Travel Blog & Tips</a>
              </li>
              <li>
                <a href="">Working With Us</a>
              </li>
              <li>
                <a href="">Be Our Partner</a>
              </li>
            </ul>
            {/* <!--footer_ul_amrc ends here--> */}
          </div>

          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Contact Info</h5>
            {/* <!--headin5_amrc ends here--> */}
            <p className="mb10">
              455 West Orchard Street Kings Mountain, NC 280867
            </p>

            <ul className="footer_ul2_amrc">
              <li>
                <a href="#">
                  <i className="fa fa-phone"style={{ color: 'rgba(255, 94, 85, 1)' }}></i> +088 (006) 992-99-10{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa fa-envelope"style={{ color: 'rgba(255, 94, 85, 1)' }}></i> example@gmail.com{' '}
                </a>
              </li>
            </ul>
            {/* <!--footer_ul2_amrc ends here--> */}
          </div>
        </div>
      </div>

      <div className="container">
        {/* <!--foote_bottom_ul_amrc ends here--> */}
        <p className="text-center">
          © 2024 AymenSaidani All Rights Reserved .{/* <a href="#">SuperHost</a> */}
        </p>

        <ul className="credit_footer_ul">
          <img className="" src={creditcardLogo} alt="credit card" />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
