# Static Service

- Its a simple service which is not connected to server and pass static data or methods to component which are defined inside it.

## How to use Service in Angular

[batchService.service.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchservice.service.ts)               |               [app.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/app.module.ts)

[batchList.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchlist/batchlist.component.ts)       |       [batchDetail.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/bathdetails/bathdetails.component.ts)

### 1) Create new service

        ng generate service service_name
 ----------------------------------
### 2) Dependency Injection of Service in [component](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchlist/batchlist.component.ts)  

- To use service methods inside child we have to create instances of service inside component by dependecny injection.
- Here component has an dependency of service.

####  i) Import and Make entry of Service in [ng Module prividers array](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/app.module.ts)
         providers: [ service_name ]


#### ii)  Create Instance of service in [component](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchlist/batchlist.component.ts) by using constructor 
        constructor(private ServiceObj : service_name) { }

Now we can access service methods by 'ServiceObj' object of service.

---------------------------------------

### 3) Http Server Connection

#### i) import httpClientModule in [Angular modules](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/app.module.ts).
         import { HttpClientModule} from '@angular/common/http';
#### Make entry in import array
         imports: [HttpClientModule]
         


#### ii) Dependency Injection of Http in [Service](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchservice.service.ts) 

#### import httpClient in service
        import { HttpClient} from '@angular/common/http'; 

####  Create Instance of http in service by using constructor 
        constructor(private _obj : HttpClient) { }

Now we can access http methods (GET, PUSH, etc..) by '_Obj' object of http.

### 4) Create Datafeatch Interface

[Batches.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/Batches.ts)

- Create .ts file and add export class which represnet the structure in which we want to featch the data.
- Import this Interface file in service.
- We will use this Interface to typecast the data which return by observables in raw set of bites.

### 5) Observables

#### i) Import observables in [Service](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchservice.service.ts) 
        import { Observable } from 'rxjs';   
        
rxjs is the reactive extension of js.

### 6) Component service call 

#### i) Define Call method for service in component.
        
[batchList.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchlist/batchlist.component.ts)       |       [batchDetail.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/bathdetails/bathdetails.component.ts)

#### ii) Define Call method for http which return the data from server.

[batchService.service.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchservice.service.ts)    
                
