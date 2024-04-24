import './CelestialObjectData.scss'

import { CelestialObjectTypes, CelestialObject, Planet, Star } from "../../types/data";
import { StarDataTemplate } from "../../data/star";
import { PlanetDataTemplate } from "../../data/planet";
import { CelestialObjectDataSection } from '../../types/ui';

const CelestialObjectData = (item: CelestialObject) => {

  const objectData = (): CelestialObjectDataSection[] => {
    if (item.type == CelestialObjectTypes.star) return StarDataTemplate(item.body as Star);
    if (item.type == CelestialObjectTypes.planet) return PlanetDataTemplate(item.body as Planet);
    return [];
  } 

  return (
    <div className='data-container'>
      {objectData().map((section, sectionIndex) => 
        <div key={sectionIndex} className='data-section'>
          <div className='data-section-header'>{section.name}</div>
          <div className='data-section-body'>
            {section.groups.map((group, groupIndex) => 
              <div key={groupIndex} className='data-section-group'>
                {group.name !== '' && 
                  <div className='data-section-group-name'>{group.name}</div>
                }
                <div className='data-section-group-body'>
                  {group.rows.map((row, rowIndex) => 
                    <div key={rowIndex} className='data-section-row'>
                      <div className='data-prop-name'>{row.name}</div>
                      <div className='data-value'>
                        <span className='data-value-value'>
                          {typeof row.value === 'number' ? row.value : `${row.value.min} - ${row.value.max}`}
                        </span>
                        <span className='data-value-unit'>{row.unit}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>    
        </div>
      )}
    </div>
  );
}

export default CelestialObjectData;
