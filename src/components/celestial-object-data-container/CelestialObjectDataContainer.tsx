import './CelestialObjectDataContainer.scss';
import { CelestialObjectTypes, CelestialObject, Planet, Moon, Star, NotableObject } from "../../types/data";
import { fillStarDataTemplate } from "../../data/template-star";
import { fillPlanetDataTemplate } from "../../data/template-planet";
import { fillMoonDataTemplate } from "../../data/template-moon";
import { fillNotableObjectDataTemplate } from '../../data/template-notable-object';
import { CelestialObjectDataSection, HintContentTypes } from '../../types/ui';
import DataValueContainer from '../data-value-container/DataValueContainer';
import HintContainer from '../hint-container/HintContainer';

const CelestialObjectData = (item: CelestialObject) => {

  const objectData = (): CelestialObjectDataSection[] => {
    if (item.type === CelestialObjectTypes.star) 
      return fillStarDataTemplate(item.body as Star);
    if (item.type === CelestialObjectTypes.planet) 
      return fillPlanetDataTemplate(item.body as Planet);
    if (item.type === CelestialObjectTypes.moon) 
      return fillMoonDataTemplate(item.body as Moon);
    if (item.type === CelestialObjectTypes.notable) 
      return fillNotableObjectDataTemplate(item.body as NotableObject);
    return [];
  }

  return (
    <div className={`data-container ${item.type}`}>
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
                      <div className='data-prop-name'>
                        {row.name}
                        {row.hint && <HintContainer {...{type: HintContentTypes.definitions, content: row.hint}} />}
                      </div>
                      <div className='data-value'>
                        <DataValueContainer {...row.value} />
                        {row.altValues && <HintContainer {...{type: HintContentTypes.values, content: row.altValues}} />}
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
