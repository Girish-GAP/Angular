# Dependecy Injection

- The Angular dependency injection is now the core part of the Angular. 
- It allows us to inject dependencies into the Component, Directives, Pipes, or Services.

- Dependency Injection (DI) is a technique in which a class receives its dependencies from external sources rather than creating them itself.


## Angular Dependency Injection Framework

- Angular Dependency Injection framework implements the Dependency Injection in Angular. 

- It creates & maintains the Dependencies and injects them into the Components, Directives, or Services.

- There are five main players in the Angular Dependency injection Framework.

## Angular Dependency Injection Framework
- Angular Dependency Injection framework implements the Dependency Injection in Angular. 
- It creates & maintains the Dependencies and injects them into the Components, Directives, or Services.
- There are five main players in the Angular Dependency injection Framework.

--------------------------------------------------------

## 1) Consumer
- The Consumer is the class (Component, Directive, or Service) that needs the Dependency. 
- In our example, the [child](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/child/child.component.ts) is the Consumer.

## 2) Dependency
- The Service that we want to in our consumer. 
- In our example the [StudentData](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/student-data.service.ts) is the Dependency

## 3) Injection Token (DI Token)
The Injection Token (DI Token) uniquely identifies a Dependency. We use DI Token when we register dependency

## 4) Provider
- The Providers Maintain the list of Dependencies along with their Injection Token. 
- It uses the Injection Token is to identify the Dependency.  
- provider array present in [app module](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/app.module.ts)

## 5) Injector
- Injector holds the Providers and is responsible for resolving the dependencies and injecting the instance of the Dependency to the Consumer
- The Injector uses Injection Token to search for Dependency in the Providers. 
- It then creates an instance of the dependency and injects it into the consumer

----------------------------------------------------------------------------------

## Using Dependency Injection 

## 1) Registering the Dependency with the Injector

- Angular Provides an instance of Injector & Provider to every component & directive in the application ( Consumers). 
- It also creates an Injector instance at the module level and also at the root of the application. 
- Basically, it creates a Tree of Injectors with parent-child relationship 
- The dependencies are registered with the Provider. 
- This is done in the Providers metadata of the Injector.
- We can also add the Services to Providers array of the @NgModule. 
- Then they will be available for use in all the components & Services of the application. 
- The ProductService in this case added to the Injector instance at the module level.

#### [app module](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/app.module.ts)
      providers: [ StudentDataService ]


## Notify about dependency 
- Next, we need to tell angular that our component needs dependency injection. This is done by using the @Injectable() decorator.
- @Injectable() decorator is not needed if the class already has other Angular decorators like @Component, @pipe or @directive etc. 
- Because all these are a subtype of Injectible.

## Asking for Dependency in the Constructor

[child.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/Service/src_Static_Service/app/child/child.component.ts)  [Child has an dependency of StudentData serive]

- Next, our Component needs to ask for the dependencies. We do that in the constructor of the Component.
- The Components, Directives & Services (Consumers) declare the dependencies that they need in their constructor.
- Injector reads the dependencies from the constructor of the Consumer. 
- It then looks for that dependency in the provider. 
- The Provider provides the instance and injector, then injects it into the consumer.
- If the instance of the Dependency already exists, then it will reuse it. This will make the dependency singleton.

#   
        constructor(private _myObj : dependencyName(service)){}
        
- Now we have the object of dependency(service) we can use all service methods in our component.


