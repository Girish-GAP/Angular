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

## 1. From Component to View :
To bind data from component to view, we make use of [Interpolation](https://github.com/Girish-GAP/Angular/blob/main/Interpolation/src_Interpolation/README.md) & [Property Binding](https://github.com/Girish-GAP/Angular/blob/main/Interpolation/src_Interpolation/README.md).

Property binding contains : 

1) Style binding
2) Class binding


4) Event binding

## 1) Style binding : 
We can set the inline styles of a HTML element using the style binding in angular. <br><br>
You can add styles conditionally to an element, hence creating a dynamically styled element.


### Syntax :
       [style.style-property] = "style-value"
       
       
