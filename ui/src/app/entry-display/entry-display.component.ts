import { Component, OnInit, Input } from '@angular/core';
import { RunningCalculation } from '../dto/running-calculation';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {

  @Input() timeCalculation: RunningCalculation;

  constructor() { }

  ngOnInit() {
  }

}
