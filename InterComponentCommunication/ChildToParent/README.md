# Child to Parent Communication 

[child.component.ts](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/child/child.component.ts)          |  [child.component.html](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/child/child.component.html)         ||    [app.component.html](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/app.component.html)                |   [app.component.ts](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/app.module.ts) 

- The Child to Parent communication can happen by emit data from the child, which can be listed to by the parent.


- This approach is ideal when you want to share data changes that occur on things like button clicks, form 
entries, and other user events.



# Parent listens for child event

- The Child Component exposes an EventEmitter Property. 
- This Property is adorned with the @Output decorator. 

- When Child Component needs to communicate with the parent it raises the event. 
- The Parent Component listens to that event and reacts to it.

- EventEmitter Property
- To Raise an event, the component must declare an EventEmmitter Property. 

- The Event can be emitted by calling the .emit() method

### [For Example](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/child/child.component.ts) 
      @Output() Myevent:  = new EventEmitter();
      
#### And then call emit method passing the whatever the data you want to send as shown below :
        this.Myevent.emit(this.msg);
  
  
### @Output Decorator
- Using the EventEmitter Property gives the components ability to raise an event. 

- But to make that event accessible from parent component, you must decorate the property with @Output decorator

----------------------------------------------------


### How to Pass data to parent component using @Output :

### - [In the child component](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/child/child.component.ts) 

1) Declare a property of type EventEmitter and instantiate it
2) Mark it with a @Output Decorator
3) Raise the event passing it with the desired data

### - [In the parent component](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/app.component.html)  

1) Bind to the Child Component using Event Binding and listen to the child events
2) Define the event handler function

### [For example](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/app/app.component.html)  
    <app-child (Myevent) = "Data = $event"></app-child>

We are listning to Myevent and whatever we are listning we are stoaring it in Data attribute.


------------------------------------------------------

## [Output](https://github.com/Girish-GAP/Angular/blob/main/InterComponentCommunication/ChildToParent/ChildToParent_Output.png)
