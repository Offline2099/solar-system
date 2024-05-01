import './HintContainer.scss';
import { HintContent, HintContentTypes, Definition, DataValue } from "../../types/ui";
import DataValueContainer from '../data-value-container/DataValueContainer';

const HintContainer = (data: HintContent) => {

  return (
    <div className={`hint-container ${data.type}`}>
      {data.content.map((item, itemIndex) => 
        <div key={itemIndex} className='hint-item'>
          {data.type === HintContentTypes.definitions && (item as Definition).explanation.map((p, pIndex) => 
            <p key={pIndex}>
              {!pIndex && <strong>{(item as Definition).term}</strong>}
              <span>{p}</span>
            </p>
          )}
          {data.type === HintContentTypes.values && 
            <DataValueContainer {...(item as DataValue)} /> 
          }
        </div>
      )}
    </div>
  )
}

export default HintContainer;