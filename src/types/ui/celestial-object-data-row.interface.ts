import type { Definition } from './definition.interface';
import type { DataValue } from './data-value.interface';

export interface CelestialObjectDataRow {
  name: string;
  hint?: Definition[];
  value: DataValue;
  altValues?: DataValue[];
}
