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

