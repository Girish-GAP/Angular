# Client-Server Connection 

[Client-server model](https://www.geeksforgeeks.org/client-server-model/)

### Angular + Node + Express Application
---------------
## Setup for Client-Sever connection 

[Basic File Structure for connection.](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/Output_Img/ServerClient_FileStructure-%20Overview.png) 

------------------------------------------
Create a new Folder eg. FullStack.

### Client Side

#### 1] Create new Application eg. Client inside FullStack.
                ng new Client
        
#### 2] Create new Component eg. Employee for Client
                ng g c Employee

#### 3] Create new service eg. EmployeeData for Client
                ng g s EmployeeData
        
#### 4] Create new file '[proxy.conf.json](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/proxy.conf.json)' inside Client.

- This file contains information about server connection.

-------------------------------------------------------------------------
### Server Side 

#### 1] Create new Folder inside Fullstack eg. api-server.
#### 2] Create node_modules and package-lock.json inside api-server.
                npm install express body-parser --save

- It will install express for our project only.
- It's an third party, require Internet connection to install.
- '--save' to convey we don't want it locally we want it inside our folder they do it by default but its just a precation.

#### 3] Create package.json inside api-server.
               npm init --yes
              
- Intilize node package manager.

#### 4] Create [api.js](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/server-api/api.js) inside api-server.
- It will contain the server logic.

--------------------------------------------------------------

## Client-Server Connection

[Basic Overview of Data Flow](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/Output_Img/DataFlow_Server-server.png)

-----------------------------------------------------

[employee.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/src_Client/app/employee/employee.component.ts) 
- We have to create the lifeCycle-hook(ngOnIt) method inside component.
- This method will call Service method for data by subscribing it.
- To call service method we have to do dependecny injection of service inside component.
- The concept of service injcet to client is explained in [Service Dependency](https://github.com/Girish-GAP/Angular/tree/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service) topic.

[employee-data.service.ts](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/src_Client/app/employee-data.service.ts)
- Service contans a local method which will call server method by routing address of it.
- Service method will use http protocol for connection to server.
- To use http protocol we have to do dependency injection of http inside server.
- The concept of http inject in service is explained in [Service Dependency](https://github.com/Girish-GAP/Angular/tree/main/Service_Dependancy/ServiceWithJsonData/src_Dynamic_Service) topic.

[proxy.conf.json](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/proxy.conf.json)
- We have to proxy.conf.json file inside client application explicitly.
- This file contains the information of server connection eg. portnumber etc..

<em> [ *Note : Any change in proxy.conf.json file require restart everything to see effect of changes ] </em>

--------------------------------------------------

[api.js](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/server-api/api.js)
- Inside api.js we write the logic for server.
- This file contains node-js as a run time environment and express-js as a framework.
- We create the object of express and use it's methods.


-----------------------------------------------------

## Run Application

#### 1] Run Server : node server-logic-file.js
            node api.js

<em>[ *Note : If server started by running 'node api.js' then if any change in api.js file require restart server to see effect of changes ]</em>

To run it automatically after making changes in server file, install [node mon](https://www.npmjs.com/package/nodemon).

#### If node mon is installed :
            nodemon api.js

#### 2] Run Client :
            ng serve --proxy-config proxy.conf.json --o

      
---------------------------------------

### Output :

[Client Output-1](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/Output_Img/Client_Output.png)

[Client Output-2](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/Output_Img/Client_Output-2.png)

[Server Output](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/Output_Img/Server_Output.png)

