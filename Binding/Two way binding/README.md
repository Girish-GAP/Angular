
# 1) Two way binding : 

[twowaybinding.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/Two%20way%20binding/src/app/twowaybinding/twowaybinding.component.ts)    |
[twowaybinding.component.html](https://github.com/Girish-GAP/Angular/blob/main/Binding/Two%20way%20binding/src/app/twowaybinding/twowaybinding.component.html)   

- Two-way binding means that changes made to our model in the component are propagated to the view and 
that any changes made in the view are immediately updated in the underlying component.

- Two-way binding is useful in data entry forms. 


- Whenever a user makes changes to a form field, we would like to update our model. 


- Similarly, when we update the model with new data, we would like to update the view as well


- The two-way binding uses the special syntax known as a banana in a box [()]

### Syntax :
    <someElement [(ngModel)]="value"></someElement>
    
 - The Angular uses the ngModel directive to achieve the two-way binding on HTML Form elements. 
 It binds to a form element like input, select, selectarea. etc.
 
 - The ngModel directive is not part of the Angular Core library. 
 
 
 - It is part of the @angular/forms. You need to import the FormsModule package into your Angular module.
 
 #### 
        import { FormsModule } from '@angular/forms';
        
- If it does not work we have to add FormModule in ngModule imports array in [app.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Binding/Two%20way%20binding/src/app/app.module.ts) file.

- Then you can use it using the two-way binding syntax as shown below

####  
      <input type="text" name="value" [(ngModel)]="value">
      
- When you bind to a ngModel directive, behind the scene it sets up property binding & event binding. 


- It binds to the value property of the element using property binding. 


- It then uses the ngModelChange event to sets up the event binding to listen to the changes to the value.

-----------------------------------





