import './Footer.scss';
import { URL_REPOSITORY, URL_OTHER_PROJECTS } from '../../constants/urls';
import { iconURL } from '../../services/url';

interface ExternalLinkProps {
  url: string;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, text }) => {
  const externalLinkIcon: string = iconURL('external-link');
  return (
    <a href={url} target='_blank' rel='noreferer'>
      <span>{text}</span>
      <img className='footer-text-link-icon' src={externalLinkIcon} alt='' />
    </a>
  );
}

const Footer = () => {
  const logoIcon: string = iconURL('react-logo');  
  return (
    <footer>
      <div className='footer-text'>
        <div className='footer-text-line'> 
          <span>Made with</span>
          <img className='footer-text-icon' src={logoIcon} alt='' />
          <span>React</span>
        </div>
        <div className='footer-text-line'>
          <ExternalLink url={URL_REPOSITORY} text='View repository' />
        </div>
        <div className='footer-text-line'>
          <ExternalLink url={URL_OTHER_PROJECTS} text='View other cool stuff' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;