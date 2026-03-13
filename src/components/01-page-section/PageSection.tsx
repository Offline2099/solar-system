import './PageSection.scss';
import { SystemPartType } from '../../constants/data/system-part-type.enum';
import { CelestialEntityType } from '../../constants/data/celestial-entity-type.enum';
import { SystemPartData } from '../../types/ui/system-part-data.interface';
import { CelestialEntityData } from '../../types/ui/celestial-entity-data.interface';
import { Star } from '../../types/data/star.interface';
import { Planet } from '../../types/data/planet.interface';
import { Region } from '../../types/data/region.interface';
import Collapsible from '../00-collapsible/Collapsible';
import CelestialEntityContainer from '../02-celestial-entity-container/CelestialEntityContainer';

const PageSection = (section: SystemPartData) => {
  const content = (): CelestialEntityData[] => {
    switch (section.type) {
      case SystemPartType.star:
        return [{ type: CelestialEntityType.star, entity: section.content as Star }];
      case SystemPartType.planets:
        return (section.content as Planet[])
          .map(planet => ({ type: CelestialEntityType.planet, entity: planet }));
      case SystemPartType.region:
        return [{ type: CelestialEntityType.region, entity: section.content as Region }];
    }
  }
  return (
    <Collapsible prefix={section.id} header={section.name} className='page-section' >
      {content().map((entity, index) => <CelestialEntityContainer key={index} {...entity} />)}
    </Collapsible>
  );
}

export default PageSection;