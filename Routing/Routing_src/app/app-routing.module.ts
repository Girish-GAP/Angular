import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// for routing path
import { BatchesComponent } from './batches/batches.component';
import { SubjectComponent } from './subject/subject.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';

// small r is the variable
// big R is the inbuilt
// like const no : number = [1,2];
// routes is the array of Routes

// this is the array of components which are required in our application
const routes: Routes = [
// Tuple form
// 'batches' is the programmer dependant name we can give any name.
// component copy from batches.ts class name
// if it gives error in component name then import components in this file
// Now check in browser it will give output after '../component_name'
// eg. if path is 'batches' then it will render routing tag of 'batches' (empty chair)
// that's why its single page application.

  // static routes
  {path : 'batches', component : BatchesComponent}, // render batches
  {path : 'subject', component : SubjectComponent}, // render subjects
  {path : 'aboutus', component : AboutusComponent}, // renter aboutus


  // defualt route
  {path : '', component : AboutusComponent},  


  // wildcard route
  // it should be always at the ending of array otherwise it will show everytime whatever we give url
  {path : '**', component : InvalidComponent} ,// wild card route // if invalid url then it render this component
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// This file creates when we say yes to routing while creating project