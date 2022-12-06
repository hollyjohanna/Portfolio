import {
  Telephone,
  Envelope,
  Send,
  Github,
  Linkedin,
  Instagram,
  CCircle,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div id="footer">
      <div id="upper-footer">
        <h2>Lets Talk!</h2>
        <div id="link-container">
          <div className="link-card">
            <Telephone />
            <h4>Phone Me</h4>
            <p>+64 27 388 0624</p>
          </div>
          <div className="link-card">
            <a
              href="mailto:hollyjohanna.robbins@gmail.com?subject=Hey! I'd like to hire you!"
              target="_blank"
              rel="noreferrer"
            >
              <Envelope />
            </a>
            <h4>Email Me</h4>
            <p>hollyjohanna.robbins@gmail.com</p>
          </div>
          <div className="link-card">
            <a
              href="https://www.instagram.com/holly_johanna/"
              target="_blank"
              rel="noreferrer"
            >
              <Send />
            </a>
            <h4>Follow Me</h4>
            <p>@_heyjohanna_</p>
          </div>
          <div id="socials-container">
            <a
              href="https://github.com/hollyjohanna"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/holliday-robbins-980b77166/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/holly_johanna/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div id="lower-footer">
        <p>
          Copyright HollidayRobbins 2022 <CCircle />
        </p>
      </div>
    </div>
  );
};

export default Footer;
