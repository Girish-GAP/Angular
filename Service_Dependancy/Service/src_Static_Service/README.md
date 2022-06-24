# Static Service

- Its a simple service which is not connected to server and pass static data or methods to component which are defined inside it.

## How to use Service in Angular

### 1) Create new service

        ng generate service service_name
 
### 2) Dependency Injection of Service

- To use service methods inside child we have to create instances of service inside component by dependecny injection.
- Here component has an dependency of service.

####  Import and Make entry of Service in [ng Module prividers array](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/app.module.ts)


### 3) Create Instance of service in component by using constructor 
        constructor(private ServiceObj : service_name) { }

Now we can access service methods by 'ServiceObj' object of service.
       
                
