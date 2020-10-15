/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntryInputDistanceTimeComponent } from './entry-input-distance-time.component';

describe('EntryInputDistanceTimeComponent', () => {
  let component: EntryInputDistanceTimeComponent;
  let fixture: ComponentFixture<EntryInputDistanceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryInputDistanceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryInputDistanceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
