import { HintType } from '../../constants/ui/hint-type.enum';
import { Definition } from './definition.interface';
import { DataValue } from './data-value.interface';

export interface Hint {
  type: HintType;
  content: Definition[] | DataValue[];
}