# Interpolation

String Interpolation in Angular is a one-way data-binding technique that is used to transfer the data from a TypeScript code to an HTML template (view).

- It uses the template expression in double curly braces to display the data from the component to the view. 
- String interpolation adds the value of a property from the component to the HTML template view.

### Syntax : 
     {{ component_property }}   
     

- The content inside the double braces is called Template Expression <br>
- The Angular first evaluates the Template Expression and converts it into a string. 
- Then it replaces Template expression with the result in the original string in the HTML. 
- Whenever the template expression changes, the Angular updates the original string again

- Here how we access [app.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Interpolation/src_Interpolation/app/new-comp/new-comp.component.ts) data
in [app.component.html](https://github.com/Girish-GAP/Angular/blob/main/Interpolation/src_Interpolation/app/new-comp/new-comp.component.html) html file.

<br>

