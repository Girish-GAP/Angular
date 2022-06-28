import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';


// Routing the module components
const routes: Routes = [

  // Route the components of userdefine modules
  {path : 'admin-dash', component : AdminDashboardComponent },
  {path : 'employee-dash', component : EmployeeDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
