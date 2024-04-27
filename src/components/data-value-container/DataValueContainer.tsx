import './DataValueContainer.scss';
import { DataValue } from '../../types/ui';

const DataValueContainer = (data: DataValue) => {

  const formatNumberStr = (n: number): string => {
    const s = n.toString();
    if (n < 1000) return s;
    return s
      .split('.')[0]
      .split('').reverse().join('')
      .match(/.{1,3}/g)?.join('\u200a')
      .split('').reverse().join('')
      + (s.split('.')[1] || '');
  }

  return (
    <div className='data-value-container'>
      <span className={`data-value-value${data.unit.noSpace ? ' no-space' : ''}`}>
        {typeof data.value.n === 'number' ? 
          formatNumberStr(data.value.n) : 
            `${formatNumberStr(data.value.n.min)} - ${formatNumberStr(data.value.n.max)}`
        }
        {data.value.exp &&
          <span>&nbsp;&sdot;&nbsp;10<sup>{data.value.exp}</sup></span>
        }
      </span>
      <span>
        {(data.value.n !== 1 && data.unit.plural ? data.unit.plural : data.unit.single).map((u, i) => 
          u.sup ? <sup key={i}>{u.s}</sup> : u.sub ? <sub key={i}>{u.s}</sub> : u.s
        )}
      </span>
    </div>
  )
}

export default DataValueContainer;