# Angular 
Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

------------------------------------------------------------

## Prerequisites 

HTML <br>
Typescript  <br>
Javascript

-------------------------------------------------------------
# Environment for Angular :

## Node JS : 

Node or Node.js is an open-source, cross-platform, back-end JavaScript runtime environment 
that runs on the V8 engine and executes JavaScript code outside a web browser.
<br><br>
Node. Js is a server-side platform built on Google Chrome Javascript Engine.
<br>
[ Node. js is not a programming language. Rather, it's a runtime environment that's used to run JavaScript outside the browser.]
<br><br>

To Check Node installed or not use command : 
<br>
<code> node or node --version </code>
<br><br>
### To Install Node.js : 
https://nodejs.org/en/download/

<br>

## npm  :

npm (Node Package Manager) is the package manager for the Node JavaScript platform. <br>
It puts modules in place so that node can find them, and manages dependency conflicts intelligently. 
<br>
It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.
<br>

npm is just like the personal assistant who give us what we want from big storage room and helps to maintain dependencies.
<br><br>

npm is automatically installed when we install node.
<br> To check installation use <code> npm --version </code>


## Typescript :

TypeScript is a programming language developed and maintained by Microsoft.
<br>
Typescript is the wrapper language of javascript. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
<br>
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
<br>
It is designed for the development of large applications and transpiles to JavaScript.

### To Install typescript compiler (Transpiler) : 
https://nodejs.org/en/download/
<br>
<code> npm install -g typescript   </code>
<br>
<br>
to check :  <code> tsc --version </code>

<br>
<br> 
To run typescript program :
<br>
<code> tsc filename.ts  </code>  (it will transpile it to filename.js)
<code> node filename.js  </code>
<br> 
<br>



## CLI :

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.
<br><br>

### To Install CLI : 
<code> npm install -g @angular/cli  </code>
<br>
<br>
to check : <code> ng --version  </code>


## Create one angular project to check environment setup :

- Create new project named as Application01 :
- <code> ng new Application01 </code>
- one directory gets created as Application01

<br><br>
- Go to that directory through cmd prompt and start project.
- <code> ng serve --o  </code>

<br>
By default our application gets started on port number 4200
<br>
Open browser and go to http://localhost:4200/ to check the output.
<br>
To change the port :
<br>
<code> ng serve --port 9900




