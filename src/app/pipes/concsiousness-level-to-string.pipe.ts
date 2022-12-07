import { Pipe, PipeTransform } from '@angular/core';
import { ConcsiousnessLevel } from '../enums/concsiousness-level';

@Pipe({
  name: 'concsiousnessLevelToString'
})
export class ConcsiousnessLevelToStringPipe implements PipeTransform {

  transform(value: ConcsiousnessLevel): string {

    switch (String(value)) {
      case ConcsiousnessLevel[ConcsiousnessLevel.CONSCIOUS]:
        return "В сознании";
      case ConcsiousnessLevel[ConcsiousnessLevel.DEPRESSED]:
        return "Спутанное сознание";
      case ConcsiousnessLevel[ConcsiousnessLevel.UNCONSCIOUS]:
        return "Без сознания"
      default:
        return "";
    }
  }

}
