import { Injectable } from '@angular/core';

@Injectable()
export class RunningCalculationsService {

  constructor() { }

  timeStringToSeconds(timeEntry: string) {
    if (timeEntry === undefined || timeEntry.trim() === "")
      return 0;

    const retrieve = /(\d+:)?(\d+:)?(\d+)/;

    const entryCheck = retrieve.exec(timeEntry);
    const hour = this.convertTimeValue(entryCheck[1]);
    const minute = this.convertTimeValue(entryCheck[2]);
    const second = this.convertTimeValue(entryCheck[3]);

    return second + (60 * minute) + (3600 * hour);
  }

  convertToDistance(duration:number, secondsPerMile: number) {
    const feetPerMile = 5280;

    return (duration * feetPerMile) / secondsPerMile;
  }

  private convertTimeValue(timeValue: string) {
    if (timeValue === undefined)
      return 0;

    timeValue = timeValue.trim();
    if (timeValue.endsWith(":"))
      timeValue = this.trimTimeValue(timeValue);

    return parseInt(timeValue);
  }

  private trimTimeValue(timeValue: string) {
    return timeValue === undefined
      ? "00"
      : timeValue.substring(0, timeValue.length - 1);
  }

  

}
