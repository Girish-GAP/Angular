# Client-Server Connection 

[Client-server model](https://www.geeksforgeeks.org/client-server-model/)

## Setup for Client-Sever connection 

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

[employee.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/src_Client/app/employee/employee.component.ts) 
- We have to create the lifeCycle-hook(ngOnIt) method inside component.
- This method will call Service method for data by subscribing it.
- To call service method we have to do dependecny injection of service inside component.

[employee-data.service.ts](https://github.com/Girish-GAP/Angular/blob/main/Server%26Client/src_Client/app/employee-data.service.ts)
- Service contans a local method which will call server method by routing address of it.
- Service method will use http protocol for connection to server.
- To use http protocol we have to do dependency injection of http inside server.

