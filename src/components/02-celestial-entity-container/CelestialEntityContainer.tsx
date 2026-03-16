import './CelestialEntityContainer.scss';
import { CelestialEntityType } from '../../constants/data/celestial-entity-type.enum';
import { CelestialEntityData } from '../../types/ui/celestial-entity-data.interface';
import { Planet } from '../../types/data/planet.interface';
import { Region } from '../../types/data/region.interface';
import Collapsible from '../00-collapsible/Collapsible';
import CelestialObjectDataContainer from '../03-celestial-object-data-container/CelestialObjectDataContainer';
import ImageContainer from '../06-image-container/ImageContainer';

const CelestialEntityContainer = (data: CelestialEntityData) => {
  const isHeadlessContainer: boolean = 
    data.type === CelestialEntityType.star || data.type === CelestialEntityType.region;
  const content = (): CelestialEntityData[] => {
    switch (data.type) {
      case CelestialEntityType.region:
        return (data.entity as Region).notableObjects.map(object => 
          ({ type: CelestialEntityType.notable, entity: object })
        );
      case CelestialEntityType.planet:
        return (data.entity as Planet).moons.map(moon => 
          ({ type: CelestialEntityType.moon, entity: moon })
        );
      default:
        return [];
    }
  }
  return (
    <Collapsible className='entity-container' header={data.entity.name} isHeadless={isHeadlessContainer} headerLevel={3}>
      <div className='entity-info'>
        <div className='entity-description'>
          {data.entity.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <ImageContainer type={data.type} name={data.entity.name} />
      </div>
      {data.type !== CelestialEntityType.region && <CelestialObjectDataContainer {...data} />}
      {content().map((object, index) => <CelestialEntityContainer key={index} {...object} />)}
    </Collapsible>
  );
}

export default CelestialEntityContainer;