import { Range } from '../general/range.interface';
import { DataUnit } from './data-unit.interface';

export interface DataValue {
  value: number | Range;
  unit: DataUnit;
}