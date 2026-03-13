import { Definition } from './definition.interface';
import { DataValue } from './data-value.interface';

export interface CelestialObjectDataRow {
  name: string;
  hint?: Definition[];
  value: DataValue;
  altValues?: DataValue[];
}