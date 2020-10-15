import { Injectable } from '@angular/core';
import { RunningEntry } from './dto/running-entry';

@Injectable()
export class RunningCalculationsService {

  feetPerMile : number = 5280;
  secondsPerMinute : number = 60;
  secondsPerHour : number = 3600;


  constructor() { }

  public timeStringToSeconds(timeEntry: string) {
    if (timeEntry === undefined || timeEntry.trim() === "")
      return 0;

    const retrieve = /([0-2]?[0-9]:)?([0-6]?[0-9]):([0-6]?[0-9])/;

    const entryCheck = retrieve.exec(timeEntry);
    const hour = this.convertTimeStringSegment(entryCheck[1]);
    const minute = this.convertTimeStringSegment(entryCheck[2]);
    const second = this.convertTimeStringSegment(entryCheck[3]);

    return second + (60 * minute) + (3600 * hour);
  }

  public convertToDistance(duration:number, secondsPerMile: number) {

    return (duration * this.feetPerMile) / secondsPerMile;
  }

  public calculateRunningEntry(entry: RunningEntry) {
    
    return {
      TotalMiles: entry.distanceFeet / this.feetPerMile,
      MilesPerHour: this.toMilesPerHour(entry),
      TimePerMile: this.toTimePerMile(entry),
      TimePerFiveK: this.calculateTimePerFoot(entry, 16404),
      TimePerTenK: this.calculateTimePerFoot(entry, 32808),
      TimePerHalfMarathon: this.calculateTimePerFoot(entry, 69218),
      TimePerMarathon: this.calculateTimePerFoot(entry, 138435)
    };
  }

  private convertTimeStringSegment(timeValue: string) {
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

  private calculateTimePerFoot(entry: RunningEntry, totalFeet: number) {
    const rate = entry.durationSeconds / entry.distanceFeet;

    return this.toTimeString(rate * totalFeet);
  }

  private toMilesPerHour(entry: RunningEntry) {
    return  (entry.distanceFeet / this.feetPerMile) / (entry.durationSeconds / this.secondsPerHour);
  }

  private toTimePerMile(entry: RunningEntry) {
    return (this.toTimeString((entry.durationSeconds * this.feetPerMile) / entry.distanceFeet ));
  }

  private toTimeString(seconds: number) {
    const hours = Math.floor(seconds / this.secondsPerHour);

    const secondsMinusHours = seconds - (hours * this.secondsPerHour);
    const minutes = Math.floor(secondsMinusHours / this.secondsPerMinute);

    const totalSeconds = Math.floor(secondsMinusHours - (minutes * this.secondsPerMinute));

    var timeStr = "";
    if(hours > 0)
      timeStr += this.toTimeSegment(hours) + ":";

    return timeStr  + this.toTimeSegment(minutes) + ":" + this.toTimeSegment(totalSeconds);
  }

  private toTimeSegment(value: number) {
    return value < 10
      ? "0" + value
      : Math.floor(value).toString();
  }
}
