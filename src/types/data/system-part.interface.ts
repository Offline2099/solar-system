import { SystemPartType } from '../../constants/data/system-part-type.enum';
import { Planet } from './planet.interface';
import { Region } from './region.interface';
import { Star } from './star.interface';

export interface SystemPart {
  name: string;
  type: SystemPartType;
  content: Star | Planet[] | Region;
}