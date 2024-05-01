import './DataValueContainer.scss';
import { DataValue } from '../../types/ui';
import { NumberRange, ValueParts } from '../../types/utility';
import { formatNumericValue } from '../../services/utility';

const DataValueContainer = (data: DataValue) => {

  const range: boolean = (typeof data.value !== 'number');

  let v: string = ''
  let hasExp: boolean = false;
  let vWithExp!: ValueParts;

  let vMin: string = ''
  let minHasExp: boolean = false;
  let minWithExp!: ValueParts;

  let vMax: string = ''
  let maxHasExp: boolean = false;
  let maxWithExp!: ValueParts;

  const getValueParts = (value: string): ValueParts => {
    const arr: string[] = value.split('e');
    return {n: arr[0], e: arr[1]}
  }

  if (!range) {
    v = formatNumericValue(data.value as number);
    if (v.includes('e')) {
      hasExp = true;
      vWithExp = getValueParts(v);
    }
  }
  else {
    vMin = formatNumericValue((data.value as NumberRange).min);
    vMax = formatNumericValue((data.value as NumberRange).max);
    if (vMin.includes('e')) {
      minHasExp = true;
      minWithExp = getValueParts(vMin);
    }
    if (vMax.includes('e')) {
      maxHasExp = true;
      maxWithExp = getValueParts(vMax);
    }
  }

  return (
    <div className='data-value-container'>
      <span className={`data-value-container-value${data.unit.noSpace ? ' no-space' : ''}`}>
        {!range && (hasExp ? <>{vWithExp.n}<sup>{vWithExp.e}</sup></> : v)}
        {range && 
          <>
          {(minHasExp ? <>{minWithExp.n}<sup>{minWithExp.e}</sup></> : vMin)}
          {` - `}
          {(maxHasExp ? <>{maxWithExp.n}<sup>{maxWithExp.e}</sup></> : vMax)}
          </>
        }
      </span>
      <span>
        {(data.value !== 1 && data.unit.plural ? data.unit.plural : data.unit.single).map((u, i) => 
          u.sup ? <sup key={i}>{u.s}</sup> : u.sub ? <sub key={i}>{u.s}</sub> : u.s
        )}
      </span>
    </div>
  )
}

export default DataValueContainer;