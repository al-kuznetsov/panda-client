import { Pipe, PipeTransform } from '@angular/core';
import { BleedingLevel } from '../enums/bleeding-level';

@Pipe({
  name: 'bleedingLevelToString'
})
export class BleedingLevelToStringPipe implements PipeTransform {

  transform(value: BleedingLevel): string {

    switch (String(value)) {
      case BleedingLevel[BleedingLevel.HEAVY]:
        return "Сильное";
      case BleedingLevel[BleedingLevel.LIGHT]:
        return "Легкое";
      case BleedingLevel[BleedingLevel.NO]:
        return "Нет"
      default:
        return "";
    }
  }

}
