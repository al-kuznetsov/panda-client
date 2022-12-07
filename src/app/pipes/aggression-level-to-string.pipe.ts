import { Pipe, PipeTransform } from '@angular/core';
import { AggressionLevel } from '../enums/aggression-level';

@Pipe({
  name: 'aggressionLevelToString'
})
export class AggressionLevelToStringPipe implements PipeTransform {

  transform(value: AggressionLevel): string {

    switch (String(value)) {
      case AggressionLevel[AggressionLevel.AGGRESSIVE]:
        return "Имеется";
      case AggressionLevel[AggressionLevel.AVERAGE]:
        return "Есть признаки агрессии или стресса";
      case AggressionLevel[AggressionLevel.NO]:
        return "Нет"
      default:
        return "";
    }
  }

}
