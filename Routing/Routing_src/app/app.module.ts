import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { SubjectComponent } from './subject/subject.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';

// For routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    SubjectComponent,
    AboutusComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // For routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
