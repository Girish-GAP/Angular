# Services 

 - Service is a class that has the purpose of Providing a Service to a Component, Directive, or to another Service. 
 
 - The Service may be fetching data from the back end, running a business logic, etc
 - Our components need to access the data. You can write data access code in each component, but that is very inefficient and breaks the rule of single responsibility. 
 
 - The Component must focus on presenting data to the user. 
 
 - The task of getting data from the back-end server must be delegated to some other class.
 
 -   We call such a class a Service class. Because it provides the service of providing data to every component that needs it.

## What Angular Services are used for
- Features that are independent of components such a logging services
- Share logic or data across components
- Encapsulate external interactions like data access

## The concepts used in Services :
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Dependancy Injection](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Dependancy.md)
- [Observables](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/observables.md)
 
------------------------------------------------- 

## How to create a Service in Angular
- An Angular service is simply a Javascript function. 
- All we need to do is to create a class and add methods & properties. 
- We can then create an instance of this class in our component and call its methods.
- One of the best uses of services is to get the data from the data source. 

### [1) Static Service Example](https://github.com/Girish-GAP/Angular/tree/main/Service_Dependancy/Service/src_Static_Service)
### [2) Dynamic Service Example](https://github.com/Girish-GAP/Angular/tree/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service)
