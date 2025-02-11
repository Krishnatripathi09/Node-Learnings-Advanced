***Any Application That can be written in JS will eventually be written in JS*** - Jeff Atwood-2007 (Founder-StackOverflow)


# What is NODE JS
- Node Js is a Cross Platform,Open-source JS Runtime Environment that can run on windows,unix,linux,macOs and many More And It was built using Chrome's v8 Engine. Initially JS Was built to run only on Browser's but with Node we can run JS Outside Browser.
Js needs a JS Engine to Run and it can-not run without JS Engine.
Where-ever there is JS there is also a JS Engine to Run the Code.

 
- It was developed in 2009 by Ryan-Dahl.Initially when Ryan started development of Node he started it with SpiderMonkey which is also a JS Engine on FireFox.

For eg: Google Chrome ---> v8
Firefox ---> SpiderMonkey
Safari ----> JavaScriptCore
Edge ----> Chakra 
So all these browser's have there own JS Engine to Execute JS Code.

But after starting the development he decided to drop the idea of development with SpiderMonkey and then he started the Development with chrome's JS (v8) Engine due to its superior performance and design( Performance Optimization,Modern Features,Non-blocking I/O Philosophy
) and He never looked Back.
And there was also a company __(Joyent)__ which was also working on something similar so they asked and hired Ryan to work on this Development by funding his Development.

When Ryan has Developed Node JS he had named it __Web Js__ But later he realized it's potential that it is bigger than web so he Re-named it as __Node JS__.

# Reason Why Node JS Was Created:-
Initially to create the servers there was this __APACHE__ HTTP Server and other servers and these servers were a blocking Server(***More understanding of this concept below What is Blocing Server etc.*** ).And Ryan Wanted to create a non Blocking server and that's why he created Node JS. The __Advantage__ of Non-Blocking servers is It Can handle multiple Requests With Lesser Number of threads.

# NPM - 
In 2010 when Node Js was also Being Developed So a Developer from Joyent(Isaac Z. Schlueter) created NPM which is a package manager for Node. It is a Registry where we can add  packages(for eg: Package for Images,Package for Time and Date,Package of Servers etc.). And all these packages are available on npm and it was very significant step in the success of Node Js. Node Js would not be as successful as it is now without _NPM_(It's Pacakage Manager).

# Windows Support :-
Initially when Node JS was built It was only built for Linux and MacOs and in 2011 the support for Windows also 
Came up which was lead by Joyent and Microsoft making it much more accessible with much bigger Developer's 
Community.

# 2012
In _2012_ Ryan left the project (handling Node Js) and handed it to _Issac_ (A developer in joyent) and
after he Left The pace of Development of Node JS Become very Slow. 
- So In 2014 a developer named Fedor created the fork of Node Js named _IO.js_ as Joyent was limiting the Releases of Node and the Development process also become Very Slow and it was not Actively managed.So some people started using and Maintaining _IO.js_.
- So In _2015_(Sep) These 2 different forks _Node Js_ and _IO Js_ Got merged and there was one committee formed which is Known as Actual
Node JS that we use.
- In _2019_ Again there is one community known as JS foundation and Node Js foundation were again Merged to Create a Open JS Foundation commmitte
 which took control over Node Js which now maintains Node Js.

# Node Js ON the Server
- A server is a remote or local computer (or a virtual machine) that runs software and services to handle client requests over a network. It processes requests, hosts websites, serves APIs, manages databases, and performs other computing tasks
**Exapmple**
- A web server (like Apache, Nginx, or Express.js) serves websites.
- A database server (like MongoDB, PostgreSQL) manages databases.
- A file server stores and shares files over a network

For Eg: When a client using  Internet write's Google.com and Hit's enter in Browser So Now Every Domain will Map to an IP (112.625.123.8) address of the server where that site is hosted On. So now this IP points to the server and server will serve the info which client has Requested.

# CHROME JS Engine(V8)
- Chrome's JavaScript engine is called V8. It's a high-performance engine that compiles JavaScript And it is written in C++.
To Confirm this go-to Browser and Search __v8 Github__ if you click on the first link of v8 ( https://github.com/v8/v8 )
and when you scroll down to Language Section you will see that 78% of code is written in C++ for JS Engine. And Other Languages are also there like JS itself, pyhton, TypeScript etc.
![Languages Used to Write V8 Engine ](./images/image.png)
We can also find the Reference for this at v8 Engines Official Website (https://v8.dev/)
***V8 can be embedded in Any C++ Application*** - So the creator of Node just embedded this v8 engine into a c++ Application and we call it Node Js.

![JS Engine Diagram](./images/Js-Engine.jpeg)

Node Js has V8 Engine + Other __SuperPowers__(will continue Below later) which are API's On server.So V8 Engine's only Job is to execute JS on server. But to get more Features Node JS has other powers along with v8 which is why it's called JS RunTime.

![Lnaguages used in Node Js](./images/image-1.png)

# Why v8 is a C++ Code.
Our Computers Understand's Binary Code (0 and 1's) and on top of Binary code we have Assembly Code and on Top of Assembly code we have Machine Code and on Top of Machine Code we have High Level Code (C++ etc.) On Top of high level language we have JS. so this JS engine takes this JS code and converts it into Machine Code (which is also known as low Level Code).
![Machine Code](./images/image-2.png) 

 And this is the JOB of our JS engine to convert the Code into Machine Understandable Code :
 ![V8 Engine Conversion Flow](./images/image-3.png)

If we go-to Repository of Node we will find v8 as an Dependency of Node. (https://github.com/nodejs/node/tree/main/deps/v8)


# ECMA Script -->
- ECMA Script is a Standard for JavaScript. It is a specification that defines the syntax and semantics of the JavaScript language. It is maintained by the ECMA International organization.It Basically defines the Rules that JS syntax uses. 
__For Eg__: If we say that (===) operator means strictly equal to operator so this rule was made by ECMA Script Standard Organizantion.
And Js Engine Follows these Standards while executing the code.
[ECMA SCRIPT Official Documentation Site](https://tc39.es/ecma262/)

# NODE REPL(Read,Evaluate,Print & LOOP)
The Quickest way to run our code in our machine after installing Node is to go to terminal and Type Node there and hit enter it will open Node REPL(command Line for Node). It first Reads the code, Then Evaluates the code then it Print's the output and then start Again (i.e Loop)
Inside the REPL we can write any JS code. 

# Global Objects in Node-JS
Global is an one of the superpowers which is given to us by Node-Js.(It is not given us by v8 Engine)
Global Objects are the Objects that are available in all Scope and we can can use them anywhere in Project. They provide core functionalities without needed to require them explicitly in our Code.

<ref *1> Object [global] {
  global: [Circular *1],formation.
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}

Global Objects and functions In Node.js
Window,this,self,frames all these keywords refer to Global Object in Browser's.
__globalThis__ Points to Global Object in all the Environments(Node JS, Chrome,Safari,Edge.)As different Environments had different keywords which point to global Objet in different environments. In 2020 ECMA Finalized __globalThis__ as the Object which will refer to global Object in all the Envrionments.

# Node.js Modules 
Any piece of code written in a separate file which is private to itself is a module.Each file in Node.js acts as a module by default. To enable interaction between modules, we use __module.exports__ and __require()__ (CommonJS) or __export__ and __import__ (ES Modules) for exporting and importing functionality.
To make two modules work together, we use module.exports to expose functionality and require (CommonJS) or import (ES Modules) to use them in other files.

require function is available to us anywhere in our Node Js Code. Whenever we run any program in Node Js require is always there just like global is always there similarly require is also there.So we can just require any file/module into another.

# Node.js Modules System
We can-not access private variables or functions which are there in a module in any other module  without the module in which they are present exporting them. 
Modules protects their variables and functions from leaking.So to access any function or variables into another module we cannot just require 
them in another file and use them. To use them into another module we have to first export our variables and functions.
For eg: In our sum.js we have a function to calculate the sum of 2 numbers but we cannot import the file sum.js in our app.js
and use calcuolateSum function directly instead to use them first we have to export them in our sum module then we can import them in our
app.js file
For eg:
function calculateSum(a,b){
    const sum =a+b;
console.log(sum)
}

module.exports =calculateSum; ***First we have to export the function calculateSum in our sum.js file then we have to import it in the file we want to use it  ***
for eg:- 
const calculateSum =require('./sum.js') //***Here we have imported the function calculate sum in our app.js and then we can use this function to calculate sum in the app.js file ***


If we had multiple things to import in our Sum.js file like a variable x and a function calculateSum then we can export it as an Object.
for eg:-
var a=120;
function calculateSum(a,b){
    const sum =a+b;
    console.log(sum)
    }
module.exports={
    a:a,
    calculateSum:calculateSum
}//***when exporting multiple things at once we can export it as an Object.***

Now again to use this export in our app.js we can import it as 
const obj = require("./sum.js") ***As we have exported our variables snd functions as an Object we can access them in an Object***
for Eg:
***we can use them as***
obj.calculateSum(a,b) and also 
obj.a

we can also do console.log(obj.x)

We Can also directly destructure our objects directly while exporting and then we use them without writing Obj
for eg:- const {calculateSum,x} =require("./sum.js") // imported them directly in our app.js with Object destructuring

and then we can use them without obj
calculateSum(a,b) and also 
we can also do console.log(x)

We can also directly export our function and variables directly withot as a key value Pair.
module.exports={
    a
    calculateSum
}

while importing a module using require we can avoid writing the extension for the file as It will assume that it is (.js) file
for eg: require("./sum") // ***here we do not need to write the extension.***


These type Of Import and Export of modules is Known as Common JS Modules(CEJS). There is one more type of import and export which is known as ES Modules
By default In our app we have commonjs modules in but when we want to use ES Modules we have to create a __package.json__ file and in that we have to specify type as module;
{
    type:"module"
} 


then we can use import and export directly instead of using require and module.exports
for eg: for importing we use
import {x,calculateSum} from "./sum.js"
and for exporting we can use export var x=10 or export function (){}

When commonJs requires the modules in a synchronous way means if we require any file then unless and until the file is not loaded it will not move to next file.
But ES Modules are loaded in an asynchronous way means if we import any file then it will not wait
for the file to be loaded it will move to next file and it will load the file in the
background.
Code in common JS modules Run in Non-strict Mode but in ES modules code runs in Strict Mode.

## Module exports
while exporting functions and variables in our modules when we write module.expports ={x,calculateSum}
so here the module.exports is a an empty object and we can check this by using a __console.log(module.exports)__
and it will return an empty object.

so while exporting we can also write like
***module.exports.x=x***
***module.exports.calculateSum=calculateSum***



# Exporting a folder as Module 
We can also export a folder as a module for eg: we have a folder called calculate and inside that we have 2 functions multiply and sum 
and which we are exporting and then importing separately in our app.js but we can create a __index.js__ file in our calculate folder 
and inside that we can import our sum and multiply functions from there files.
And then we can export them as from index.js file as One 
for eg: 
const { calculateSum } = require("./sum");
const { calculateMultiply } = require("./multiply");

module.exports = { calculateSum, calculateMultiply };

Here we have imported calculateSum, and calculateMultiply from there files and then we have exported them as a centralized export

Similarly we can import them in our App.js directly as folder 
for eg: const { x, calculateSum, calculateMultiply } = require("./calculate");

And then we can directly use them.
var a = 10;
var b = 20;
calculateMultiply(a, b);

calculateSum(a, b);
console.log(x);

And like this we can import a folder as a module .\
## Importing a json file
We can also use require to import a json file for eg: we have a data.json file which has data 
{
    "name":"Krishna",
    "age":25,
    "city":"Pune"
} 

then we can import it in our App.js file as ***const data = require("./data.json");***
and we can do __console.log(data)__ to view the data in the file

# Diving Into the Node JS GitHub Repo :-
All the code that we write inside a module is firts Wrapped in a function then executed. This is why we cannot access variables or functions outside a function without exporting them.It is not a normal Function it is  IIFE(Immediately invoked function expression) function
for eg:
 (function (){

 })();
 here we have a anonymous function and we are immediately calling it {()}. 
 So whatever code we write inside a module and when we __require__ that module node Js will take that code and will wrap it inside a function(IIFE) and then execute it. 

[IIFE](./images/IIFE.jpeg)

We need an IIFE Because:
1) It Immediately invokes the code.
2) It keeps variables and functions Safe.

__Question:__ How are variables and functions private in different Module?
Beacause of IIFE and require when we require a module it wraps that module inside an  IIFE and Then executes them.

__Question:__ How do we get access to module.export ?
Node JS passes module as a parameter to the IIFE in which the code is wrapped.
We can access module.export because it is a property of the module object which is passed to the I
IFE function when we require a module.

All the code that we write inside a module will have module and require functions inside them and it is given to them by Node.

Suppose we have module /xyz.js so node Js take our code wraps it inside a function(IIFE) and then it also add module and require functions.
for eg:-
(fucntion(module,require){
/xyz.js  // Code here 
})();

And after wrappping it inside IIFE it will pass it to V8 Engine then V8 Engine will execute that code and the variables and functions inside the IIFE will not interfere with other code.

__5 Step Mechanism Of Require__
When we do a require there are 5 steps that happen:
1) - Resolving the Module
In this step It checks what type of data is coming. Whether it is coming from a node_module, whether it is coming from .json file whether it is coming from ./localpath and accordingly it resolve the module.
2) - Loading the Module 
In this step file content is loaded according to file type.
3) - Wrapping the Module inside an IIFE
4) - Code Evaluation (In this step module.export happens)
5) - Caching Happens(Then the Module is cached)
    For Eg: If we have a module which is required by multiple different modules then the node will cache that particular module that is the code 
    for that file will run only once. And the node will cache that module means it will not keep running that module on every require it will just run it once and cache it then it will load the result for what ever file that module is required.


## V8 GitHub Repo
https://github.com/nodejs/node/tree/main/deps/v8

# Lib-UV GitHub Repo Path
https://github.com/nodejs/node/tree/main/deps/uv

## CJS and ESM Modules Documentation
https://github.com/nodejs/node/tree/main/lib/internal/modules


## LIB-UV and Async 
[LIB-UV](./images/Lib-UV.png)

Node-Js has an event-driven architecture capable of asynchronous I/O.
The event-driven architecture is based on the libuv library, which is a cross-platform library that provides
a set of APIs for asynchronous I/O operations.

 *** How Synchronous Code is executed in JS ***

 [Sync Code Execution example](./images//Sync%20code%20execution%20in%20Js.jpeg)
As we know JS is a single threaded language so it just has one call Stack.So whatever code we write in JS is executed in Call Stack.
JS Engine also has a Memory Heap whenever we have a variable (a=45678) so memory heap will allocate a place for variable __a__ and it will put the value of variable __a__ inside it. So Memory heap will store all the variables or functions that we have inside memory heap.

JS Engine also has __Garbage collector__. So suppose we have the variable __a__ and suppose later in the program we don't use __a__ any-further so the memory for that variable will be cleared. So JS __Garbage collector__ collects the unused variables and functions to clear the memory.
So Garbage Collector works in Sync with Memory Heap and keeps collecting the Garbage(Unused Variables and Functions) as the program runs.
For Eg: We have a piece of Code in above image so all the code will run inside the call Stack inside a Global execution Context. 
So when we run the code a Global execution Context is created and it is pushed inside the callstack and all our code is wrapped and executed inside the Execution Context. And all this code will be running in a synchronous single Threaded way that means it will execute one line at  a time.
So In our code our variables will be first stored inisde the memory heap and our function will also be stored inside the memory it will not be excuted as we have not called it yet. 
So Once we call our function in the next line with variable __c__ One more Function Execution Context is Created and this funcntion Execution Context is Pushed inside the callStack. We also have our GEC (Global Execution Context inside the CallStack) so the call stack will not push our __GEC__ out of the call Stack as the code is still Running.
So whatever we have in our Function Execution Context (FUC) will also Run and it will Run in Synchronous way Line by Line.

And result of our __a*b__ will stored in the memory Heap.Now the next line will be executed (return result) so whatever is there in memory heap of (FEC) will be returned back from the FEC(Function execution context) to the GEC(Global Execution Context).
[FEC to GEC](./images/FC_to_GEC.jpeg)

And Once the execution of Function Execution Context is finished it is removed from the CallStack
[FEC Removal from CallStack](./images/FEC_Removal.jpeg)

So the GEC(Global Execution context) has left at the the Line where the function was called will again Start Running and as multiplyFn has returned the value of result so the ressult will stored in c and that will again stored in the Memory heap where C was stored.
So Once the whole code is executed the GEC will also go from the call Stack and CallStack will becomes empty.
[CallStack Empty](./images/CallStack_Empty.jpeg)


 *** How Asynchronous Code is executed in JS ***
[Async_Execution](./images/Async_Execution.jpeg)
As we know JS is a synchrounus single threaded language and it cannot perform Asynchronous operations by itself So Here Node comes into 
Picture and it gives JS Engine these super powers (kind of ) to interact with system and do that.
[Node_Gives_Powers_to_JS](./images/Node_Gives_Powers_to_JS.jpeg)
 
So suppose we have a file which is on the server and JS engine wants to Read that File so JS engine needs to talk to OS to know the location of 
the file and all these location information will come from the OS so JS engine will have to contact the OS and get the location and data from the file. Now JS Engine does not have any capability to connect to database it will need some powers to connect to database.
Similary It also does not have the concept of time it will need to connect to OS to get the time info as operating system manages time.
So JS Engine will need some powers to get access to all these features and these powers are given to JS by Node-JS and Node JS is doing that by a library __LibUV__. LibUV is a library that provides a set of APIs for asynchronous I/O operations. So whatever task JS Engine needs to do which it cannot directly do it,It will offload that task to Lib-UV and Lib-UV will perform that task and will get back the Response and will give it back to V8 engine.

[Liv-Uv](./images/Lib-Uv.jpeg)

**How Liv-Uv Performs Asynchronous Operation**
[LIV-UV Async](./images/LIV-UV%20Async.jpeg)

With Lib-Uv Async I/O is made simple.
So whenever the v8 engine sees a API call or file read Operation the v8 Engine will offload that task to the Lib-UV and Lib-Uv will complete that task and will give the result back to V8 Engine. 

***Execution of code inside Lib-UV***
![Code execution Inside Lib-UV](<Execution Inside  Liv-Uv.jpeg>) 

So here we will how mixture of Synchronous and Asynchronous Code is implemented in JS

So JS Engine has a Memory Heap whenever we have a variable (a=45678) so memory heap will allocate a place for variable __a__ and it will put the value of variable __a__ inside it. So Memory heap will store all the variables or functions that we have inside memory heap.

So when we run the code a Global execution Context is created and it is pushed inside the callstack and all our code is wrapped and executed inside the Execution Context. And all this code will be running in a synchronous single Threaded way that means it will execute one line at  a time.

When the script starts, a Global Execution Context (GEC) is created and pushed onto the Call Stack.
Any variables and functions are stored in the Memory Heap, but functions are not executed until they are called.
2️⃣ Synchronous Code Runs in the Call Stack
Any synchronous operations (e.g., variable assignments, mathematical operations, function calls) execute immediately inside the Call Stack.
The Call Stack executes these operations line by line.
3️⃣ Encountering an Asynchronous Operation
When JavaScript encounters asynchronous operations (e.g., setTimeout(), API calls, file system operations), it offloads them to the Libuv (or Web APIs in the browser).
These operations do not block the Call Stack. Instead, they are delegated to the Libuv (or Web APIs), allowing the synchronous code to continue executing.

In our Async File We Have Below Code:

const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// synchronous
fs.readFileSync("./file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

//Asynchronous
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

//Synchronous
function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);

So here Code will start Executing Line By Line so first Our require() functions will be resolved then it print "Hello World" to the console
then it will store our variables in the Memory Heap then it move to the next line and it sees there is readFile operation but in synchronous way
__readFileSync()__  then it will offload that to Lib-UV  and it will block the main thread till it reads the file data and once it reads the file it will move to next line and print __"This will execute only after file read"__ to the console next it encounters a API call so it will offload that to LibUV and will move to Execution of next line then again it encounters the SetTimeOut Method then it will again offload that to Lib-Uv and move to the next line and it again sees a File Read opeartion which is a Asynchronous then again it will offload that to Lib-UV and moves to execution of the next line then it sees a Function so it will store that function in the Memory Heap and again will move to the next line and there it sees that function is called here so it again Created a Function Execution context and will start exctuing the function and after execution it will immediately return The Result and that result will again Printed to the Console.Now here till then LibUb will have completed the File Read operation till then so it will print the result of the File opearation to Dev Console and then again it would have finished API call which would take more time than file read opeartion so it will print the Data for API call to Dev Console and then it will print the Result of SetTimeOut Function to the console.

## Blocking Execution (Main Thread Blockded)
const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 -  Password Base Key Deravtive Function

// Synchronous Function - Will BLOCK THE MAIN THREAD - DON"T USE IT
console.log("========");
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is Generated");

setTimeout(() => {
  console.log("call me right now !!!! ");
}, 0); // it will only be called once call stack of main thread is empty

// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);

Here Above we have a function on cyrpto module (pbkdf2Sync) which blocks the main thread till the execution of the task is completed.The more the number of iterations  the more time it will take to complete the execution of the task and till the task is  completed it will not move to the execution of the next line of code.

Here the setTimeOut will only be called after 0ms once the call Stack of main thread is Empty. 

## Deep Dive Into  V8 JS Engine.
when we write some piece of code this code is given to V8 Engine So there are several steps that happen when we give the code to V8 Engine.
First Step:- So the the first step that happens is __Parsing__ .
so what happens inside parsing Stage is 
__Parsing__
1) Lexical Analysis: The code that we gave is broken down into tokens so this is known as Lexical Tokens. So before Analysis happens our code is broken down into Tokens.(It is also know as Tokenization. For eg: If we have var a=10 then one token will be var one token will a one token will be 10.)

2) Syntax Analysis: In syntax Analysis the tokens that we have broken down our code Into from that a AST(Abstract Synatax Tree) is Created.
So our Tokens are converted into AST in this STEP.This step is also known as __Parsing__.
So Below is the diagram for how an AST is created from our Code.
Site where you can find How AST looks (https://astexplorer.net/)
                                       [AST DiaGram](./images/AST%20.png)
                                       [AST2 Diagram](./images/AST2.png)

While Doing the Lexical Analysis when JS Engine is not able to break our code into Tokens it throws the error __Unexpected Token__ 
for eg: if we have declared a variable a like __var a = ;__ here it will throw __Unexpected Token__ error because the variable is not assigned with a value yet and it was not expecting the (=) token.

Also it throws a similar error __Syntax error__ when it is not able to convert out code into AST(Abstract Syntax Tree)

So once the AST is generated from our Code It is given to Interpreter.
__Interpreter__ :
There are 2 types of languages  __Interpreted__ and __Compiled__ :
| Feature                                | Interpreter                 |               Compiler  |
|-----------------|-------------|-----------|
| **Execution Process**          | Reads and executes code **line by line** |    Translates the entire code into machine code before execution |
| **Initial Execution Speed** | Faster (since it starts running immediately) |   Slower (compilation takes time) |
| **Overall Performance** | Slower (since code is interpreted at runtime) |      Faster (compiled code runs directly as machine code) |
| **Error Handling**            | Stops at the first error and reports it |      Reports all errors after full compilation |
| **Usage**                 | Suitable for scripting and dynamic languages |     Suitable for performance-intensive applications |
| **Examples**              | JavaScript (with an interpreter like V8), Python, PHP  | C, C++, Rust, Go |
| **Flexibility**            | Can execute code dynamically                       | Requires recompilation after every change |
| **Output**               | No separate machine code file; executes directly   | Produces an executable machine code file |


JavaScript's V8 engine(Name of Interpreter in Google's V8 Engine is __Ignition Interpreter__) includes both an interpreter and a compiler(Name of the compiler in V8 Engine is __TurboFan Compiler__), making JavaScript a __Just-In-Time (JIT)__ compiled language. This means that JavaScript code is initially interpreted for quick execution, but frequently used code is compiled into optimized machine code at runtime. This process, known as JIT compilation, improves performance by combining the benefits of both interpretation and compilation.

So the Job of the Interpreter is to convert our AST(Abstract Syntax Tree) to BYTE Code then our BYTE code is Executed.
When ignition interpreter is doing it's JOB that is converting the AST into BYTE code  it then recognizes some piece of code which is used frequently(again and again) So the Ignition Interpreter gives that which is frequently used to  our TurboFan Compiler and it then converts that code into optimized machine code so that piece of code can be executed very-very Fast Next Time.
So the Optimization of the code(HOT Code(which is used frequently)) is done which is used frequently in Our file. And then that optimized code is executed.

It also __Deoptimizes__ our code When needed for eg: when we have a __sum__ function which takes 2 numbers sum(a,b) and till we pass numbers into it then it will work Fine but Once we pass a string into the sum function instead of number sum("a","b") so JS will deoptimize this code and again Interpreter will take that code again and it will convert it to Byte Code and Run it.

And this whole Thing is Known as __JIT(Just In Time Compilation)__ in JS.

And also at the same time all these things are happening it also has __GarBage Collectors__ (Orinoco) (OilPan) (Scavenger) to collect unused variables and functions 


Earlier the Compiler that was used in V8 was Crank Shaft But Now it is Removed and we have Turbo Fan Compiler.

[V8-Engine-Architecture]
(/images/V8-Architecture.jpeg)

https://v8.dev/ Referenece for all the above Explanation
https://v8.dev/docs/ignition Ignit
ion Interpreter
https://v8.dev/docs/turbofan Turbo Fan Compiler

**Lib-UV and Event Loop:-**

In Lib-Uv There are 3 major Components
1) Event Loop
2) CallBack Queues
3) Thread Pool
Now we Know whatever code we write in JS File It is being run in V8 Engine But Asynchronous Tasks are offloaded to Lib UV.The Asynchronous I/O (Non Blocking I/O) is only possible in Node JS Only because of Lib-UV.<!-- Async / Non Blocking I/O Image !-->
Now let's Consider an Example How SYNC and ASYNC Code is Run in Node JS.
const fs = require("node:fs");// First Modules will be resolved
const https = require("https");// 
console.log("Hello World");// Then this code will Run
var a = 1078698; // Then This Code will Runvar b = 20986; // Then this will run 
https.get("https://dummyjson.com/products/1", (res) => {  console.log("Fetched Data Successfully");});
setTimeout(() => {  console.log("setTimeout called after 5 seconds");}, 5000);
//Asynchronousfs.readFile("./file.txt", "utf8", (err, data) => {  console.log("File Data : ", data);});
//Synchronousfunction multiplyFn(x, y) {  const result = a * b;  return result;}
var c = multiplyFn(a, b);
console.log("Multiplication result is : ", c);
Whenver the __JS Engine__ is executing Some Piece of code then all the Async functions that were given to __Lib-Uv__ for execution have to wait in __CallBack Queue__ once there Execution is Completed by Lib-Uv.As in Our case we have API calls,SetTimeOut Function so once there execution is completed by Lib-Uv they have to go back to Call-Stack to complete the synchronous code execution but if JS Engine is Busy with another task then these tasks will be Waiting in CallBack Queue of Lib-UV till JS Js Engine is empty.So In CallBack Queue there is Separate Queue for Timers there is separate Queue for API call's.
So once-the  __Call-Stack__ of JS engine is empty then only the further execution of Code from Lib-Uv Call Back queue will be done.
And to Achieve the execution of tasks waiting in CallBack Queue in CallStack We have Event Loop.The Job of __Event-Loop__ is to keep Checking __CallStack__ and CallBack Queue and if there are some tasks waiting in Call-Back Queue it checks the Call-Stack of JS Engine and  as soon as Call Stack is Empty It pushes the tasks waiting in Call Back Queue to Call Stack.For eg: When API call is completed in our code then the callback function will wait in the CallBack Queue and as soon as the __CallStack__ is Empty the Event loop will take the task from call Back Queue and will push it into Call Stack and v8 engine will Execute that task.
Suppose if there is a Race Condition when all the Async tasks are completed at the Same time and they are waiting in CallBack Queue for there Execution So Here in this Case __Event Loop__ have to Prioritize which code to be first implemented in Call Stack.
*** Working of Event Loop ***
Event Loop Run's in a Loop and it has different Phases in the Loop.There are 4 Major phases in Event Loop:
1) Timer
2) Poll
3) Check
4) Close

Event Loop starts in __Timer Phase__(All Timer Operaions (setTimeOut or setIntverals)). In this phase all the call backs which are set by setTimeOut or setIntverals are executed in this Phase. So Event Loop Prioritizes the Timer Call Backs First.
After that it Has  the __Poll Phase__(I/O CallBacks):In Poll Phase all the callbacks associated with I/O callbacks will be executed in this phase Suppose there are users who are making API call to our Server so these are incoming Connections.Or Suppose there are file read operations like (fs.readFile) so this callback function will be executed and will wait in the poll phase or If we are making API call's (http.get) then these  callback functions will be executed in Poll Phase. Most of the CallBack's will be excuted in Poll Phase.
After that it Has __Check Phase__:
In the check Phase all the call backs which are scheduled by __setImmediate__ and are waiting in CallBack Queue will be executed in Check Phase.
After that it Has __Close Phase__:
In this phase all the close Operations Happen For eg: If we have opened a socket and now we want to close the socket then the handling the socket on close will happen in Close phase.This phase is like a closing and cleanup things.
So Event loop Run's in this manner and at the same time it also keep's an eye on callStack to see if callStack is empty so that next task can be executed there.
So Here Event Loop Also Follow's an Inside Cycle which has
__Process.nextTick()__ and __Promise CallBacks__( suppose there is a promise and that promise is resolved so there is callback that needs to be executed.)

[Event-Loop](./images/Event-Loop.jpeg)

These 2 Inside cycles will be executed before Every Phase. So when event loop starts it will first go to _process.nextTick()_ and if there is any process.nextTick then it will execute that and then it will go to _promise CallBacks_ to see if there is any promise callBack waiting then it will execute that and then it will go to Timer Phase And Once it excutes Timer Phase it will again go to inside cycle and will go to _process.nextTick()_ and if there is any _process.nextTick_ then it will execute that and then it will go to _promise CallBacks_ to see if there is any promise callBack waiting then it will execute that and then it will go to next phase that is _Check Phase_ and will execute that and then again it will go to _inside cycle_ and then after execution of inside cycle and _execute_ Them.
_And This is How It Keeps Running._
All these different phases of Event Loop are maintained in Different Queues in CallBack Queue.
[Event-Loop-Working](./images/Event-Loop-Working.jpeg)

**Example-1**
const a =100;
setImmediate(()=>console.log("setImmediate));

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading C8")
});

setTimeout(()=>console.log("Timer Expired"),0);

function printA(){
    console.log("a=",a)
}
printA();
console.log("Last Line Of the File.")

[Event-Loop-Code-Execution](./images/Event-Loop-Code-Execution.png)

The code begins by declaring a constant a with a value of 100
**const a = 100;**
Next, the setImmediate function is encountered. This function is asynchronous, so the V8 engine offloads it to the libuv library. The associated callback function (let's call it A) is placed into the setImmediate callback queue, where it waits for execution because the V8 engine is currently busy. The code then encounters the fs.readFile function. libuv handles this operation by calling the OS to start reading the file. Meanwhile, V8 continues processing the remaining code.
Moving on, the code encounters the setTimeout function with callback function B and a delay of 0 milliseconds. Function B is added to the timers queue, where it waits for execution, as V8 is still busy with the current task.

The function printA() is called next, which outputs a = 100 to the console:
function printA() {
 console.log("a=", a);
}
printA();
Following this, the console logs "Last line of the file":

console.log("Last line of the file.");
At this point, all synchronous code has been executed, and the call stack is now empty. Now, the event loop begins its cycle. It first checks for any pending process.nextTick callbacks, but since there are none, it moves to the timers phase. Here, it finds B in the timers queue and executes it, printing "Timer expired" to the console. B is then removed from the call stack.

Next, the event loop moves to the poll phase. Finding nothing in the poll queue, it proceeds to the check phase, where A is waiting. The event loop then pushes A to the call stack, and it is executed, printing "setImmediate" to the console. Meanwhile, libuv finishes reading the file, and the associated callback function C waits in the poll queue. The event loop eventually picks up C, executes it, and "File Reading CB" is printed to the console. C is then removed from the call stack, leaving the stack empty once more.
Thus, the final output of the code is:

a = 100
Last line of the file.
Timer expired
setImmediate//
File Reading CB//
This demonstrates how asynchronous tasks are managed in Node.js, with the
event loop ensuring they are executed at the appropriate time.

Here Even If the File Read operation Happens in the poll phase and setImmediate happens in Check phase the File Reading DB will be printed last because it will be completed in the next cycle of event Loop as File Read Operation is still not completed till the setImmediate function is printed to the console.

**Example-2**

const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");

Here in this Code: -

As soon as the code execution starts setImmediate function will wait in a CallBack Queue of setImmediate().
Now the promise.resolve has a Priority Queue and similarly there is different Queue for process.nextTick()
so the Call back for promise.resolve() will be scheduled in the Queue.
And Code moves to next Line which is a file Read operation so it will also take time so the code moves to next line so 
setTimeout() will be scheduled in the timers queue and as we have 0 timer it will be executed immediately and as we have a callback function 
c so the callback function will be scheduled in another Queue we can call it as __Timer Queue__.
[Code_Execution](./images/Code_Execution_Inside.jpeg)

Now the code execution will move to next line which is process.nextTick() so it will also not wait for anything and it will go inside it's Queue.

Now V8 Engine will continue executing the synchronous Code so a=100 will be executed after that.
Last Line of the Code will also be executed after that.
So next the Event Loop will Find that CallStack is Empty the Event-Loop will first go to Process.nextTick() and will execute that 
If there were multiple process.nectTicks() then it will execute them all.
So next it will Print __process.nextTick__ to the console. and nextTick Queue will also beocme empty and it will be removed from __CallStack__
Then it will go to the Promise Queue and will execute the callback function of the promise.
So next it will print __Promise__ to the console. and Promise queue will also become empty and it will be removed from __CallStack__

Next it will go to the Timer Phase and it will check the timer Queue so __Timer expired__ will be printed to the console and it will be removed from the CallBack Queue

Next it will go to process.nextTick() and promise callbacks and it will find that there are no operations to be completed so it will then go to 
the poll Phase.
And as the File Reading Operation is not completed still then there will be nothing in the Poll Queue. So it will again move to the next phase 
and before that it will again check process.nextTick() and promise callbacks and it will find that there are no operations to be completed so it will then go to the check phase and there it will find the setImmediate() callback function so it will Quickly execute that and then it will move to the next phase again but as there are not tasks to be completed it will wait for file Read Operations to finish it will wait.
And Once the File Read Operation is Finished the the file Read CallBack function will be waiting in the call Back Queue.
So next the Event Loop will find that Call-Stack is Empty and it will quickly push the CallBack function in CallStack and it will execute It.
So next it will print __File Reading CB__ to the console and it will be removed from the
CallBack Queue as well as call Stack.

## Code Output
a = 100
Last line of the file.
Process.nextTick
promise
Timer expired
setImmediate
File Reading CB


***Event Loop Waits at The poll Phase** 
When event loop is Idle that is it does not had any work to do(Like in above example when all the execution was completed and File read Operation is still going on) so in that Idle Phase it waits at the poll Phase. 

***Example for Event loop Waiting***

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log(" 2nd setImmediate"));

  console.log("File Reading CB");
});
process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");

Sequence Of Execution:-

---Last Line Of the File,
--nextTick
--Promise
--Timer Expired
--setImmediate
--File Reading CB
--2nd nextTick
--2nd nextTick
--2nd Set Immediate
--2ndTimer

*** Code Example ***
const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});
process.nextTick(() => {
  process.nextTick(() => console.log(" inner nextTick"));
  console.log("nextTick");
});

console.log("Last line of the file.");




The code begins by importing the fs module:
const fs = require("fs");
Next, it schedules several asynchronous tasks:
 setImmediate This function schedules a callback (let's call it A) to be executed
in the next iteration of the event loop. The callback prints "setImmediate" to
the console.

setTimeout This function schedules a callback (let's call it B) to be executed after a delay of 0 milliseconds. The callback prints "Timer expired" to the console. Promise.resolve This creates a promise that is immediately resolved with the value "promise". The .then method schedules a callback (let's call it C) to be executed once the promise is resolved, which prints the resolved value to the
console. fs.readFile This function initiates an asynchronous file read operation. Once the file is read, its callback (let's call it D) prints "File reading CB" to the console. process.nextTick This function schedules a callback (let's call it E) to be executed on the next iteration of the event loop, before any I/O tasks. The callback itself schedules another process.nextTick callback (let's call it F) and prints "Process.nextTick" to the console. The second process.nextTick callback prints "inner nextTick" to the console. console.log("Last line of the file.") This line of code prints "Last line of thefile." to the console.Execution FlowSynchronous Code Execution:The constant fs is assigned the fs module.The setImmediate , setTimeout , and Promise.resolve functions are scheduled.process.nextTick schedules its callbacks.
console.log("Last line of the file.") is executed and printed to the console. Event Loop Cycle:Microtasks Phase: The event loop first processes process.nextTick callbacks. It executes E, which schedules F and prints "Process.nextTick". Then, F is executed,
printing "inner nextTick". Next, the promise callback (C) is executed, printing "promise".

Timers Phase:
The event loop moves to the timers phase and executes the setTimeout
callback (B), printing "Timer expired".
Poll Phase:
In the poll phase, the event loop handles I/O operations. It finds that
the file read operation is complete and executes the fs.readFile
callback (D), printing "File reading CB".
Check Phase:
The event loop then moves to the check phase and executes the
setImmediate callback (A), printing "setImmediate".

////Last line of the file.
Process.nextTick
inner nextTick
promise
Timer expired
setImmediate
File reading CB

**Snchronous Code Execution:**
const fs = require("fs"); Imports the fs module.
setImmediate(() => console.log("setImmediate")); Schedules callback A.
setTimeout(() => console.log("Timer expired"), 0); Schedules callback B.
Promise.resolve("promise").then(console.log); Schedules Promise callback.
fs.readFile(...) Starts asynchronous file read operation. Inside the
callback, the following occurs:
setTimeout(() => console.log("2nd timer"), 0); Schedules callback C.
process.nextTick(() => console.log("2nd nextTick")); Schedules callback
D.
setImmediate(() => console.log("2nd setImmediate")); Schedules callback
E.
console.log("File reading CB"); Logs "File reading CB" .
process.nextTick(() => console.log("Porcess.nextTick")); Schedules callback
F.
console.log("Last line of the file."); Logs "Last line of the file." 

**Microtasks:**
The microtasks queue is processed first, so callbacks F (from process.nextTick ) and the Promise callback are executed in this order.
"Porcess.nextTick" is logged.
"promise" is logged from the Promise callback.
 Timers Phase:
The event loop processes the timers queue next, executing callback B
(from setTimeout with 0 milliseconds delay).
"Timer expired" is logged.
 setImmediate Phase:
The event loop then processes the setImmediate callbacks. Both A and E
are executed:
"setImmediate" is logged.
"2nd setImmediate" is logged.
 Poll Phase:
During the poll phase, any remaining I/O callbacks are processed. In this
case, callback C (from fs.readFile ) is executed, which includes:
Logging "2nd timer" from callback C.
Logging "File reading CB" from the fs.readFile callback.


***One FUll Cycle of Event Loop is Known As Tick***
There are more phases in Event Loop. when suppose there are some I/O callBacks which cannot be handled in poll phase so they will be handled in next phase before poll phase which is known as __callBack Phase__

There is also a Phase known as __Idle,Prepare Phase__ which is only used Internally.

## Thread Pool :-
Thread is Basically like a container where we can run some piece of code and if we want to block the thread we can block it.
Whenever there is an Asynchronous task,V8 offloads it to LibUv.
For Example : when reading a file libUv,uses one of the threads in its thread pool. The file system(fs) call is assigned to a thread in the pool,and that thread makes a request to the OS.While the file is being read, the thread in the pool is fully occupied and cannot perform any other tasks. Once the file reading operation is complete, the engaged thread is freed up and becomes available for other operations. For Instance
,if we are performing a cryptographic opeartion like hashing,it will be  assigned to another thread. 
**There are certain operations for which libUv uses the thread pool**
for eg: When we perform tasks like __file System(fs)__,__DNS lookups__ or __cryptographic__ methods or some user Specified Input, libUV uses thread Pool.
DNS (Domain Name System) lookup is the process of translating a human-readable domain name (e.g., google.com) into a machine-readable IP address (e.g., 142.250.190.14).

***Default Size of thread pool in Lib-UV is 4. UV_THREADPOOL_SIZE = 4;***
So suppose if we make 5 simultaneous file reading calls. what Happens is that 4 file calls will occupy 4 threads,and the 5th one will wait until
one of the threads is freed up.
We can also change the __SIZE of Thread POOL__ by setting the __UV_THREADPOOL_SIZE__ environment Variable
for eg: __process.env.UV_THREADPOOL_SIZE = 8__;

 __IS Node JS Single Threaded or Multi-Threaded ?__.
then ask  when? beacuse it depends what type of code we want to run as When we are dealing with synchronous code then Node JS is Single Threaded but if we are dealing with Asynchronous tasks then Lib-UV utilizes LibUV's __THREAD-POOL__ making it multi-Threaded.

const crypto = require("node:crypto");
const fs = require("fs");
// Async Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1- First Key is generated");
});

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 2: - Second Key is generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 3: - third Key is generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 4: - fourth Key is generated");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(" 5th: - Fifth Key is generated");
});

So If we run Above piece of code the first 4 functions will be implemented immediately as __Thread Pool__ By default has 4 threads so the first
4 functions will be executed immediately and the 5th one will wait until one of the threads is freed up. 
Also we can increase the Size of thread pooll by setting __process.env.UV_THREADPOOL_SIZE = 2;__ to 2 so only 2 taska will be completed in one go and the other will wait till the one of the thread is free.

**So Suppose there are some Users who are Hitting API's on Server so Does the API's Use Thread Pool ?**
No The API's Do not use thread pool. So suppose a users makes an API call then the user is requesting to make a connection so to listen to incoming requests we need a socket and if there are multiple incoming requests then there will be multiple sockets and each socket has socket descriptor (file descriptor(FDS)). Now suppose we want to write some data from this incoming API request so that means it a blocking operation as we want to write data so we cannot do anything else on that request. So If we have multiple connections we might need multiple threads.
So for 1000 operations we will need 1000 such threads so instead this scenario is handled using e-poll(Linux)(Scalable I/O event Notificaion mechanism)/K-Queue(Mac-OS).
so for multiplt incoming resquests we can create a e-poll-descriptor and it is a collection of multiple socket descriptors.

## Creating a Server:
**What is A Server**
The term "server" can refer to both hardware and software, depending on the context.
- Hardware A physical machine (computer) that provides resources and services to other computers (clients) over a network.
- Software An application or program that handles requests and delivers data to clients.

Suppose we have a hardware where we have stored Data which anybody else wants to access so we need to run an application on that hardware which 
can handle those incoming requests coming to that particular hardware,so we will need an application which will listen to all the incoming requets and will send appropriate response accordingly what the user is requesting and for that we will need an application which is running on an OS(operating system).As in our normal system we cannot run any application program without OS.

So here we can refer to application running on a Hardware as a server or to the Hardware on which application is Running as server.
For eg: when we say we are moving our App to AWS that means AWS is maintaining a Hardware and it is giving you that hardare resource via a application so that you can run your app on on that Hardware.

**SO What is the Diff between a Our Computer and a server**
As from the definition we understood that server is a remote compouter running some software program inside an OS. Similarly our system is also 
a computer running some software program inside an OS. So on Ground Level there is No Difference between our SYSTEM and Remote Server.
But there are some Limitations in our System:

When we take a Server from AWS which (we call an EC2 Instance).So similarly we can make our Laptop as a Server 
But there are some Limitations in our System:
 **Scalability**: Our System is not scalable. We can't just add more RAM OR CPU to our System. We can't just add more Hard Disk Space to our System But in case of AWS we can just click some buttons and add more 
 RAM or CPU or Hard Disk Space to our System.
 **Always Online**: AWS Servers are always Running,Always Online with 24*7 Internet Coonectivity with no powert Outage but In our case we cannot keep our Laptop Running 24*7 or cannot provide Internet Connectivity And Electricity 24*7.

When we say we are creating a Server Application (Node Application) It means we are creating an Application which can Listen to Incoming Requests
and can send appropriate response accordingly what the user is requesting.

When someone Says he has purchased a Server It means he has purchased a Remote Computer which is Running a software Program.

__Client-Server Architecture__
[Client-Server-Architecture](./images/Client-Server-Architecture.jpeg)
The term "client" refers to someone accessing a server. Imagine a user sitting at a computer wanting to access a file from a server. For this, the client needs to open a socket connection (not to be confused with WebSocket). Every client has an IP
address, and every server has an IP address as well. The client could be a web browser.

To access the file, the client opens a socket connection. On the server side, there should be an application that is listening for such requests so this application is known as server sometimes and this application retrieves the requested file, and sends it back to the client.

There can be multiple clients, and each client creates a socket connection to get data. After the data is received, the socket connection is closed. If the client needs to make another request, a new socket connection is created, data is retrieved, and the connection is closed again.

Sockets operate using the (TCP/IP protocol Transmission Control Protocol/Internet Protocol).

**What Is a Protocol**
A protocol is a set of rules that define how computers communicate with each other.Protocols determine the format in which data is sent between devices.
(FTP File Transfer Protocol): Used for transferring files. (SMTP Simple Mail Transfer Protocol): Used for sending emails.

**Why Internet is called WEB**
Suppose There are so many people who have there own Computers and all those computers are connected to the internet.
If everyone is connected to Internet then every computer will have an IP Addres, which is a way to locate and specify that computer(like an address for computer). SO with that IP they can connect to other IP and like this Anybody can connect to Anyone and a structure like this looks like a web so that is why it is known as web. 

When we make a Server request so the data that we have requested from the server is not Sent in One go But it is sent in Packets.
Each packet has a header and a body. The header contains the source and destination IP addresses, the
sequence number, and other information. The body contains the actual data.

Stream means Connection and Buffer means sending the Data in Chunks.

The language that server and client speak to communicate with each other is defined by __HTTP__ protocol.
__TCP/IP__ protocol is the protocol for sending the data Over an IP.So the data transmission is controlled by TCP/IP protocol.

Whenver we type a domain it is mapped to an IP. So when we type some domain name in browser seacrh it is mapped to an IP by DNS
(Domain Name System) and then the browser sends a request to that IP and the server responds with the requeted Data.
When users are requesting some data and we have 2 different HTTP servers (means 2 different node application running on a Server)
so we know to which server we have to go with the PORT Number. 
We can have multiple node applications running on different ports so to communicate with the particular server we have to go to that particular port.

Suppose in our server we have a React application running on our server on PORT 3000 and we also have our Node application running on Port
3001 so we can map our domain name (namastedev.com/)to port 3000 but when there is (namastedev.com/api) we can map it go on port 3001:

On our server we can deploy all our application on a single server. Or we can have different part of our application running on different servers
So we can have our React application running on one server and our Node application running on another server.

There can be multiple users which can come to our serverrs to request some data etc.
So suppose a user came and requested the URL(namastedev.com) so the server will make a socket connection and gets back the response of namastedev.com and website will rendered on Users system and the socket will be closed.
And suppose we go to some other page then server will again make a socket connection and will serve the Data Back and will close the Connection 
Again.
Similarly like this suppose there are so many users who are requesting the Data from server, creating a socket connection and closing the socket connectio.
Web socket is a new concept in which suppose a user has made a connection then that connection stay's for a long time it is not closed 
Instantly It will hold that connection and client and server can talk to each other which is open for a long Time.
But In General Case we use socket only.Web Sockets actually use More Resource than normal Sockets.

To creat a server we have a module called "http" which has method ___createServer__ 
to import core modules of nodeJS we can use require(node:http) or we can give just require(http)

Here we have imported our module http 
and then we have created an instance of our server 
Then we have done server.listen to make our server listen to incoming requests.

const http = require("http")
const server = http.createServer();
server.listen(3000)

So with just above piece of code we have created a Server which listens on Port 3000;
To to handle the logic of incoming requests on our server. Suppose someone is making a request to homepage of our server so we can 
handle that with function in our createServer function
const server = http.createServer((req,res)=>{
res.end("Hello Requester")
});

so when someone makes a request on our server we can use __res__ and on our res we have a method __end__ to send the data back
to the client.
Inside the __res.end()__ we can pass any info that we want to sent to the client

We can check the response of our server at "http://localhost:3000/" as our server is running on Localhost at port 3000
so once we go to this URL in Browser we will get the response "Hello requester"

and we can also deploy this on our AWS server and using the IP of the server we can get the response back from the server again on AWS.

Here our URL was same so we do not have to do DNS mapping.

We can also add the custom Path in our URL so when some one tries to access that it will show a different Response.
const http = require("http");

const server = http.createServer(function (req, res) {
  if(req.url==="/secretData"){
res.end("There is secretData Don't Tell Anyone 🤫")
  }
  res.end("Hello requester");
});

server.listen(3000);


When we create a server using the http module so there are many issues associated with this module. It is kind of like a low level language.
So instead we use a wrapper round the http module something known as Express to make our Server.
Express is A FrameWork which is built on Top Of Node JS.

So instead of using http directly as it will very complicated to handle request and response.
We can use Express which is a wrapper around http module and it is very easy to do thing while using Expresss.
 
 So next we will be using express to createServers not the native node Js Modules.
A client is someone who wants to access the files from our server

## DataBase :
A __Database__ is a collection of data organized according to a conceptual structure describing the characteristics of these data and the relationships among their corresponding entities and it supports one or more applications.

And on Top of our DATABASE there is layer of DBMS.
A __Database Management System (DBMS)__ is a software system that provides an interface for users and applications to interact with a database efficiently while ensuring data organization, security, and integrity.

__Types Of DB__
Relational DB :MySql,PostGresql
NoSQL DB :MongoDB,Cassandra
In Memory DB:Redis
Graph DB:Neo4j
Distributed SQL DB:Cockroach DB
TimeSeries DB: Influx DB
OO DB:Db4o
Graph DB:Neo4j
Hierarchial DB: IBM IMS
Network DB: IDMS
CLoud DB :Amazon RDS

__Relational DataBase__
A Relational Database is a collection of data organized into structured tables, where relationships between the data are defined through keys, and data integrity is maintained using constraints.

__NoSQL DataBase__
A NoSQL database is a distributed, non-relational database system that provides flexible schema design, horizontal scalability, and is optimized for large-scale data storage and high-speed access.

**RDBMS**
 __EF Codd.__ has set 12 rules numbered (0-12) so actually 13 Rules for a DataBase to be called as Relational DataBase.

__MySQL__
was developed by a scientist named __Michael Widenius__.He was into Relational Databases.The name __"MySql"__ comes from his first Daughter's name, __My__.He also named another database after his second daughter __Max__ calling it __MaxDB__ and he named a fork of MySql after his third Daughter,__Maria__ resulting in __MariaDB__.


**PostGreSQL**
PostgreSQL was created by Michael Stonebraker, who was working on a project called Ingres at the University of California. He later began developing a project called Post Ingres, which eventually evolved into PostgreSQL because it utilized SQL (Structured Query Language) in the project. SQL is essential for interacting with relational databases, as it provides a structured way to query and manage data.

**NoSQL and MongoDB**
NoSQL databases can be classified into four main types:
1) Document Databases
2) Key-Value Databases
3) Graph Databases
4) Wide-Column Databases
5) Multi-Model Databases

MongoDB, a popular NoSQL database, was created in _2009_ around the same time as Node.js. Its a coincidence that both have gained popularity together, as MongoDB works exceptionally well with JSON and JavaScript objects. MongoDB was developed by a company named __10gen__, and the name "MongoDB" comes from the _word_ __humongous__ reflecting its ability to handle massive amounts of data. The company later renamed itself MongoDB Inc., which continues to manage MongoDB today. MongoDB is known for significantly increasing developer productivity.


# Difference Between Relational and NoSQL Databases

## 1. **Definition**
- **Relational Database (RDBMS):** A database that stores structured data in tables with predefined schemas and uses SQL for querying.
- **NoSQL Database:** A non-relational database that stores unstructured or semi-structured data in various formats such as key-value, document, column-family, or graph-based structures.

## 2. **Data Structure**
| Feature | Relational Database (RDBMS) | NoSQL Database |
|---------|----------------------------|---------------|
| **Data Storage** | Tables with rows & columns | Documents, key-value pairs, graphs, or column stores |
| **Schema** | Fixed schema (structured) | Schema-less (flexible structure) |
| **Relationships** | Enforced using foreign keys | Embedded or referenced documents |

## 3. **Scalability & Performance**
| Feature | Relational Database (RDBMS) | NoSQL Database |
|---------|----------------------------|---------------|
| **Scalability** | Vertical scaling (scale-up) | Horizontal scaling (scale-out) |
| **Read/Write Speed** | Slower for large-scale operations | Faster due to distributed architecture |
| **Performance Optimization** | Indexing, normalization | Sharding, replication |

## 4. **Query Language**
| Feature | Relational Database (RDBMS) | NoSQL Database |
|---------|----------------------------|---------------|
| **Query Language** | SQL (Structured Query Language) | No standard query language (uses JSON-based queries, APIs) |
| **Data Manipulation** | Joins and complex queries | Denormalized data for faster reads |

## 5. **ACID vs. BASE Compliance**
| Feature | Relational Database (RDBMS) | NoSQL Database |
|---------|----------------------------|---------------|
| **Consistency Model** | ACID (Atomicity, Consistency, Isolation, Durability) | BASE (Basically Available, Soft state, Eventual consistency) |
| **Transaction Support** | Strong transaction support | Eventual consistency for scalability |

## 6. **Use Cases**
| Feature | Relational Database (RDBMS) | NoSQL Database |
|---------|----------------------------|---------------|
| **Best For** | Structured data, transactions (banking, e-commerce) | Unstructured, semi-structured, or large-scale data (real-time analytics, IoT, social media) |
| **Examples** | MySQL, PostgreSQL, Oracle, SQL Server | MongoDB, Cassandra, Redis, Neo4j |

## 7. **When to Use What?**
- **Use RDBMS** when data integrity, complex relationships, and structured queries are needed.
- **Use NoSQL** when high scalability, flexibility, and fast data retrieval are priorities.

### **Conclusion**
Both databases have their advantages and trade-offs. The choice depends on the application requirements, data complexity, and scalability needs.


## MongoDB
MonogDB is a document oriented database program classified as NoSQL.
It is a cross-platform, document-oriented database program that stores data in JSON-like documents, making it
a great choice for handling large amounts of semi-structured data.

When we go to MongoDB we can login with our Account and select create a __Cluster__.
A cluster in MongoDB is a collection of servers that work together to store our data. 
Think of it as a big storage unit where We can create multiple databases inside it.

__Database in MongoDB__ = A Collection of Collections
Inside a cluster, We create a database (just like in SQL), but instead of tables, MongoDB uses collections.

__Collections in MongoDB__ = SQL Tables
Collections hold documents (which are similar to rows in a table, but stored in JSON format).

## SQL vs MongoDB Comparison:

## **1. Structural Differences**

| SQL Term     | MongoDB Equivalent  |
|-------------|-------------------|
| Cluster     | Cluster (Same) |
| Database    | Database (Same) |
| Table       | Collection |
| Row         | Document (Stored as JSON) |
| Column      | Field (Key-Value Pair) |
| Schema      | Dynamic (Flexible Schema) |


Imagine We have a MongoDB cluster for an e-commerce project:
We create a database called EcommerceDB.
Inside this database, We create collections like Users, Products, and Orders.
Inside the Users collection, We store documents (JSON objects) like this:


A MongoDB cluster is not just a database—it is a group of servers that store multiple databases. Inside these databases, We have collections (which act like tables), and inside collections, We store documents (which act like rows but in JSON format).


__Go to the Mongo DB Wesite__
__Create a free cluster__
__create a User__
__Get the connection string__

To connect to Our Cluster we will need a Connection String
"mongodb+srv://<Database_Name>:<db_password>@nodelearning.uv4ox.mongodb.net/"

Here we have to replace our db_password with the real Database password.
To See our DataBase that is what is inside it, it's Collection,Documents etc.
For that We will use the MongoDB Compass to see our Database.
So to Do that we have to Install Mongo DB COmpass

After Installing The Mongo DB Compass click (+) Icon for New Connection then Inside the URI give the same URL that we have used in our connection string and also replace the password with original password.

After creating the Cluster we can have Multiple DataBases inside the Cluster.

For Eg: We have created a Cluster named NodeLearning and Inside and then we connected to that cluster using __Connection String__ then we
have created a Database named __NewDataBase__ inside the Cluster __NodeLearning__. Now we can create a __Collection(Table)__ and insert a __document__ inside that collection. A _document_ is like a JS Object / JSON and we can add a document Directly in our collection.

When we Insert a document inside our collection and do not specify any ID then MongoDB creates a Id Automatically by itself for that Document.

**Connecting our Node Js Application with DataBase**
Till now we crated the collection and document inside our DataBase Manually but now we can do it through our Node Application and to do that we 
will need a npm Package  known as MongoDB.
We can get the Module that is required to connect our app to MongoDB from Npm.
That  package is known __MongoDB__. It is a connector for node  js and Mongo DB.

Npm is a repository which stores these packages and we can install any package that we need to in our project.
So whatever package we need we need to install it first in our local then we can use it.
Earlier we were using "fs" so we did not need to install it as it is a native module, It is Managed by Node.
But the package MongoDB is not managed by node it is managed by mongoDB and it is available on NPM.
So we need to install it first in our project then we can use it : Run __npm install mongodb__ or __npm i mongodb__ to install the package.
(i) is just shorthand for install so we can run of these two commands to install MongoDB

**Installing MongoDb**
When we are installing a package in our application locally from __npm__ we need to have a __package.json__ in our application which can be generated using __npm init -y__.
and after creating the __package.json__ file we can run __npm i mongodb__ to install mongodb locally in our project.

So when we ran the command __npm i mongodb__ then the request went to npm js server it fetched the code(package) named mongodb 
and it put that package in our __node_modules__ folder.
And now if we require __mongodb__ in our project it will work and will not throw any error.

It has also generated the file "pacakage.lock.json" and node_modules folder in our app.
There might be some files which will be showing error in our node_modules folder
so we can create a __.gitginore__ file and inside that we write node_modules so that it will not be scheduled for git push and git will ignore that file for any errors.

## Connecting to Database :
When installing the mongodb package in our App we can go to "__https://www.npmjs.com/package/__" and search for mongodb package
and after installing we can connect to DB by using the connection code in mongo db Doc. The link for which is available on 
npm server (https://www.npmjs.com/package/mongodb)
 adn then we have to go the API of the version we have installed in our project. To check the version in our project we can run 
 (npm list mongodb) and it will show the correct version. and from there we can get connection code to connect our app to 
 DataBase.


So to connect to our DataBAse we have create a file __database.js__ and inside that we have imported MongoClient as a named import 
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://NodeUser:NodePassWba678@nodelearning1.mngbs.mongodb.net/";
  const client = new MongoClient(url)

And then inside the url we have passed the DBConnection URL that we have created using our UserName and Password.
And then we have created a new instance of MongoClient using __new__ Keyword and passed our url into it.

Next we have to create a variable named dbName inside which we will pass the name of our DataBase(NewDataBase)
const dbName = "NewDataBase";

Next we have to create a async function inside which we will use client.connect method to connect to our DataBase.
This method is a promise so we have to use async keyword before the function name.


const client = new MongoClient(url);

const dbName = "NewDataBase";

async function main() {
  await client.connect();
  console.log("Connection to DB is SuccessFul :-");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const findResult = await collection.find({})
  console.log(findResult);
  return "Connected SuccessFully to DataBase : 🙂";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

 once we write tha above code and pass it the correct parameters into to it and run the file we will see "Connected successfully to server" and done.
 If it could not connect to server due to some issue it will throw error and that error will be logged to console.

 **Finding the Data**
 so when we have connected to DataBase  we can use .find
 const findResult = await collection.find({}).toArray();
  console.log("Found Data =====> "findResult);

 Now we can also get the data from the Database that we had created manually using find(.find) method on our Collection(Table)
 and then we have to convert that data to Array because If we do just __find__ then it will not return the data beacuse find method is just a 
 cursor which is pointing to the data so to get the Actual data we have to convert it to an Array.
 and then we can see the actual data when we console.log() It.

 A cursor(only .find()) is like a stream of data. If you log it directly, you won't see the actual data but an object reference to the data. You need to extract the documents using .toArray() method.

We can Also Use insertOne method on our collection to insert the data into our collection.

For eg:

 const data = {
    firstName: "Tibbhi",
    lastName: "Titthi",
    city: "Basti",
    PhoneNumber: "+919284640248",
  };

  const insertResult = await collection.insertOne(data)
console.log(insertResult)

So while doing Insert operation we don't have to specify any id as Mongo will automatically create the Id field.

We can also update our document(record) updateOne method available in mongo so like in below example i have used updateOne method on our collection and set the lastName ="Titthi" field to lastName = "BillPoi"

 const updateResult = await collection.updateOne(
    { lastName: "Titthi" },
    { $set: { lastName: "BillPoi" } }
  );
  console.log(updateResult);

  The __updateOne__ method is coming from our mongodb driver that we have installed in our Project.

  We can also use countDocuments method on our collection to get the count of Records on our User Collection.

    const countResult = await collection.countDocuments({});
  console.log("Count of Results in User Collection====>", countResult);
  So we can see that countResult is giving us the count of all the records in our User

We can also filter our collection using a particular field value  on our collection to get a particular record with that filter
for eg: 
const result = await collection.find({lastName:"BillPoi"}).toArray();
console.log("Result is=====>",result)
So we can see that result is giving us the record with lastName = "BillPoi" from
our User Collection.

But In our project we are not going to use 'mongodb' default library but we will use 'mongoose' instead.
mongodb is not a native library of node js but it is a native library of mongodb.


## Season-2 NODE-JS



## NODE - JS  Practice From Basics
Created a Node Js Server which listens on port (3000)
"const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getData") {
    res.end("Data Chahi Re 🤨");
    return;
  } else {
    res.end("Sun raha hu be: :|");
  }
});
server.listen(3000);

Here first installed the node js and imported the built in http module from node and then I Created an http server using __http.createserver()__ method available on http module I created a server and which takes a callBack function with 2 parameters 
req (request) → contains details about the incoming request (like the URL).
res (response) → used to send a response back to the client

Inside the Callback function i Checked if requested url is "/getData" if that is true then sent a response using native node method res.end
"Data chahi Re" Other wise if requested url is not that then sent a response "Sun Raha hu be :|" 
- Finally i started my server on port 3000 using __server.listen(3000)__ to listen to incoming http responses.



