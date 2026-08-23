import { HintType } from '../../constants/hint-type';
import type { Definition } from './definition.interface';
import type { DataValue } from './data-value.interface';

export interface Hint {
  type: HintType;
  content: Definition[] | DataValue[];
}
