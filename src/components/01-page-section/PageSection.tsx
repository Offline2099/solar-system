import { SystemPartType } from '../../constants/system-part-type';
import { CelestialEntityType } from '../../constants/celestial-entity-type';
import type { SystemPartData } from '../../types/ui/system-part-data.interface';
import type { CelestialEntityData } from '../../types/ui/celestial-entity-data.interface';
import type { Star } from '../../types/data/star.interface';
import type { Planet } from '../../types/data/planet.interface';
import type { Region } from '../../types/data/region.interface';
import Collapsible from '../00-collapsible/Collapsible';
import CelestialEntityContainer from '../02-celestial-entity-container/CelestialEntityContainer';
import './PageSection.scss';

const PageSection = (section: SystemPartData) => {
  const content = (): CelestialEntityData[] => {
    switch (section.type) {
      case SystemPartType.star:
        return [{ type: CelestialEntityType.star, entity: section.content as Star }];
      case SystemPartType.planetGroup:
        return (section.content as Planet[]).map(planet => ({
          type: CelestialEntityType.planet,
          entity: planet
        }));
      case SystemPartType.region:
        return [{ type: CelestialEntityType.region, entity: section.content as Region }];
    }
  };
  return (
    <Collapsible prefix={section.id} header={section.name} className="page-section">
      {content().map((entity, index) => (
        <CelestialEntityContainer key={index} {...entity} />
      ))}
    </Collapsible>
  );
};

export default PageSection;
