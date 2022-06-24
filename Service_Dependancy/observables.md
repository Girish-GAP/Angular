# Observables :

- Observable is a function that converts the ordinary stream of data into an observable stream of data. 
- You can think of Observable as a wrapper around the ordinary stream of data.
- Observable stream or simple Observable emits the value from the stream asynchronously. 
- It emits the complete signals when the stream completes or an error signal if the stream errors out.
- Observables are declarative. 
- You define an observable function just like any other variable. 
- The observable starts to emit values only when someone subscribes to it.

- To featch data in Angular, we can use observables with http to featch data.
- An anuglar application will use http via a GET request to featch data from a back-end server.
- The back-end could be powered by any number of server-side technologies such as java, PHP, Python, or even
  server-side javascript in the form of Node.js
- An http response is sent from the back-end web service to the client side angular application.

- The Angular framework uses observables to do its asynchronous work.

## What is a data stream
- A stream is a data, which arrives over a period of time. The stream of data can be anything. 
- Like variables, user inputs, properties, caches, data structures, and even failures, etc

## Who are observers (subscribers)

- The Observable on its own is useless unless someone consumes the value emitted by the observable. 
- We call them observers or subscribers.
- The observers communicate with the Observable using callbacks
- The observer must subscribe with the observable to receive the value from the observable. 
- While subscribing it optionally passes the callbacks.

- The observable starts emitting the value as soon as the observer or consumer subscribes to it.

- The observable invokes the next() callback whenever the value arrives in the stream. 
- It passes the value as the argument to the next callback. If the error occurs, then the error() callback is invoked. 
- invokes the complete() callback when the stream completes.

## Using Observable

#### 1) Create a service
#### 2) Use dependency Injection for child components.
#### 3) Use Http to connect the server.
#### 4) Subscribe from child to observable service.
#### 5) Call Get method from child by service which return the observable stream of data to child.



[batchservice.service.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchservice.service.ts)     |    [app.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/app.module.ts)


[batch.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/batchlist/batchlist.component.ts)         |         [batchdetails.component.ts](https://github.com/Girish-GAP/Angular/tree/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service/app/bathdetails)

<br>

in our example there is an service name 'batchService' which provide the students data to the child components which are 
  batchList and batchDetails by feaching data from json file (json file represents the database of server).
  
  
  

