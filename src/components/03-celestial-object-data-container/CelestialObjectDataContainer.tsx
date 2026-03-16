import './CelestialObjectDataContainer.scss';
import { HintType } from '../../constants/ui/hint-type.enum';
import { ENTITY_TYPE_NAME } from '../../constants/data/entity-type-name';
import { CelestialEntityData } from '../../types/ui/celestial-entity-data.interface';
import { objectData } from '../../services/celestial-object';
import DataValueContainer from '../04-data-value-container/DataValueContainer';
import HintContainer from '../05-hint-container/HintContainer';

const CelestialObjectData = (data: CelestialEntityData) => {
  return (
    <div className={`data-container ${ENTITY_TYPE_NAME[data.type]}`}>
      {objectData(data).map((section, sectionIndex) => 
        <div key={sectionIndex} className='data-section'>
          <div className='data-section-header'>{section.name}</div>
          <div className='data-section-body'>
            {section.groups.map((group, groupIndex) => 
              <div key={groupIndex} className='data-section-group'>
                {group.name !== '' && <div className='data-section-group-name'>{group.name}</div>}
                <div className='data-section-group-body'>
                  {group.rows.map((row, rowIndex) => 
                    <div key={rowIndex} className='data-section-row'>
                      <div className='data-prop-name'>
                        {row.name}
                        {row.hint && 
                          <HintContainer {...{ type: HintType.definitions, content: row.hint }} />
                        }
                      </div>
                      <div className='data-value'>
                        <DataValueContainer {...row.value} />
                        {row.altValues && 
                          <HintContainer {...{ type: HintType.values, content: row.altValues }} />
                        }
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
