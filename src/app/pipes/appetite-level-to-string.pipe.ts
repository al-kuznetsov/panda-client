import { Pipe, PipeTransform } from '@angular/core';
import { AppetiteLevel } from '../enums/appetite-level';

@Pipe({
  name: 'appetiteLevelToString'
})
export class AppetiteLevelToStringPipe implements PipeTransform {

  transform(value: AppetiteLevel): string {

    switch (String(value)) {
      case AppetiteLevel[AppetiteLevel.GOOD]:
        return "Хороший";
      case AppetiteLevel[AppetiteLevel.POOR]:
        return "Плохой";
      case AppetiteLevel[AppetiteLevel.NO]:
        return "Нет"
      default:
        return "";
    }
  }

}
