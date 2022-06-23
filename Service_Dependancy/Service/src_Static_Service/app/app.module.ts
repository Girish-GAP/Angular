import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

// import service to make it avalable to everyone
import { StudentDataService } from './student-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ StudentDataService ], // now the object of it will be available to every component.
  bootstrap: [AppComponent]
})
export class AppModule { }
