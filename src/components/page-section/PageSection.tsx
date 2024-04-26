import './PageSection.scss';
import { useState } from "react";
import { SystemPartTypes, CelestialObjectTypes, CelestialObject, Star, Planet, Region } from '../../types/data';
import { SystemPartData, CelestialObjectData } from "../../types/ui";
import CelestialObjectContainer from '../celestial-object-container/CelestialObjectContainer';

const PageSection = (section: SystemPartData) => {

  let [collapsed, setCollapsed] = useState<boolean>(section.collapsed);

  const togglePageSection = (): void => {
    setCollapsed(!collapsed);
  }

  const wrapData = (id: number, collapsed: boolean, obj: CelestialObject): CelestialObjectData => {
    return {id: id, collapsed: collapsed, type: obj.type, body: obj.body}
  }

  return (
    <div className={`page-section${collapsed ? ' collapsed' : ''}`}>
      <div
        className='page-section-header'
        onClick={() => togglePageSection()}>
          <h2>{section.id}. {section.name}</h2>
          <span className='page-section-chevron'>&#10094;</span>
      </div>
      <div className='page-section-body'>
        {section.type == SystemPartTypes.star &&
          <CelestialObjectContainer 
            {...wrapData(1, false, {type: CelestialObjectTypes.star, body: section.content as Star})} />
        }
        {section.type == SystemPartTypes.planets && Array.isArray(section.content) && 
          section.content.map((item, index) => 
            <CelestialObjectContainer 
              key={index} 
              {...wrapData(index + 1, true, {type: CelestialObjectTypes.planet, body: item as Planet})} />
        )}
        {section.type == SystemPartTypes.region &&
          <CelestialObjectContainer 
            {...wrapData(1, false, {type: CelestialObjectTypes.region, body: section.content as Region})} />
        }
      </div>
    </div>
  );
}

export default PageSection;