import { Component, OnInit, Input } from '@angular/core';
import { RunningEntry } from '../dto/running-entry';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {

  @Input() timeEntry: RunningEntry;

  constructor() { }

  ngOnInit() {
  }

}
