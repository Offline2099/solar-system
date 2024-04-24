import './CelestialObjectContainer.scss';

import { CelestialObject } from "../../types/data";

import CelestialObjectData from '../celestial-object-data/CelestialObjectData';

const CelestialObjectContainer = (item: CelestialObject) => {
  return (
    <div className='celestial-object-container'>
      <h3 className='celestial-object-container-header'>{item.body.name}</h3>
      <div className='celestial-object-info'>
        <div className='celestial-object-description'>
          {item.body.description.map((p, i) => 
            <p key={i}>{p}</p>
          )}
        </div>
        <img className='celestial-object-image' src={`/assets/img/${item.body.name.toLowerCase()}.jpg`} />
      </div>
      <CelestialObjectData {...item} />
    </div>
  );
}

export default CelestialObjectContainer;