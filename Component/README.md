# Component
Components are the most basic UI building block of an Angular app. 
An Angular app contains a tree of Angular components.


## Child Component Creation : <br>
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

## Component Rendering  :

- We have to render component in  [app.component.html](https://github.com/Girish-GAP/Angular/blob/main/Component/src/app/app.component.html)

  - Add selector of Demo component in app component.
  - To render the component use custom tag of component in specific .html file.
  - After rendering the html page in app.comp.html the [Firstcomponent.html](https://github.com/Girish-GAP/Angular/blob/main/Component/src/app/first-component/first-component.component.html) will be start to show in app.comp.html.

- Nested Component Rendering : 
  - Render Second component from first component html file [first component html file](https://github.com/Girish-GAP/Angular/blob/main/Component/src/app/first-component/first-component.component.html)

- [Output of html file](https://github.com/Girish-GAP/Angular/blob/main/Component/Output.png)
 
