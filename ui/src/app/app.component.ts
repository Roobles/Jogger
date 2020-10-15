import { Component } from '@angular/core';
import { RunningEntry } from './dto/running-entry';
import { RunningCalculation } from './dto/running-calculation';

import { RunningCalculationsService } from './running-calculations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RunningCalculationsService]
})
export class AppComponent {
  title = 'Jogger';

  constructor(public calcService: RunningCalculationsService) { }

  targetCalculation: RunningCalculation;

  onInputCalculated(runningEntry: RunningEntry) {
    this.targetCalculation = this.calcService.calculateRunningEntry(runningEntry);
  }
}
