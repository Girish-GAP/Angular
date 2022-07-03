import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomePipeComponent } from './custome-pipe/custome-pipe.component';
import { InbuiltPipeComponent } from './inbuilt-pipe/inbuilt-pipe.component';

const routes: Routes = [
  {path : 'inbuiltPipe' , component : InbuiltPipeComponent},
  {path : 'customePipe', component : CustomePipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
