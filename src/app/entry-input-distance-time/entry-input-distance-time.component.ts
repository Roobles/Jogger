import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RunningEntry } from '../dto/running-entry';

@Component({
  selector: 'app-entry-input-distance-time',
  templateUrl: './entry-input-distance-time.component.html',
  styleUrls: ['./entry-input-distance-time.component.css']
})
export class EntryInputDistanceTimeComponent implements OnInit {

  duration: string; 
  avgTimePerMile: string;
  calculatedEntry: RunningEntry;

  @Output() entryCalculated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  calculateInput() {
    const durationSeconds = this.timeEntryToSeconds(this.duration);
    const avgTimeSeconds = this.timeEntryToSeconds(this.avgTimePerMile);

    this.calculatedEntry = {
      id: 1,
      durationSeconds: durationSeconds,
      distanceFeet: this.convertToDistance(durationSeconds, avgTimeSeconds)
    };

    this.entryCalculated.emit(this.calculatedEntry);
  }

  timeEntryToSeconds(timeEntry: string) {
    if (timeEntry === undefined || timeEntry.trim() === "")
      return 0;

    const retrieve = /(\d+:)?(\d+:)?(\d+)/;

    const entryCheck = retrieve.exec(timeEntry);
    const hour = this.convertTimeValue(entryCheck[1]);
    const minute = this.convertTimeValue(entryCheck[2]);
    const second = this.convertTimeValue(entryCheck[3]);

    return second + (60 * minute) + (3600 * hour);
  }

  convertTimeValue(timeValue: string) {
    if (timeValue === undefined)
      return 0;

    timeValue = timeValue.trim();
    if (timeValue.endsWith(":"))
      timeValue = this.trimTimeValue(timeValue);

    return parseInt(timeValue);
  }

  trimTimeValue(timeValue: string) {
    return timeValue === undefined
      ? "00"
      : timeValue.substring(0, timeValue.length - 1);
  }

  convertToDistance(duration:number, secondsPerMile: number) {
    const feetPerMile = 5280;

    return (duration * feetPerMile) / secondsPerMile;
  }
}
