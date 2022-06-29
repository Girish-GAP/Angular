import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

// Routing Components Inside the Admin Feature Module 
const routes: Routes = [
  {
    path : '',
    component: AdminDashboardComponent
  }
];

@NgModule({
  // In the feature module, we include the routes with RouterModule's forChild() method instead of the forRoot() method. 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
