import { github, email, linkedin } from "../constants/links.js";
import "./Footer.scss";

const Footer = () => (
  <footer>
    <div>
      <p>
        &copy; {new Date().getFullYear()} Viola Xu. Made with React and Vite
      </p>
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={`mailto:${email}`}>Email</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
