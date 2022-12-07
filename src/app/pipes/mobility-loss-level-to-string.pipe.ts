import { Pipe, PipeTransform } from '@angular/core';
import { MobilityLossLevel } from '../enums/mobility-loss-level';

@Pipe({
  name: 'mobilityLossLevelToString'
})
export class MobilityLossLevelToStringPipe implements PipeTransform {

  transform(value: MobilityLossLevel): string {

    switch (String(value)) {
      case MobilityLossLevel[MobilityLossLevel.COMPLETELY_LOST]:
        return "Потеряна полностью";
      case MobilityLossLevel[MobilityLossLevel.PARTIALLY_LOST]:
        return "Потеряна частично";
      case MobilityLossLevel[MobilityLossLevel.NO]:
        return "Сохранена"
      default:
        return "";
    }
  }

}
