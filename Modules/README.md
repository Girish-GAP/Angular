## Angular Module
- The Angular Modules help us to organize our code into manageable parts or block. 
- Each block implements a specific feature. The Components, Templates, Directives, Pipes, and Services, which implements that feature become part of the module. 
- The following tutorial explains, how best you can create an Angular Module, The folder structure that you can use, etc. 
- We can also load the Modules lazily or Preload thus improving the performance of the Application.

[Angular Modules](https://www.tektutorialshub.com/angular/angular-modules)

# How to use Modules :

## Create new module :
        ng generate module module_name --routing
        
 [admin.module.ts](https://github.com/Girish-GAP/Angular/tree/main/Modules/MultiModule_src/app/admin)     ||    [employee.module.ts](https://github.com/Girish-GAP/Angular/tree/main/Modules/MultiModule_src/app/employee)

- We can enable routing while creating module, otherwise we have to explicityly add routing file for module.
- Routing file will helps for lazy loading. 

<br>

## Create components inside our module :
        ng generate component module_name/component_name 

[employee-dashboard.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/employee/employee-dashboard/employee-dashboard.component.ts)      ||
[admin-dashboard.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/admin/admin-dashboard/admin-dashboard.component.ts)

<br>

## How to render component in [app.component.html](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/app.component.html)
      
1) import module in import array of [app.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/app.module.ts)
2) Export new module from export array of [new module](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/admin/admin.module.ts).
3) Add rendering tag of components in [app.component.html](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/app.component.html)

<br>

## How to route and add routing links 
 - Same as privious routing chapter.
 - Just add path and component name inside [app.routing.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_src/app/app-routing.module.ts)
 
 
[Output of example](https://github.com/Girish-GAP/Angular/blob/main/Modules/MultiModule_Output.png)
