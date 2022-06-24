# Dynamic Service

- It is a service which is connected to server by using Http and pass data from databases by
server connection to component.
- We used following concepts to make it happen
1) [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
2) [Dependancy Injection](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Dependancy.md)
3) [Observables](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/observables.md)

## How to use Dynamic Service in Angular

1) ### 1) Create new service

        ng generate service service_name
        
--------------------------------
        
### 2) Dependency Injection of Service

- To use service methods inside child we have to create instances of service inside component by dependecny injection.
- Here component has an dependency of service.
- Import and Make entry of Service in [ng Module prividers array](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/app.module.ts)
### Create Instance of service in component by using constructor 
        constructor(private ServiceObj : service_name) { }

- Now we can access service methods by 'ServiceObj' object of service.
- 
