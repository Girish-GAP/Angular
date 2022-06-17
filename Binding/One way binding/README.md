
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

[stylebinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/stylebinding/stylebinding.component.ts)         |   [stylebinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/stylebinding/stylebinding.component.html) 

We can set the inline styles of a HTML element using the style binding in angular. <br><br>
You can add styles conditionally to an element, hence creating a dynamically styled element.


### Syntax :
       [style.style-property] = "style-value"
       
       
## 2) Class binding :
[classbinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/classbinding/classbinding.component.ts)         |   [classbinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/classbinding/classbinding.component.html)   |   [cclassbinding.component.css](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/classbinding/classbinding.component.css) 

The Angular Class binding is used to add or remove classes to and from the HTML elements. 

You can add CSS Classes conditionally to an element, hence creating a dynamically styled element.

------------------------------------

## - From View to Component :

## 1) Event Binding :
[eventbinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/eventbinding/eventbinding.component.ts)         |   [eventbinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/src/app/eventbinding/eventbinding.component.html)   

Event binding allows us to bind events such as keystrokes, clicks, hover, touch, etc to a method in component. <br><br>
It is one way from view to component.     <br><br>
By tracking the user events in the view and responding to it, we can keep our component in sync with the view. <br><br>
For Example, when the user changes input in a text box, we can update the model in the component, run some validations, etc. <br><br>
When the user submits the button, we can then save the model to the backend server.

### Syntax :
       <(target-event)="TemplateStatement"
       
Angular event binding syntax consists of a target event name within parentheses on the left of an equal sign, and a quoted template statement on the right.

-------------------------------------------------

[Output](https://github.com/Girish-GAP/Angular/blob/main/Binding/One%20way%20binding/Output-binding.png) 


--------------------------------------------------
### [Practice question](https://github.com/Girish-GAP/Angular/tree/main/Binding/One%20way%20binding/Practice_question) 



