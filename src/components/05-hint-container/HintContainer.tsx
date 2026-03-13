import './HintContainer.scss';
import DataValueContainer from '../04-data-value-container/DataValueContainer';
import { Hint } from '../../types/ui/hint.interface';
import { HintType } from '../../constants/ui/hint-type.enum';
import { DataValue } from '../../types/ui/data-value.interface';
import { Definition } from '../../types/ui/definition.interface';

const HINT_CLASS: Record<HintType, string> = {
  [HintType.definitions]: 'definitions',
  [HintType.values]: 'values'
};

const HintContainer = (data: Hint) => {
  return (
    <div className={`hint-container ${HINT_CLASS[data.type]}`}>
      {data.content.map((item, itemIndex) => 
        <div key={itemIndex} className='hint-item'>
          {data.type === HintType.definitions && 
            (item as Definition).explanation.map((p, pIndex) => 
              <p key={pIndex}>
                {!pIndex && <strong>{(item as Definition).term}</strong>}
                <span>{p}</span>
              </p>
          )}
          {data.type === HintType.values && 
            <DataValueContainer {...(item as DataValue)} /> 
          }
        </div>
      )}
    </div>
  )
}

export default HintContainer;