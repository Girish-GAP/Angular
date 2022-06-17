import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

// To import ngModel which help to achive two-way-data binding.
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule         // we have to add this explicitly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
