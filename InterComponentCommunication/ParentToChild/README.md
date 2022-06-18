
## 1) Parent to Child

[app.component.ts](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ParentToChild/app/app.component.ts)    |     [app.component.html](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ParentToChild/app/app.component.html)
&nbsp;    ||    &nbsp;     [child.component.ts](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ParentToChild/app/child/child.component.ts)      |      [child.component.html](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ParentToChild/app/child/child.component.html)

 <br>
 
- If the Components have a parent-child relationship then, 
- Parent can send data to child at the time of creation. 
- the parent component can pass the data to the child using the @input Property.

 <br>

Create a property (someProperty) in the [Child Component](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ParentToChild/app/child/child.component.ts)
and decorate it with @Input(). 
This will mark the property as input property

## 
    export class ChildComponent {
    @Input() someProperty: number;
    }
    
And in the Parent Component Instantiate the Child Component. 
Pass the value to the someProperty using the Property Bind Syntax

## 
      <child-component [someProperty]=value></child-component>
      
 In this way, Child Component will receive the data from the parent.
 
 ---------------------------
 
 [Output](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ParentToChild/ParentToChild.png)