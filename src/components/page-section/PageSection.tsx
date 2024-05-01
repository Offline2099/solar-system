import './PageSection.scss';
import { useState } from "react";
import { SystemPartTypes, CelestialObjectTypes, Star, Planet, Region } from '../../types/data';
import { SystemPartData, CelestialObjectData } from "../../types/ui";
import CelestialObjectContainer from '../celestial-object-container/CelestialObjectContainer';

const PageSection = (section: SystemPartData) => {

  let [collapsed, setCollapsed] = useState<boolean>(section.collapsed);

  const togglePageSection = (): void => {
    setCollapsed(!collapsed);
  }

  const contentArray = (): CelestialObjectData[] => {

    if (section.type === SystemPartTypes.star) 
      return [
        {id: 1, collapsed: false, type: CelestialObjectTypes.star, body: section.content as Star}
      ];

    if (section.type === SystemPartTypes.planets && Array.isArray(section.content)) 
      return section.content.map((item, index) => (
        {id: index + 1, collapsed: true, type: CelestialObjectTypes.planet, body: item as Planet}
      ));

    if (section.type === SystemPartTypes.region)
      return [
        {id: 1, collapsed: false, type: CelestialObjectTypes.region, body: section.content as Region}
      ];

    return [];
  }

  return (
    <div className={`page-section${collapsed ? ' collapsed' : ''}`}>
      <div
        className='page-section-header'
        onClick={() => togglePageSection()}>
          <h2>
            <span className='page-section-number'>{section.id}.</span>
            <span>{section.name}</span>
          </h2>
          <span className='page-section-chevron'>&#10094;</span>
      </div>
      <div className='page-section-body'>
        {contentArray().map((item, index) => 
          <CelestialObjectContainer key={index} {...item} />
        )}
      </div>
    </div>
  );
}

export default PageSection;