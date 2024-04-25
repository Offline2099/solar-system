import './App.scss';
import { System } from './data/system';
import { SystemPartData } from './types/ui';
import PageSection from './components/page-section/PageSection';

function App() {

  const sections: SystemPartData[] = System.map((part, i) => (
    {...part, id: i + 1, collapsed: true}
  ));

  return (
    <div className="App">
      <header>
        <h1>Solar System</h1>
      </header>
      <div className='content-area'>
        {sections.map(section => 
          <PageSection key={section.id} {...section} />
        )}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
