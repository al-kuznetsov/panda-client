import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToYesNoString'
})
export class BooleanToYesNoStringPipe implements PipeTransform {

  transform(value: boolean): string {
    switch (value) {
      case true:
        return "Да";
      case false:
        return "Нет";
      default:
        return "";
    }
  }

}
