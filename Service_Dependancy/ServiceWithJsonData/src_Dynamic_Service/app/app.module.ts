import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchserviceService } from './batchservice.service';
import { BathdetailsComponent } from './bathdetails/bathdetails.component';

// import Http module for server request
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BatchlistComponent,
    BathdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // import http client module
  ],
  providers: [BatchserviceService],   // import batch service   // angular provide object of it to everyone
  bootstrap: [AppComponent]
})
export class AppModule { }
