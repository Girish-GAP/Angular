import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Entry for lazy loading using loadChildren method
const routes: Routes = [

   // The loadChildren() method takes the path to the module, then appended to the module's class name. 
   {path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
   {path : 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)}
   ,{path: '', redirectTo : '', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


