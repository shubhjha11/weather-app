import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { SpeakDirective } from './directive/speak.directive';
import { ParentComponent } from './parent/parent.component';
import { TooltipDirective } from './directive/tooltip.directive';
import { TooltipParentComponent } from './tooltip-parent/tooltip-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SpeakDirective,
    ParentComponent,
    TooltipDirective,
    TooltipParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
