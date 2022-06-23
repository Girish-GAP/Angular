import { Injectable } from '@angular/core';
import { IBatches } from './Batches';  // import interface batches.ts 
import { Observable } from 'rxjs';    // rxjs : reactive extension of js
import { HttpClient} from '@angular/common/http'; // for connection to server


// we need to tell angular that our component needs dependency injection.
// This is done by using the @Injectable() decorator.
@Injectable({
  providedIn: 'root'  // root means it can given to everyone
})

export class BatchserviceService 
{

  // Logic
  // Connection to server

  private URL = './assets/Data/Batches.json';

  // the GetBatches method will connect to server by using http protocol.
  // http is only protocol by using client server commuinication happen.
  

  // dependancy injection of http
  constructor(private _obj : HttpClient) { }

  // return array
  // : Observable<IBatches[] its a return value of method
  // <IBatches[] its a array of interface for typecast

  // the data which coming is an asynchronous
  // Angular is responsible to observe to data arrives or not by using observable concept.
  
  // the data comes from observable are raw set of bites (random set of bites)
  // we type cast it as per subscribe pattern.
  public GetBatches() : Observable<IBatches[]> 
  {
    // .get is the http method access by creating the object of http (this._obj)
    // the data return of obeservable is void *
    // we have to type cast it as per our requirement 
    // we typecast it into data of IBatches[]
    // we take data from this.url location.
    return this._obj.get<IBatches[]>(this.URL);

  }
}


/*

  // As per DRY policy what ever we wirte we don't want to repeat.
  // So the things which are repeting we take it in service.
  // And which ever the component required that service we inject it in that component.
  // component dependant on service
  // service holds anctual business logic or it used to connect with server.

------------------------------------------------------------------------------

  // Data travel flow
  // Database => Server => Service => Component => HTML

  // Client (Browser) - Go to URL => 
  // view differents components(html) , what html should display its controled by component(ts)
  // To control this components there are module files.

  // GetBatches method will connect to server by using http protocol.
  // to the server ExpressJs framework is running, inside of it node.js environment is running.
  // inside node.js there is a function which will connect to mongodb.

  // Data travel flow
  // MongoDB => node.js => ExpressJs => service => component.ts => component.html

*/


