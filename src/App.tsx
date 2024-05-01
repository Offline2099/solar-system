import './App.scss';
import { System } from './data/system';
import { SystemPartData } from './types/ui';
import PageSection from './components/page-section/PageSection';

function App() {

  const sections: SystemPartData[] = System.map((part, i) => (
    {...part, id: i + 1, collapsed: true}
  ));

  return (
    <div className='App'>
      <header>
        <h1>Solar System</h1>
      </header>
      <div className='content-area'>
        {sections.map(section => 
          <PageSection key={section.id} {...section} />
        )}
      </div>
      <footer>
        <div className='footer-text'>
          <div className='footer-text-line'> 
            <span>Made with</span>
            <img 
              className='footer-text-icon'
              src='assets/img/icons/react-logo.png'
              alt='' />
            <span>React</span>
          </div>
          <div className='footer-text-line'>
            <a href='https://github.com/Offline2099/solar-system' target='_blank' rel='noreferrer'>
              <span>View repository</span>
              <img 
                className='footer-text-link-icon'
                src='assets/img/icons/external-link.png'
                alt='' />
            </a>
          </div>
          <div className='footer-text-line'>
            <a href='https://offline2099.github.io' target='_blank' rel='noreferrer'>
              <span>View other cool stuff</span>
              <img 
                className='footer-text-link-icon'
                src='assets/img/icons/external-link.png'
                alt='' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
