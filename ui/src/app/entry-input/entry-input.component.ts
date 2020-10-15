import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RunningEntry } from '../dto/running-entry';

@Component({
  selector: 'app-entry-input',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.css']
})
export class EntryInputComponent implements OnInit {

  constructor() { }

  @Output() inputCalculated = new EventEmitter();

  ngOnInit() {
  }

  onEntryCalculated(timeEntry:RunningEntry) {
    this.inputCalculated.emit(timeEntry);
  }

}
