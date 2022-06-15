# Component
Components are the most basic UI building block of an Angular app. 
An Angular app contains a tree of Angular components.


## Create a new Component : <br>
<code> ng generate component component_name  </code>  <br>
we can use shortcut ng g c component_name
<br>
After creating component the 4 file will be addedd in our app directory.
1) .html
2) .spec.ts
3) .ts
4) .css

Along with this one updtatation perfored : in app.module.ts the entry of component in ng declaration array.
<br><br>
A component must belong to an NgModule in order for it to be available to another component or application. 
<br>
To make it a member of an NgModule, list it in the declarations field of the NgModule metadata.

## Component rendering :

- We have to render component in app.component.html
  - Add selector of Demo component in app component.
  - After rendering the html page in app.comp.html the component html page starting to show in app.comp.html


 
