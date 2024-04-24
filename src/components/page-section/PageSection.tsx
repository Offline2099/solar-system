import './PageSection.scss';

import { useState } from "react";

import { SystemPartTypes, CelestialObjectTypes, CelestialObject, Star, Planet } from '../../types/data';
import { PageSectionData } from "../../types/ui";

import CelestialObjectContainer from '../celestial-object-container/CelestialObjectContainer';

const PageSection = (section: PageSectionData) => {

  let [collapsed, setCollapsed] = useState<boolean>(section.collapsed);

  const togglePageSection = (): void => {
    setCollapsed(!collapsed);
  }

  const celestialObject = (type: `${CelestialObjectTypes}`, item: Star | Planet ): CelestialObject => {
    return {type: type, body: item}
  }

  return (
    <div className={`page-section${collapsed ? ' collapsed' : ''}`}>
      <div
        className='page-section-header'
        onClick={() => togglePageSection()}>
          <h2>{section.name}</h2>
          <span className='chevron'>&#10094;</span>
      </div>
      <div className='page-section-body'>
        {section.type == SystemPartTypes.star &&
          <CelestialObjectContainer {...celestialObject(CelestialObjectTypes.star, section.content as Star)} />
        }
        {section.type == SystemPartTypes.planets && Array.isArray(section.content) && section.content.map((item, index) => 
          <CelestialObjectContainer key={index} {...celestialObject(CelestialObjectTypes.planet, item as Planet)} />
        )}
      </div>
    </div>
  );
}

export default PageSection;