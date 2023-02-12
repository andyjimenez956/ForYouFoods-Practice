import "./Footer.css";
import ForFoodsLogo from "../assets/ForFoodsLogo.svg";

const footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="upper_left">
          <a className="logo_home_link" href="">
            <img src={ForFoodsLogo} alt="logo alternative" />
          </a>
        </div>
        <div className="upper_center">
          <form className="subscribe_form">
            <h3>Subscribe to Our Newsletter</h3>
            <div className="input_box">
              <input type="text" placeholder="Enter Email..."></input>
              <button>Subscribe</button>
            </div>
          </form>
        </div>
        <div className="upper_right">
          <a className="logo_home_link" href="">
            <img src={ForFoodsLogo} alt="logo alternative" />
          </a>
        </div>
      </div>

      <div className="lower">
        <div className="lower_footer_links_container">
          <form className="lower_footer_links">
            <a href="">Contact Us</a>
            <a href="">FAQ</a>
            <a href="">Terms & Conditions</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default footer;
