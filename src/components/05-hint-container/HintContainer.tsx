import DataValueContainer from '../04-data-value-container/DataValueContainer';
import { HintType } from '../../constants/hint-type';
import type { Hint } from '../../types/ui/hint.interface';
import type { DataValue } from '../../types/ui/data-value.interface';
import type { Definition } from '../../types/ui/definition.interface';
import './HintContainer.scss';

const HINT_CLASS: Record<HintType, string> = {
  [HintType.definitions]: 'definitions',
  [HintType.values]: 'values'
};

const HintContainer = (data: Hint) => {
  return (
    <div className={`hint-container ${HINT_CLASS[data.type]}`}>
      {data.content.map((item, itemIndex) => (
        <div key={itemIndex} className="hint-item">
          {data.type === HintType.definitions &&
            (item as Definition).explanation.map((p, pIndex) => (
              <p key={pIndex}>
                {!pIndex && <strong>{(item as Definition).term}</strong>}
                <span>{p}</span>
              </p>
            ))}
          {data.type === HintType.values && <DataValueContainer {...(item as DataValue)} />}
        </div>
      ))}
    </div>
  );
};

export default HintContainer;
