import './CelestialObjectContainer.scss';
import { useState } from 'react';
import { CelestialObjectTypes, Region, NotableObject } from '../../types/data';
import { CelestialObjectData } from "../../types/ui";
import { nameToURL } from '../../services/utility';
import CelestialObjectDataContainer from '../celestial-object-data-container/CelestialObjectDataContainer';

const CelestialObjectContainer = (item: CelestialObjectData) => {

  let [collapsed, setCollapsed] = useState<boolean>(item.collapsed);

  const toggleBlock = (): void => {
    setCollapsed(!collapsed);
  }

  const secondaryContentArray = (): CelestialObjectData[] => {

    if (item.type === CelestialObjectTypes.region)
      return (item.body as Region).notableObjects.map((object, index) => (
        {id: index + 1, collapsed: true, type: CelestialObjectTypes.notable, body: object as NotableObject}
      ));

    return [];
  }

  return (
    <div className={`celestial-object-container${collapsed ? ' collapsed' : ''}`}>
      <div
        className='celestial-object-container-header'
        onClick={() => toggleBlock()}>
        <h3>{item.body.name}</h3>
        <span className='celestial-object-container-chevron'>&#10094;</span>
      </div>
      <div className='celestial-object-container-body'>
        <div className='celestial-object-info'>
          <div className='celestial-object-description'>
            {item.body.description.map((p, i) => 
              <p key={i}>{p}</p>
            )}
          </div>
          <div className={`celestial-object-image ${item.type}`}>
            <img 
              src={`assets/img/${nameToURL(item.body.name)}.jpg`}
              alt={item.body.name} />
          </div>
        </div>
        {(item.type === CelestialObjectTypes.star || 
          item.type === CelestialObjectTypes.planet || 
          item.type === CelestialObjectTypes.notable) &&
          <CelestialObjectDataContainer {...item} />
        }
        {secondaryContentArray().map((object, index) => 
          <CelestialObjectContainer key={index} {...object} />
        )}
      </div>
    </div>
  );
}

export default CelestialObjectContainer;