import './CelestialObjectContainer.scss';

import { CelestialObject } from "../../types/data";

import CelestialObjectData from '../celestial-object-data/CelestialObjectData';

const CelestialObjectContainer = (item: CelestialObject) => {
  return (
    <div className='celestial-object-container'>
      <h3 className='celestial-object-container-header'>{item.body.name}</h3>
      <CelestialObjectData {...item} />
    </div>
  );
}

export default CelestialObjectContainer;