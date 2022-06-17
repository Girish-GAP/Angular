# Binding

What is Angular Data Binding. <br>
- Data binding is a technique, where the data stays in sync between the component and the view. 
- Whenever the user updates the data in the view, Angular updates the component. 
- When the component gets new data, the Angular updates the view.

# Data Binding in Angular
The data binding in Angular can be broadly classified into two groups.  <br>
1) One way binding 
2) two-way binding
<br>

# 1) One way binding : 
In one way binding data flows from one direction. <br>
Either from view to component or from component to view.

-----------------------------------

## - From Component to View :
To bind data from component to view, we make use of [Interpolation](https://github.com/Girish-GAP/Angular/blob/main/Interpolation/src_Interpolation/README.md) & [Property Binding](https://github.com/Girish-GAP/Angular/blob/main/Interpolation/src_Interpolation/README.md).

Property binding contains : 

1) Style binding
2) Class binding


## 1) Style binding : 

[stylebinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/stylebinding/stylebinding.component.ts)         |   [stylebinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/stylebinding/stylebinding.component.html) 

We can set the inline styles of a HTML element using the style binding in angular. <br><br>
You can add styles conditionally to an element, hence creating a dynamically styled element.


### Syntax :
       [style.style-property] = "style-value"
       
       
## 2) Class binding :
[classbinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/classbinding/classbinding.component.ts)         |   [classbinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/classbinding/classbinding.component.html)   |   [cclassbinding.component.css](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/classbinding/classbinding.component.css) 

The Angular Class binding is used to add or remove classes to and from the HTML elements. 

You can add CSS Classes conditionally to an element, hence creating a dynamically styled element.

------------------------------------

## - From View to Component :

## 1) Event Binding :
[eventbinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/eventbinding/eventbinding.component.ts)         |   [eventbinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/src/app/eventbinding/eventbinding.component.html)   |   

Event binding allows us to bind events such as keystrokes, clicks, hover, touch, etc to a method in component. <br><br>
It is one way from view to component.     <br><br>
By tracking the user events in the view and responding to it, we can keep our component in sync with the view. <br><br>
For Example, when the user changes input in a text box, we can update the model in the component, run some validations, etc. <br><br>
When the user submits the button, we can then save the model to the backend server.

### Syntax :
       <(target-event)="TemplateStatement"
       
Angular event binding syntax consists of a target event name within parentheses on the left of an equal sign, and a quoted template statement on the right.

