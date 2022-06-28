import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  // Export Explicitly to make it usable for other modules
  exports:
  [
    AdminDashboardComponent
  ]
})
export class AdminModule { }
