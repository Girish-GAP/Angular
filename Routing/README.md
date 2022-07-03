# Routing 
- The Router module handles the navigation & Routing in Angular. 
- The Routing allows you to move from one part of the application to another part or one View to another View.  

## The Angular Router Module
- The Router is a separate module in Angular.
- It is in its own library package, @angular/router. 
- The Router Module provides the necessary service providers and directives for navigating through application views.

## Components of Angular Router Module
### - Route :
- Route tells the Angular Router which view to display when a user clicks a link or pastes a URL into the browser address bar. 
- Every Route consists of a path and a component it is mapped to. 
- The Router object parses and builds the final URL using the Route

### - RouterOutlet :
The outerOutlet is a directive (<router-outlet>) that serves as a placeholder, where the Router should display the view
  
### - RouterLink :
- The RouterLink is a directive that binds the HTML element to a Route. 
- Clicking on the HTML element, which is bound to a RouterLink, will result in navigation to the Route. 
- The RouterLink may contain parameters to be passed to the route’s component.

## ROUTES AND PATHSS 

### Static route :
- Each Route maps a URL path to a component. 

### Default route 
- The path can be empty which denotes the default path of an application and it's usually the start of the application. 

### Wildcard route
- The path can take a wildcard string (**). 
- The router will select this route if the requested URL doesn't match any paths for the defined routes. 
- This can be used for displaying a "Not Found" view or redirecting to a specific view if no match is found. 

#### This is an example of a route: 
    {path: 'batches', component: batchesComponent} 

- If this route definition is provided to the Router configuration, the router will render batchesComponent when the browser URL for the web application becomes/ 
batches. 
----------------------------------------------------------------------------------------

## Enable Routing in Angular Application.

1) Create a angular project with routing.
   (make sure app.component.html contans routing enable tag)
2) Add routes tags in [app-routing.ts](https://github.com/Girish-GAP/Angular/blob/main/Routing/Routing_src/app/app-routing.module.ts) file
3) Add components tags in [app-routing.ts](https://github.com/Girish-GAP/Angular/blob/main/Routing/Routing_src/app/app-routing.module.ts) file
4) Add routing paths in tuple form
#### Static route : 
      {path : 'batches', component : BatchesComponent}
      
#### Default route : 
      {path : '', component : BatchesComponent}
      
#### Wildcard route :
      {path : '**', component : BatchesComponent}
      
      
5) Navigation links and Hypertext

[app.component.html](https://github.com/Girish-GAP/Angular/blob/main/Routing/Routing_src/app/app.component.html)

#### Add router links to navigate in view of app
        <a routerlLink="/batches"> Batches </a> 
