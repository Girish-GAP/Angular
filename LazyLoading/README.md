# Lazy Loading 
- Lazy loading is the technique where angular loads the Modules only on a need basis rather than all at once. 
- It is also called on-demand loading. By default, Angular Loads the modules eagerly. 
- Lazy Loading of Angular Modules reduces the initial load time of the app. 
- We use the loadChilden method of the Angular Router to lazy load them when the user navigates to a route. 
- The Angular apps get bigger in size as we add more and more features. 
- The Angular Modules help us to manage our app by creating separate modules for each new feature. 
- But, as the app gets bigger in size, slower it loads. 
- That is because of angular loads the entire application upfront.
- The slow loading app does not leave a good impression on the user. 
- By Loading only a part of the app (i.e lazy loading), the app appears to run faster to the user. 
- The faster loading app gives you a performance boost and also results in a good user experience.


## How Lazy loading works
- In Angular, the Lazy loading works at the module level. i.e. you can lazy load only the Angular Modules. 
- We cannot lazy load the Individual components.
- The Lazy loading works via the Angular Router Module. 
- The loadChildren method of the Angular Router is responsible to load the Modules
- We define the modules which we want to lazy load, when we define the routes.

## How to create Application with Lazy Loading :

### 1) Requirement to use lazyloading :
- We require one project.

  [LazyLoading](https://github.com/Girish-GAP/Angular/tree/main/LazyLoading/src_lazyLoading)

- For lazy loading we require more than one modules except app module : <br>
 
    [adminModule](https://github.com/Girish-GAP/Angular/tree/main/LazyLoading/src_lazyLoading/app/admin)    |    [employeeModule](https://github.com/Girish-GAP/Angular/tree/main/LazyLoading/src_lazyLoading/app/employee) 

-  We also need to create components inside our feature module : 
  
    [admin-dashboard](https://github.com/Girish-GAP/Angular/tree/main/LazyLoading/src_lazyLoading/app/admin/admin-dashboard)    |     [employee-dashboard](https://github.com/Girish-GAP/Angular/tree/main/LazyLoading/src_lazyLoading/app/employee)

---------------------

### 2) LoadChildren()

<br>

[app.module.routing.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/app-routing.module.ts)      

[admin.module.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/admin/admin.module.ts)      |       [admin-routing.module.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/admin/admin-routing.module.ts) 


[employee.module.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/employee/employee.module.ts)     |       [employee-routing.module.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/employee/employee-routing.module.ts)

<br>

- In the main routing file [app-routing.module.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/app-routing.module.ts), we need to use the loadChildren() method to lazy 
load the feature module :
####
       {path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}

- The admin is the path is the URL path segment to the AdminModule. 
- The loadChildren is where we configure the Lazy Loading.
<br>

- We need to provide call back function to loadChildren argument. 
- The call back must load the AdminModule. 
- We use the dynamic import syntax using the import method. 
- The import method loads the module from the path, which we provide as the argument to it.
<br>

- When the user navigates to the admin URL or to any of its child routes like admin/dashboard, 
- the router will fetch the [AdminModule](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/admin/admin.module.ts) and loads the routes and components of the [AdminModule](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/admin/admin.module.ts)
<br>

- The lazy loaded module loads only for the first visit of the URL, it will not load when we revisit that URL again.
- When we define an AdminModule to lazy loaded, the angular creates a separate bundle for the entire module.

----------------

### 3) Routing Components Inside the Admin Feature Module
           {path : '', component : AdminDashboardComponent}
  
 [admin-routing.module.ts](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/src_lazyLoading/app/admin/admin-routing.module.ts)

------------------------------------------

[Output](https://github.com/Girish-GAP/Angular/blob/main/LazyLoading/lazyLoading_Output.png)

