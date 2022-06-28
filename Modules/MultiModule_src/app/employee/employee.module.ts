import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


@NgModule({
  declarations: [
    EmployeeDashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  // Export explicitly so other modules can use it
  exports :
  [
    EmployeeDashboardComponent
  ]
})

export class EmployeeModule { }
