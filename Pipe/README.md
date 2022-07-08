# Pipes 
- The Angular pipes are used to Transform the Data. 
- Pipes takes data as input and formats or transform the data to display in the template.
- We use them to change the appearance of the data before presenting it to the user. 
- For Example, the Date pipe formats the date according to locale rules. 
- We can pass arguments to pipe and chain pipes. 
- The Angular also allows us to create the Custom Pipe.


## How to use Angular pipes

[inbuilt-pipe.component.ts](https://github.com/Girish-GAP/Angular/blob/main/Pipe/src_pipe/app/inbuilt-pipe/inbuilt-pipe.component.ts)                 |                 [custome-pipe](https://github.com/Girish-GAP/Angular/tree/main/Pipe/src_pipe/app/custome-pipe)

#### The syntax of the pipe is as follows :
          Expression | pipeOperator[:pipeArguments]


Where,

Expression : is the expression, which you want to transform

 |  :  is the Pipe Character

 pipeOperator  :  name of the Pipe
 
 pipeArguments  :  arguments to the Pipe

-----------------------------------------------

## Custome Pipe

- we can create our own pipe in Angular.

##### 1) Create new Pipe
                    ng generate pipe pipe_name


##### 2) Make sure entry of cutome pipe inside Angular Module
[app.module.ts](https://github.com/Girish-GAP/Angular/blob/main/Pipe/src_pipe/app/app.module.ts)

##### 3) Write Custome-pipe logic inside Transform method of pipe file.
[mypipe.pipe.ts](https://github.com/Girish-GAP/Angular/blob/main/Pipe/src_pipe/app/mypipe.pipe.ts)

##### 4) Use the custom pipe just as you use other pipes.
[custome-pipe.component.html](https://github.com/Girish-GAP/Angular/blob/main/Pipe/src_pipe/app/custome-pipe/custome-pipe.component.html)
