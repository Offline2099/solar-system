import './DataValueContainer.scss';
import { DataValue } from '../../types/ui/data-value.interface';
import { Range } from '../../types/general/range.interface';
import { constructClassName } from '../../services/utility';

interface NumericValue {
  mantissa: string;
  exponent: string;
}

const MAX_DIGITS_VISIBLE: number = 4;

const formatNumericValue = (n: number): NumericValue => {
  if (n < 1000) {
    const precision = MAX_DIGITS_VISIBLE - (n >= 1 ? Math.round(n).toString().length : 0);
    return {
      mantissa: `${Number(n.toFixed(precision))}`,
      exponent: ''
    };
  }
  if (n >= 1e6) {
    const [mantissa, exponent]: string[] = n.toExponential().split('e');
    return { 
      mantissa: `${Number(mantissa.slice(0, MAX_DIGITS_VISIBLE))}`,
      exponent: exponent.replace('+', '')
    };
  }
  return {
    mantissa: Math.round(n).toString()
      .split('').reverse().join('')
      .match(/.{1,3}/g)?.join('\u200a')
      .split('').reverse().join('') || '',
    exponent: ''
  };
}

const Value: React.FC<NumericValue> = ({ mantissa, exponent }) => {
  return (
    <>{exponent ? <>{mantissa + ' \u22C5 10'}<sup>{exponent}</sup></> : mantissa}</>
  );
}

const DataValueContainer = (data: DataValue) => {
  const isRange: boolean = (typeof data.value !== 'number');
  const className: string = 
    constructClassName(['data-value-container-value', data.unit.noSpace ? 'no-space' : ''])
  return (
    <div className='data-value-container'>
      <span className={className}>
        {isRange 
          ? <>
              <Value { ...formatNumericValue((data.value as Range).min)} />
              {` - `}
              <Value { ...formatNumericValue((data.value as Range).max)} />
            </>
          : <Value { ...formatNumericValue(data.value as number)} />
        }
      </span>
      <span>
        {(data.value !== 1 && data.unit.plural ? data.unit.plural : data.unit.single)
          .map((part, index) => part.sup 
            ? <sup key={index}>{part.s}</sup> 
            : part.sub 
              ? <sub key={index}>{part.s}</sub> 
              : part.s
          )
        }
      </span>
    </div>
  )
}

export default DataValueContainer;