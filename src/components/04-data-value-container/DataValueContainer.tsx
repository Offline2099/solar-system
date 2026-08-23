import type { DataValue } from '../../types/ui/data-value.interface';
import type { NumericValue } from '../../types/ui/numeric-value.interface';
import type { Range } from '../../types/general/range.interface';
import { formatValue } from '../../utils/format-value';
import { constructClassName } from '../../utils/class';
import './DataValueContainer.scss';

const Value = ({ mantissa, exponent }: NumericValue) => {
  return (
    <>
      {exponent ? (
        <>
          {mantissa + ' \u22C5 10'}
          <sup>{exponent}</sup>
        </>
      ) : (
        mantissa
      )}
    </>
  );
};

const DataValueContainer = (data: DataValue) => {
  const isRange = typeof data.value !== 'number';
  const className = constructClassName([
    'data-value-container-value',
    data.unit.noSpace ? 'no-space' : ''
  ]);
  return (
    <div className="data-value-container">
      <span className={className}>
        {isRange ? (
          <>
            <Value {...formatValue((data.value as Range).min)} />
            {` - `}
            <Value {...formatValue((data.value as Range).max)} />
          </>
        ) : (
          <Value {...formatValue(data.value as number)} />
        )}
      </span>
      <span>
        {(data.value !== 1 && data.unit.plural ? data.unit.plural : data.unit.single).map(
          (part, index) =>
            part.sup ? (
              <sup key={index}>{part.s}</sup>
            ) : part.sub ? (
              <sub key={index}>{part.s}</sub>
            ) : (
              part.s
            )
        )}
      </span>
    </div>
  );
};

export default DataValueContainer;
