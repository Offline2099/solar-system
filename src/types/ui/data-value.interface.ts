import type { Range } from '../general/range.interface';
import type { DataUnit } from './data-unit.interface';

export interface DataValue {
  value: number | Range;
  unit: DataUnit;
}
