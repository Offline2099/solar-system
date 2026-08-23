import { SystemPartType } from '../../constants/system-part-type';
import type { Planet } from './planet.interface';
import type { Region } from './region.interface';
import type { Star } from './star.interface';

export interface SystemPart {
  name: string;
  type: SystemPartType;
  content: Star | Planet[] | Region;
}
