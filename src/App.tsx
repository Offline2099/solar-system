import './App.scss';

import { System } from './data/system';
import { PageSectionData } from './types/ui';

import PageSection from './components/page-section/PageSection';

function App() {

  const sections: PageSectionData[] = System.map((part, i) => (
    {id: i, collapsed: true, name: part.name, type: part.type, content: part.content}
  ));

  return (
    <div className="App">

      <header>Solar System</header>

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
