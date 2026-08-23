import { useEffect, useState } from 'react';
import type { SystemPart } from './types/data/system-part.interface';
import PageSection from './components/01-page-section/PageSection';
import Footer from './components/footer/Footer';
import { dataURL, iconURL } from './utils/url';
import './App.scss';

function App() {
  const [system, setSystem] = useState<SystemPart[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataURL('system'));
        if (!response.ok) {
          throw new Error('Failed to load data.');
        }
        const jsonData: SystemPart[] = await response.json();
        setSystem(jsonData);
      } catch (err: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Solar System</h1>
      </header>
      <main>
        {isLoading && <img className="spinner" src={iconURL('spinner')} alt="" />}
        {isError && <>Error: unable to load data. Try to refresh the page.</>}
        {system &&
          system.map((part, index) => <PageSection key={index} {...{ ...part, id: index + 1 }} />)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
