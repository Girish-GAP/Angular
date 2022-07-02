# Directives
- The [Angular directive](https://www.tektutorialshub.com/angular/angular-directives/) helps us to manipulate the DOM. 
- You can change the appearance, behavior, or layout of a DOM element using the directives. 
- They help you to extend HTML. 
- The Angular directives are classified into three categories based on how they behave.
- Angular directives are used to extend the power of the HTML by giving it new syntax. 
- Each directive has a name either one from the Angular predefined like ng-repeat, or a custom 
one which can be called anything.  
1) Component
2) Structural 
3) Attribute Directives


## How to Create & Use Custom Directive In Angular ?

### 1) Create new custome directive :
      ng generate directive name_of_directive
      
- eg. ng g d my-dir
- After this command new file my-dir.directive.ts gets created.
- This file contains one class with directive decorator
- We can write our logic inside the class which gets executed by the Angular when we use our 
directive.

### 2) Declare our directive in 'declarations' array of [app.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Custome%20Directive/src_CutomeDirective/app/app.module.ts)

### 3) ElementRef

[my-dir.directive.ts](https://github.com/Girish-GAP/Angular/blob/main/Custome%20Directive/src_CutomeDirective/app/my-dir.directive.ts)

- We attach the attribute directive to an element, which we call the parent element. 
- To change the properties of the parent element, we need to get the reference. 
- Angular injects the parent element when we ask for the instance of the ElementRef in its constructor.
###
      constructor(private el: ElementRef) {}
      
- ElementRef is a wrapper for the Parent DOM element. 
- We can access the DOM element via the property nativeElement. 
- The style method allows us to add the property to the element.

-----------------------------

[Output](https://github.com/Girish-GAP/Angular/blob/main/Custome%20Directive/Output_Cutome_Directive.png)
