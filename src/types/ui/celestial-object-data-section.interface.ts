import { CelestialObjectDataRow } from './celestial-object-data-row.interface';

export interface CelestialObjectDataSection {
  name: string;
  groups: {
    name: string;
    rows: CelestialObjectDataRow[];
  }[]
}