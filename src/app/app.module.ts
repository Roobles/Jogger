import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryInputDistanceTimeComponent } from './entry-input-distance-time/entry-input-distance-time.component';
import { EntryInputComponent } from './entry-input/entry-input.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryInputComponent,
    EntryInputDistanceTimeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
