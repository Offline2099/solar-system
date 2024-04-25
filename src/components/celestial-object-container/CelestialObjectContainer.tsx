import './CelestialObjectContainer.scss';
import { useState } from 'react';
import { CelestialObjectData } from "../../types/ui";
import CelestialObjectDataContainer from '../celestial-object-data/CelestialObjectDataContainer';

const CelestialObjectContainer = (item: CelestialObjectData) => {

  let [collapsed, setCollapsed] = useState<boolean>(item.collapsed);

  const toggleBlock = (): void => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={`celestial-object-container${collapsed ? ' collapsed' : ''}`}>
      <div
        className='celestial-object-container-header'
        onClick={() => toggleBlock()}>
        <h3>{item.body.name}</h3>
        <span className='celestial-object-chevron'>&#10094;</span>
      </div>
      <div className='celestial-object-container-body'>
        <div className='celestial-object-info'>
          <div className='celestial-object-description'>
            {item.body.description.map((p, i) => 
              <p key={i}>{p}</p>
            )}
          </div>
          <div className='celestial-object-image'>
            <img src={`/assets/img/${item.body.name.toLowerCase()}.jpg`} />
          </div>
        </div>
        <CelestialObjectDataContainer {...item} />
      </div>
    </div>
  );
}

export default CelestialObjectContainer;