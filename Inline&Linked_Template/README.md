# Templates in Angular :

In Angular, our views are defined in the HTML template, which can be inline or external.

You can create an HTML template in a component in two ways:

1) Inline Template
2) External or Linked Template



## Inline Template :

- In inline template instead of making saperate html file we write html code in coponent.ts file.

- An inline HTML template for a component is defined using template config in @Component decorator, as shown here. 

- It can be a single line template wrapped inside double quotes or single quotes. 

- It can also be a multi-line template wrapped inside backticks char `. 


## Linked Template : 
[(app.component.ts)](https://github.com/Girish-GAP/Angular/blob/main/Inline%26Linked_Template/src/app/app.component.ts)    |   [(app.component.html)](https://github.com/Girish-GAP/Angular/blob/main/Inline%26Linked_Template/src/app/app.component.html)   |    [(app.component.css)](https://github.com/Girish-GAP/Angular/blob/main/Inline%26Linked_Template/src/app/app.component.css) <br><br>             

- A component can have a separate HTML and CSS file to include an HTML & CSS template of a component.   
- Use the templateUrl parameter to declare the path of the HTML template file, as shown below.
- It is a best practice to have a separate .html file for a template. It will be easy to work with HTML tags and also maintain it.
- Instead of template, we have used templateUrl, and we replaced styles with styleUrls.

   [Output](https://github.com/Girish-GAP/Angular/blob/main/Inline%26Linked_Template/src/Output_Linked%20Template.png) 
