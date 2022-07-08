import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuiltPipeComponent } from './inbuilt-pipe/inbuilt-pipe.component';
import { CustomePipeComponent } from './custome-pipe/custome-pipe.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InbuiltPipeComponent,
    CustomePipeComponent,
    MypipePipe            // Custome pipe entry
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
