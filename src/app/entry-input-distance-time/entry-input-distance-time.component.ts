import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RunningEntry } from '../dto/running-entry';

import { RunningCalculationsService } from '../running-calculations.service';

@Component({
  selector: 'app-entry-input-distance-time',
  templateUrl: './entry-input-distance-time.component.html',
  styleUrls: ['./entry-input-distance-time.component.css'],
  providers: [ RunningCalculationsService ]
})
export class EntryInputDistanceTimeComponent implements OnInit {

  duration: string; 
  avgTimePerMile: string;
  calculatedEntry: RunningEntry;

  @Output() entryCalculated = new EventEmitter();

  constructor(public calcService: RunningCalculationsService) { }

  ngOnInit() {
  }

  calculateInput() {
    const durationSeconds = this.calcService.timeStringToSeconds(this.duration);
    const avgTimeSeconds = this.calcService.timeStringToSeconds(this.avgTimePerMile);

    this.calculatedEntry = {
      id: 1,
      durationSeconds: durationSeconds,
      distanceFeet: this.calcService.convertToDistance(durationSeconds, avgTimeSeconds)
    };

    this.entryCalculated.emit(this.calculatedEntry);
  }

}
