import { NotableObject } from './notable-object.interface';

export interface Region {
  name: string;
  description: string[];
  notableObjects: NotableObject[];
}