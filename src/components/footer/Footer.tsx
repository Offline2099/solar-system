import { URL_REPOSITORY, URL_OTHER_PROJECTS } from '../../constants/urls';
import { iconURL } from '../../utils/url';
import './Footer.scss';

interface ExternalLinkProps {
  url: string;
  text: string;
}

const ExternalLink = ({ url, text }: ExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <span>{text}</span>
      <img className="footer-text-link-icon" src={iconURL('external-link')} alt="" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <div className="footer-text-line">
          <span>Made with</span>
          <img className="footer-text-icon" src={iconURL('react-logo')} alt="" />
          <span>React</span>
        </div>
        <div className="footer-text-line">
          <ExternalLink url={URL_REPOSITORY} text="View repository" />
        </div>
        <div className="footer-text-line">
          <ExternalLink url={URL_OTHER_PROJECTS} text="View other cool stuff" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
