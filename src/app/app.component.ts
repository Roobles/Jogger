import { Component } from '@angular/core';
import { RunningEntry } from './dto/running-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jogger';

  targetTimeEntry: RunningEntry;

  onInputCalculated(runningEntry: RunningEntry) {
    this.targetTimeEntry = runningEntry;
  }
}
