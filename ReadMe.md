
## NODE Learnings Season-2
SoftWare Development Life Cycle(Water-Fall Model)
   ⬇️  Requirements Gathering & Analysis  
   ⬇️  System Design  
   ⬇️  Development (Coding)  
   ⬇️  Testing  
   ⬇️  Deployment & Integration  
   ⬇️  Maintenance & Support  


__Requirements Gathering & Analysis__

📌 Who is involved? Product Managers, Business Analysts

Product Managers interact with stakeholders and customers to gather product requirements.
Requirements are documented in an SRS (Software Requirement Specification).
Any required changes in the design or additional features are finalized before moving ahead.
📝 Output: Software Requirement Specification (SRS) Document

__System Design__

📌 Who is involved? System Architects, Product Managers, UI/UX Designers

UI/UX Designers create the application design and review it with Product Managers.
System Architects prepare the Technical Design Document, defining:
The tech stack (languages, frameworks, databases).
The architecture (Monolithic vs. Microservices).
High-Level Design (HLD) & Low-Level Design (LLD).
📝 Output: Technical Design Document (TDD), HLD, LLD

__Development (Coding)__ 💻
📌 Who is involved? Software Engineers, Developers,SDE1,SDE2

The development team writes the code according to the design and requirements.
The system is implemented module by module.
If it’s a monolithic system, all components are developed as a single unit.
If it’s microservices-based, independent services are developed separately.
Developers follow best practices like version control (Git), code reviews, and CI/CD pipelines.
📝 Output: Source Code, APIs, Application Build

__Testing__ 🧪
📌 Who is involved? QA Testers, Automation Engineers,SDET(Software Development Engineer Test)

Unit Testing → Developers test small parts of code.
Integration Testing → Verify how different modules interact.
System Testing → Check overall system functionality.
User Acceptance Testing (UAT) → Ensure that the software meets user expectations.
📝 Output: Bug Reports, Test Cases, Performance Reports

__Deployment & Integration__ 🚀
📌 Who is involved? DevOps Engineers, IT Team,

The software is deployed to production or staging environments.
CI/CD pipelines automate deployments.
The system is integrated with external APIs, databases, and cloud services.
Performance monitoring tools (like Prometheus, Datadog) track live issues.
📝 Output: Live Production Release, Deployment Logs.

__Maintenance & Support__ 🔧
📌 Who is involved? Support Engineers, Developers

Regular updates, bug fixes, and patches are released.
Performance improvements and scalability enhancements are made.
User feedback is collected, and new features may be planned.
📝 Output: Software Updates, Security Patches, Performance Improvements


# Monolithic vs Microservices Architecture

## 1. Overview
- **Monolithic Architecture**: A single unified application where all components are tightly integrated.
- **Microservices Architecture**: A distributed system where the application is broken down into smaller, independently deployable services.

---

## 2. Key Differences

| Feature             | Monolithic Architecture | Microservices Architecture |
|---------------------|------------------------|---------------------------|
| **Structure**      | Single codebase(BE+FE+Auth+Email...etc)| Multiple independent services(Diff FE + Diff BE + Diff etc..)|
| **Code Repo**      |Single Code Repo | Multiple Codes Repos for Multiple services|
| **Scalability**    | Scales as a whole  | Individual services can be scaled separately |
| **Deployment**     | Entire application redeployed on change | Each service can be deployed independently |
| **Technology Stack** | Usually a single technology stack | Different services can use different technologies |
| **Development Speed** | Slower as the codebase grows | Faster due to independent services |
| **Fault Isolation** | A failure can crash the entire system | Failure in one service does not affect others |
| **Data Storage**   | Single database shared by all components | Each microservice can have its own database |
| **Maintenance**    | Becomes difficult over time | Easier due to smaller, manageable services |
| **Communication**  | Internal function calls | API-based communication (REST, GraphQL, gRPC) |
| **Best for**       | Small to medium applications | Large-scale, complex applications |

---

## 3. Advantages and Disadvantages

### ✅ **Monolithic Architecture Advantages**:
- Simple to develop and deploy.
- Easier debugging and testing.
- Less infrastructure overhead.

### ❌ **Monolithic Architecture Disadvantages**:
- Harder to scale as the application grows.
- A single failure can bring down the entire system.
- Difficult to adopt new technologies.

### ✅ **Microservices Architecture Advantages**:
- Better scalability and flexibility.
- Independent deployment of services.
- Easier fault isolation and resilience.

### ❌ **Microservices Architecture Disadvantages**:
- Complex service communication and orchestration.
- Higher infrastructure and operational overhead.
- Requires skilled teams for efficient management.

---

## 4. When to Use What?
- **Use Monolithic Architecture** if:
  - The application is small or medium-sized.
  - You need quick development and simple deployment.
  - You don’t have expertise in distributed systems.

- **Use Microservices Architecture** if:
  - The application is large and complex.
  - Scalability and flexibility are priorities.
  - You have a skilled development team to manage distributed services.

---
## 5. Conclusion
Both architectures have their place. Monolithic is good for simpler applications, while Microservices is better for complex, scalable systems. The choice depends on project requirements, team expertise, and long-term maintainability.


# Different Types of HTTP Methods
_GET_: To Get the Data from the Resource(DataBase).
_POST_: To Send the Data to the Resource(DataBase).
_PUT_: To Update the whole Resource.
_PATCH_: To Update the Some Parts of the Resource.
_DELETE_:To Delete the Data at Resource(DataBase).


# Initialize Our Project from Scratch:
To initialize our project that is to give a name for our project and other configurations we run __npm init__ then we enter the name of the project and other configurations as required. 
So it takes all the provided configurations about project and creates a __package.json__ file which is like a index of our project(which tells more info about the project) and contains all the information from project name to Project Configurations,Packages used in the project etc.

And that's how we initialize a node Project.


So Next we created a src folder which is the main folder containing __app.js__ file and we can start writing the code inside it.

We will be Using Express JS for creating our Server in this Project.

# Difference Between Node.js and Express.js

| Feature        | Node.js  | Express.js  |
|---------------|---------|-------------|
| **Definition** | A runtime environment that allows JavaScript to run on the server. | A web framework built on top of Node.js to simplify web app and API development. |
| **Purpose** | Provides the core functionality for server-side JavaScript execution. | Helps in building web applications, APIs, and handling HTTP requests easily. |
| **Level** | Low-level (provides modules like HTTP, FS, Path, etc.). | High-level (built on top of Node.js for web development). |
| **Functionality** | Handles file system operations, networking, streams, etc. | Simplifies request handling, routing, and middleware management. |
| **Routing** | Requires manual routing using core `http` module. | Provides a built-in routing system with easy-to-use methods like `app.get()`, `app.post()`, etc. |
| **Middleware** | No built-in middleware support; must be implemented manually. | Supports middleware functions to handle requests, responses, and errors easily. |
| **Flexibility** | Provides more control over server creation and request handling. | Abstracts complexities, making development faster and easier. |
| **Use Case** | Used for building real-time applications, networking apps, and backend services. | Ideal for building web applications, RESTful APIs, and server-side applications. |

## Summary
- **Node.js** is the **core runtime** for executing JavaScript on the server.
- **Express.js** is a **framework** that makes web and API development easier using Node.js.


when we ran __npm i express__ it generated 2 files __package-lock.json__ and __node_modules__ along with package.json that was already there.
So after running the command _npm i express_ all the source code of express that is required to run create and run our app using express JS was 
downloaded and is put inside the node_modules folder.
The express also comes with the some other dependencies so those dependencies are also downloaded and put into node_modules folder.So like 
this all the dependencies that are required in our project are downloaded and put inside node_modules folder.

And then our _package.json_ was also updated and express was added as a dependency inside __package.json__ file.
A dependency simply means that any package that our project is dependent on and our project cannot run with It.

"express": "^4.21.2"

When we install __express__ or any Package in our project it gets installed with any version like (_4.21.2_) 

And Similarly when we install any dependency the first digit in version (4) means major update verison which is not backward compatible and it can break our app if we install the major verison in our app which is running on minor version for eg: we are using version 4.x.x in our app and we install 5.x.x version so it represents some major update in our app and it could break our application

The second digits (21) represents minor updates(Changes) which can be installed in our app and wil not do any harm The third digits (2) represents patch updates(just some Bug fix) which are also safe to install in our app and will not do any harm.

__(^)__ symbol means our app can accept minor and patch updates without any issues,That means our project will automatically be updated if any of the new version comes in with __4.X.X__ series. __(~)__ symbol means our app avoids Minor or Major updates and only accepts Patch updates with-in same minor Version. If it does not have any symbol then it means that project needs exact version of dependencies to run and it will never Auto-Update that is will not accept any Major or Minor Update.

- ^ (Caret) symbol: Allows minor and patch updates within the same major version.
      Example: "express": "^4.17.1" → Accepts 4.18.0, 4.19.0, etc., but not 5.0.0.
- ~ (Tilde) symbol: Allows only patch updates within the same minor version.
      Example: "express": "~4.17.1" → Accepts 4.17.2, 4.17.3, etc., but not 4.18.0.
-   No Symbol (Exact Version): Locks the dependency to an exact version, meaning no automatic updates.
      Example: "express": "4.17.1" → Only installs 4.17.1, and never updates automatically.


while pacakage.json is flexible with installing new minor updates or patch versions but pacakage.lock.json will install exact version of the dependency and will not accept any changes in its version minor or major.
For eg: Our Package.json might have any version of the dependency (4.21.2) but packaage-lock.json will have exact version of the dependency
that our project is running on.

## Creating Our Server:
Now after installing _express_ in our machine we will create our server using express.
__"const express = require("express")"__

So here we have required the _express_ and it is coming from our _node_modules_ folder in which it is installed.
And next we will create an instance of our express Js Application by doing.
```javascript
const app = express()
```
We need to create an instance of our __express()__ because If we use express() directly then it will create 2 separate instance of the 
express separately 

for eg:
```javascript

const express = require("express");

express().get("/", (req, res) => {
  res.send("Hello World");
});

express().listen(3000, () => {
  console.log("Server running on port 3000");
});
```
So here 
```javascript
express() creates a new Express instance every time it is called.
You have two separate instances:
First instance (express().get("/")): Handles GET requests.
Second instance (express().listen(3000)) starts a server.
Since these are two different instances, the instance listening on port 3000 doesn’t know about the routes defined in the other instance. That’s why the / route won’t work.
```
To ensure that the same instance handles both the routes and the server, we should store the instance in a variable (app):
✅ Now, app is a single instance managing both routes and the server, so everything will work correctly.

Creating an instance of express means that we are assigning the instance of express in that particular variable and we no longer need to write express everytime instead we can get all the properties or methods from the app.
This app object inherits all the properties and methods of Express.
Now, instead of calling express.methodName(), We can simply use app.methodName()

Now we can call __listen__ method on our app instance and our server will listen on that patricular port 
which we have specified in our listen method.

```javascript
app.listen(3000)
```

Once we make our app listen on port __3000__ using app.listen(3000) we can also pass a callback function inside it, 
and the callback function will be only called once our server is listening on that particular port.
```javascript
const express = require("express")
const app = express()
app.listen(3000,()=>{
  console.log("Server is listening on Port 3000:")
})
```

So Here our Server is listening on Port 3000 but it is not handling any incoming Requests.
So need to tell our server how to handle incoming requests.
```javascript
app.use((req, res) => {
  res.send("Hello I am responding 😁");
});
```

Using the above request handler we have Responded to all the incoming request on our port 3000.
But We should not __app.use__ on our request handler as it will match all the incoming requests(Get,Put,Post,Delete)
for eg: Instead of using app.use we should use app.get or app.post etc. http methods as __app.use__ matches all the 4 http methods 
coming to it.

app.use() is mainly used for middleware functions, which execute before your route handlers. These middlewares can:

✅ Run on every request (like logging or authentication)
✅ Modify request/response objects (e.g., parse JSON, add headers)
✅ Serve static files
✅ Handle errors or 404 pages

we can also pass a route parameter before our req,res parameters so that our server will only respond to the requests coming to that route.
```javascript
app.use("/hello",(req, res) => {
  res.send("Hello I am responding 😁");
}); 
``` 

In Express.js, methods like .use(), .get(), .post(), .put(), .delete(), etc., take two parameters:

1️⃣ Path (string) → The URL endpoint where the request is handled.
2️⃣ Request Handler (function) → The callback function that processes the request (req, res, next).

Similarly we can add any other Route in our Applicatin and it will also respond to the requests on that Route.
```javascript
app.use("/test", (req, res) => {
  res.send("This is The test Route");
});
```
As everytime we make any changes in our file we have to stop our server(ctr+c) and restart it to reflect those changes on our browser.
To solve this issue we can install nodemon(It is a utility file which monitors our app for any changes and automatically restart it.)
using _npm install -g nodemon_ and then restart our server using command _nodemon filename.js_ instead of _npm src/app.js_.
And nodemon will watch our app for any changes and will start it automatically when anything changes.

**What is Nodemon?**
Nodemon is a Node.js package that automatically restarts the server whenever file changes are detected, so you don’t need to manually restart the server after every change.

**How Does Nodemon Work?**
It watches your project files (JavaScript, TypeScript, JSON, etc.).
When a change is detected, it automatically restarts the server to reflect the updates.
It improves developer efficiency by eliminating the need for manual restarts.


When we install a Package globally it gets installed at _C:\Users\<YourUsername>\AppData\Roaming\npm\node_modules_

Instead of writing _nodemon src/app.js_ everytime we want to start our server using Nodemon we can specify a script like below in our 
our package.json  
```javascript
"start":"node src/app.js",
    "dev":"nodemon src/app.js"
```
And then when we want to start our server in watch mode for any changes then we can start it using the script __npm run dev__
and it will actually use the above command to start our app using _Nodemon_.
Or We can also Run our app using _npm run Start_ and then it will start our app in normal mode and behind the scenes like above in which we have 
to manually start our server after any changes. 


## 🔹 What is a Module in Node.js?
A module is a reusable block of code encapsulated in a separate file.

It helps keep the code organized and modular.
Node.js automatically wraps each module in an IIFE (Immediately Invoked Function Expression) to provide module scope.

When we require() a module, Node.js automatically wraps it in a function like this 👇
```javascript
(function(exports, require, module, __filename, __dirname) {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  module.exports = { add, subtract };
})();

```
This ensures each module has its own scope (variables inside don’t pollute the global scope).


## Deleting the Node_Modules and package-lock.json
We can delete our package-lock.json and node_modules folder and still that can be Recreated by Running _npm install_ in our Project as our 
package.json contains all the information about our project and all the packages we are using in our project. So running the npm install will recreate the node_modules folder and package-lock.json

## Handling the Routes :
```javascript
app.use("/", (req, res) => {
  res.send("Hello I am Learning 😎");
});
```
When we have route with (/) so anything after that will be matched inside the (/) Route handler so even if we go to any other Route 
It will always point to (/) Route 
for Eg: on our server if we have a route (/hello) then as well it will not return the content of (/hello) route it will always return the 
(/) Route handler content.
```javascript
app.use("/hello", (req, res) => {
  res.send("Hello I am responding 😁");
});
```
In Express.js, routes are matched in the order they are defined. If a more general route ("/") is placed before specific routes ("/hello", "/file"), it will always execute first and prevent the later routes from being reached.

So like this order of routes matter because if we have macthing general route then the first route will always override the next routes

For Eg:
```javascript
app.use("/", (req, res) => {
  res.send("Hello I am Learning 😎");
});

app.use("/hello", (req, res) => {
  res.send("Hello I am responding 😁");
});

app.use("/file", (req, res) => {
  res.send("This is The test Route");
});
```
Here the Routes (/hello) and (/file) willl be overwritten by (/) route.

So to avoid the Routes being over-ridden we can define specific routes first, then the general "/" route:

## Handling the Get Routes 
when we use __app.use__ to handle any incoming request then it will match all the http methods(GET,PUT,POST, DELETE,PATCH ) coming to that route
so to handle only the GET request we can use __app.get__ method and it will match only the GET request coming to that particluar Route.
For eg:
app.get("/test"(req,res)=>{
  res.send("I am responding to GET Request 😎")
})

So for Above Route Any Request coming with GET method will be matched. It will not match any other __HTTP__ request coming to that Route.

And If we only make an http method to handle post requests using __app.post__ then it will match and respond to only post Requests.
for eg:

``` javascript
app.post("/post",(req,res)=>{
  res.send("I am responding to POST Request Only 😎")
})
```
But If we use a __app.use__ method on __top__ of our other http methods (GET,PUT,POST,DELETE) then it will override all the requests coming
to these http methods and will respond to those request by itself 
```javascript
app.use("/user", (req, res) => {
  res.send("I will override all the requests below me 😁");
});
```
That's why order of http requests matter if we use __app.use__ method. 

To Make a Delete api call we have to use __DELETE__  HTTP Method 
For Eg:
```javascript
app.delete("/user", (req, res) => {
  res.send("User Deleted SuccessFully");
});
```
Similarly to update some parts of user Data we have to make a __PATCH__ API call sever.
```javascript
app.patch("/user", (req, res) => {
  res.send("User Updated Successfully 😑");
});
```
To Update the whole Data of the user we have to make a __PUT__ API call to server.

## Optional Chaining in API Path (Advanced Routing Techniques)

In our routes we can make our path optional by putting a question mark.
 for eg: If we have a path __/test/abc__ then we can make the path optional by using a question mark after the path like __/test/ab?c__ so here __b__ is optional like if we write the full path (_/test/abc_) on postman so this path will work but if we write it like ( _/test/ac_ ) then it will also point to that path as we have kept __b__ as optional.

 ## (+) Opeartor in Path
 We can use (+) operator in path to match one or more of the preceding element. For eg
We can also add (+) operator in path to match one or more of the preceding element in our path unless starting and ending letter is same for eg: __/test/ab+c__ so if we try to acess the path like __/test/abbbbbbbbbbc__ then as well it will work.

## (*) Opeartor in Path
we can also write(*) opeartor in path and it means unless and until starting and ending letters match we can give anything in between the path for eg: we have path __/test/ab*cd/__ then we can write it like __/test/aberhjkshgfdfghjkjhcd/__ and it will hit the path unless the start and 
ending letters match.

 ## () Opeartor in Path
Here we can use __()__ to group some characters in our path for eg: if we have path __/test/a(bc)?d__ then even if we do not write the bc in our path it will hit the correct path __/test/ad__ as we made the (bc) optional in our path by using (?) opeartor. We Can also Write REGEX in our Api paths to make them more Dynamic.
Also __/test/a(bc)+d__ we can make our path to accept random values (here bc in this case ) using (+) Operator.

## Regex in API Path
We can also use regex in our api path to make it more dynamic for eg: if we have 
a path __/a/__ so here if i go to path /a it will work and if we go to path __/b/__ it will not work.
We can also use the other REGEX in our path like __/a[0-9]__ then it will work for path __/a1/__ and __/a2/__ but it will not work
for path __/a/__ and __/b/__ as we have used regex in our path to accept numbers in our path after (a).

The regex /.*fly$/ in a route path is used to match any route that ends with "fly", regardless of what comes before it.

- Breaking Down /.*fly$/
/	Start of the regex pattern
.*	Matches any character (.) repeated zero or more times (*)
fly	The string "fly" must be present at the end
$	End of the string (ensures "fly" is at the end)

## Query Params :
Query Parameters are key-value pairs sent in the URL after a (?) question mark  and are use to filter or modify the request.
for eg: __/search?query=javascript&sort=asc__
Unlike Route Parameters Query parameters are Optional and do not define the URL structure.

We can read the query params in our api by using __req.query__ on our request for eg: if we have a path _/user_ then we can  console.log(res.query) it and then in postman we can add some query params which will be printed in our Console.
So When passing query parameters in a URL, We use a question mark (?) to separate the base URL from the query parameters.

for eg: 
```javascript

app.post("/user", (req, res) => {
  console.log(req.query);
  res.send("I am responding to POST Request Only 😎");
});

```
so here we are reading the query params on our Request so we have used __req.query__  and in our request url if we pass any 
__http://localhost:3000/user?userid=101__ query parameter after ? it will be printed to our dev console.
So here __{userid :'101'}__ will be printed to dev console.

If We have multiple parameters, separate them with (&):
http://localhost:3000/user?userid=101&name=John

So here { userid: '101', name: 'John' } will be printed to Dev Console
If we want only values to be printed then we can use __req.query.name__ and it will print only "John" to the console. 

##  Route Parameters:
Route parameters are placedholders in the URL prefixed with a colon(:),which allows clients to request specific data .
for eg: /profile/:profileId, profileId is a route parameter and we can access the value of the  parameter 
using __(req.params.profileId)__
so here if a user visits __/profile/123__ here 123 is the profileId that can be accessed using above route parameter.

We can also add Dynamic routes by using "/abc/:user" so here (:) giving colon we can add dynamic path and we can read it by using req.params so here userId is the dynamic path which we are accessing. for eg 
```javascript
(app.get("/users/:userId", (req, res) => 
{ console.log(req.params); 
res.send({ firstName: "Krishna", lastName: "Tripathi" }); });)
```

So here we have made our Routes Dynamic by  adding "/users/:userId" so Here userId after (:) is dynamic and if we pass any thing after 
/users/ and it will printed to dev console using (__req.params__).

So like this we can add any Route After Colon (:) and every parameter that we have passd in our url we can receive using req.params.

## Route Handler
```javascript
app.use("/user",()=>{
//This function is known as route Handler
})
```
We can handle any incoming http request (GET,PUT, POST,DELETE) with the above request handler as we have used __app.use__ method
Inside our Route handler function we can pass 2 arguments req and res.
```javascript
app.use("/user",(req,res)=>{
//This function is known as route Handler
res.send("This is my route 1st handler ")
})
```
And using the res parameter we provide a response to our client like above.

Similarly we can use any type of http method (GET,PUT,POST,DELETE) for handling that particular type of request, But if we use __app.use__ then 
we can respond to any http method.

```javascript
app.use("/user",(req,res)=>{
//This function is known as route Handler

})
```
when we do not send any response from our route handler like above and someone tries to access this particular path then the client system sending the request to this path will go into infinite loop as it will not receive any response from the server(res).

We can add multiple route handler functions inside a particular Route.
```javascript
app.use("/user",()=>{
  //This function is known as route Handler 1
  res.send("This is my route 1st handler ")
},(req,res)=>{
  //This function is known as route Handler 2
  res.send("This is my route 2nd handler ")
},(req,res)=>{
  //This function is known as route Handler 3
  res.send("This is my route 3rd handler ")
})
```
Here as we have added multiple Route Hanlder functions inside a single Route but when we will hit the "/user" path then the response of just 
1st Route handler will be returned to client it will not go to the next Route Handlers as we do not have passed the parameter __next__ inside our function.
So to make our Route handler to go for the next function if we do not provide any response in the first function we have to specify one more 
parameter __next__ inside our function and then we have to use that parameter inside our function 

for eg:
```javascript
app.use("/user",(req,res,next)=>{
  //This is first Route Handler Function 
  //We have provided no Reponse inside it 
  //but we can call our next() parameter so the request goes  to next function
  next()
},(req,res,next)=>{
  //This is second Route Handler Function
  res.send("This is my route 2nd handler Response")
})
```
Now if we hit the above path the request will go to next Request handler if it does not get any response from first request handler.

But If we provide a response to the Client through our first request handler and still use __next()__ then it will throw an Error that 
 _Error_ [ERR_HTTP_HEADERS_SENT]: _Cannot set headers after they are sent to the client_.
 It means that once the reponse is sent to the client then again it can-not send the response to same header as our client while making the request creates a connection to server and once it receives the response the connection is closed.

 So when we define _next()_ in our route Handler and do not provide response in any route handler then it will throw an error that 
 cannot GET/user as it was expecting another route handler and as we have not defined any other route Handler then it will throw 
 an error that __cannot GET/user__

 for Eg:
 ```javascript
app.use("/user",(req,res,next)=>{
 
  next()
},(req,res,next)=>{
  
  //using next () here 
  next()
}),
(req,res,next)=>{
  //This is third Route Handler Function
  next()
}
```
So In the Above case it will throw an Error.
But If we do not use __next()__ and do not provide any response then the request from client will go in infinite loop.

We can define as many Route Handlers inside our route as many we want we can also wrap our route handlers inside an array [].
for eg:
 ```javascript
app.use("/user",[(req,res,next)=>{
 
  next()
},(req,res,next)=>{
  
  //using next () here 
  next()
},
(req,res,next)=>{
  //This is third Route Handler Function
  next()
}])
```
We can also define our route handlers separately like below instead of chaining them in one Route.

for eg:
```javascript
app.use("/user",()=>{
  res.send("This is First Route Handler")
  next();
})

app.use("/user",()=>{
  res.send("This is Second Route Handler")
})
 ```
 So Here instead of chaining the Route Handlers we have defined them separately and it will work fine unless and until we are sending 
 Proper resonse.
 But In above case it will throw error that cannot set headers after the response has been sent as we are sending the response in first 
 route handler it self.

## MIDDLE-WARE
These functions that we have defined where the route is going from one function to another are known as middlewares.
*** Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can modify the request and response objects, end the request-response cycle, or call the next middleware function in the stack. ***

So In above example we have already used middlewares and seen how one function transfers the request to other function.
 ```javascript
app.use("/user",
(req,res,next)=>{
 console.log("Middle-Ware Executed")
  next()
},(req,res,next)=>{
  
  //using next () here 
  next()
}),
(req,res,next)=>{
  //This is third Route Handler Function
  res.send("This is last Function in Middle-Ware Example")
 
}
```
Here we have used 2-Middlewares and each middleware is calling the next middleware function using next() function.

## Need Of Middle-Wares

Suppose we have 2 API's which can be only aceessed by a user with Admin Credentials:
```javascript
app.get("/admin/getAllData",(req,res)=>{
  //Auth Logic Here
  res.send("All User Data")
})

app.get("/admin/deleteUser",(req,res)=>{
  res.send("User Deleted")
})
```
So Here we can add a middleware to check if the user is admin or not before accessing these API's.
And also suppose we write the authentication logic in one of the above API's and we also need the auth logic in our 2nd API as well 
so we have to write the same Auth Logic Twice so instead of doing that we can write a auth middleware function which will handle only the 
Authentication logic that is to check if a user is Authenticated or Not If user is Authenticated with correct Credentials and permission then
he will allowed to access the __Admin__ API's else he will be redirected to Authentication Page or Not Authorized Page depending upon the Permissions.

## Diff in App.use and App.all
app.use("/user", ...) runs for all requests starting with __/user__, including /user/profile, /user/settings, etc.

app.all("/test") will handle GET, POST, PUT, DELETE, etc., but only for __/test__ (not /test/something)

```javascript
app.use("/admin", (req, res, next) => {
  console.log("Admin Auth is HIT");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Not Authorized:");
  }
});

app.get("/admin/getAllData", (req, res) => {
  //Auth Logic Here
  res.send("All User Data");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});
```
Here We have created a middleWare function for __/admin__ Route So any Request coming to __/admin/getAllData__ Route wil be first go through
/admin middleware then it will go to the Requested route. In this case we had requested __/admin/getAllData__.

 We can also create our middleware function inside utils folder (/src/utils) and export it and then import it inside __app.js__ and 
 use it as middleware function. This is good practice to keep our code clean and organized.
 For eg: 
 ```javascript
 const adminAuth = (req, res, next) => {
  console.log("Admin Auth is HIT");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Not Authorized:");
  }
};

module.exports = {
  adminAuth,
};
```
created a auth.js file inside /src/middleware/auth.js and written the code for middleware function then exported it and after importing it inside app.js used it on "/admin" routes.
```javascript
const { adminAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
```
Here we have used our "adminAuth" on "/admin" route and it will work on all the requests coming to /admin Route.

Instead of using middleware like above we can also use it like below if we just have single http methods.
But if we have multiple http methods for that particular Route then we can define it separately as above for that particular Route and it will work on all Requests coming to that Route.
```javascript
app.get("/admin/getAllData",adminAuth, (req, res) => {
  //Auth Logic Here
  res.send("All User Data");
});
```

## ERROR - Handling
When defining logic for error then we have to pass __err__ as a parameter inside our Route Handler function.
for eg:
```javascript
app.use("/",(err,req,res,next)=>{
  //Code Logic
})
```
So In Express Js app.use here is a general method which is used here to handle errors. And If we are using __err__ handling then we have to pass
it as first parameter in our Route Handler.
So If we ever get an Error We can handle like below:
```javascript
app.use("/",(err,req,res,next)=>{
  if(err){
    res.status(500).send("Something Went Wrong")
  }
})
```
So here we have gracefully handled all the errors that are coming in our Application 

So suppose we have a api to get the data for all Users and it is throwing some error 
```javascript
app.get("/getUserData", (req, res) => {
  throw new Error("This is error");
  res.send("Data is Here");
});
``` 
And we have a Route handler function afterwards to handle error 
```javascript
app.get("/getUserData", (req, res) => {
  throw new Error("This is error");
  res.send("Data is Here");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something Went Wrong");
  }
});
```
So here we have handled the error that is coming from our previous Route Handler function. And we have
sent a response to the client with a status code of 500 and a message that something went wrong.

But if we have the same error handler function before the "/getUserData" then it will not throw the proper response as while executing the code
Js Engine Encounters the Error Later Not before
For Eg:
```javascript

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something Went Wrong");
  }
});

app.get("/getUserData", (req, res) => {
  throw new Error("This is error");
  res.send("Data is Here");
});
```
So here response from error handler will  not be sent to user instead the error from our "/getUserData" will be sent to user.
So that's why we should always keep our error Handler function in the End.

## Connecting to DataBase using Mongoose
REFER to Document : __https://mongoosejs.com/docs/index.html__

For mongoDB showing __ERROR__:( Error Occured ===> MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/)

TO Resolve this go to the Cluster and select the option **ADD IP Address** It will Automaticallly whitelist your IP.

To connect to DataBase using mongoose we have to first install mongoose in our project using __npm i mongoose__.
We have created a folder config inside that we have our database file in which we will write code to connect to database.

```javascript
const mongoose = require('mongoose')
```
So we will just import mongoose in our __database.js__ and then we just simply use __mongoose.connnect()__ and inside that we can pass
our connection string "mongodb+srv://NodeUser:<dbPassword>@nodelearning1.mngbs.mongodb.net/" but this is not a good way to connect 
because __mongoose.connect__ returns a promise that whether it connected to Database successfully or not.
So a good way to do this is to wrap it inside a __async__ function and await it.
```javascript
const mongoose = require('mongoose')

const  connectDB = async()=>{
await mongoose.connect('mongodb+srv://NodeUser:<dbPassword>@nodelearning1.mngbs.mongodb.net/')
}
connectDB()
  .then(() => {
    console.log("Connection to DataBase is SuccessFul 😁");
  })
  .catch((err) => {
    console.log("Error Occured ===>", err);
  });
```
So here we have created a __async__ function __connectDB__ and inside that we have used __await__ to await our connection till it connects or to database or rejects then we have logged to console if __Successfully Connected to DataBase__ if database connection was successfull and if 
it throws any error then we have handled that as well.

Next to connect to database when we start our server we need to import it in our __app.js__ as our server will not know about connecting 
to database until we import it in __app.js__
Once we import it in __app.js__
```javascript
require("./middlewares/config/database");
```
Then it will automatically connect to database and print _Connection to DataBase is SuccessFul 😁_
Or If connectionis not successful then it will throw error depending upon the Error Occured.
So that's how we can connect to database using mongoose.

## Creating a DataBase:
A cluster in MongoDB is a set of connected MongoDB servers that work together to store and process data. Clusters help with scalability, fault tolerance, and high availability.

Now to create a database directly in our __cluster__ we can specify the name of the DataBase after our connection string.
```javascript
mongodb+srv://NodeUser:<dbPassword>@nodelearning1.mngbs.mongodb.net/devTinder
```
So here in connection string we have passed the name of the DataBase in last which is __devTinder__.

We should always first establish the Server Connection to Database then only start the server to listen to incoming requests.
Because our server is Already started listening to incoming requests but we have still not connected to Database so users trying to fetch there
data might recieve an error from the Database.

So to do that we will not directly connect to database in our __database.js__ instead we will export the __connectDB__ function from __database.js__ and import it in our __app.js__ and we will pass our __app.listen__ after the DB connection is successfull.
```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shreejinetwork702:<database_pwd>@cluster0.dhjwe.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
```
Here we have exported our connectDB function and then we can import it in our __app.js__
```javascript
const express = require("express");
require("./middlewares/config/database");
const connectDB = require("./middlewares/config/database");
const { connect } = require("mongoose");
const app = express();

connectDB()
.then(() => {
    console.log("Connection to DataBase is SuccessFul 😁");
    app.listen(3000, () => {
        console.log("Server is successfully Listening on Port 3000 😀");
      });
    
  })
  .catch((err) => {
    console.log("Error Occured ===>", err);
  });
```
And then we pass our __app.listen__ inside __connectDB()__ to first connect to Database and then start the server.

## Creating an Schema :
__Schema__:(https://mongoosejs.com/docs/guide.html#models)
A schema in MongoDB defines the structure of documents in a collection. While MongoDB is schema-less (you can insert documents with different fields), using a schema helps maintain consistency and data integrity.

To create our Schema we will create a folder Named __models__ inside which we will have our __user.js__ file 
Inside which we will define our user Collection like what fields the user collection is gonna Have.
```javascript
const mongoose = require("mongoose");
const userSchema = mongoose.schema({

})
```
So we will import our mongoose library and schema is a function on top of mongoose inside which we will pass an object 
inside which we will define the parameters that an user will have like name,age etc.
so when we pass a field inside our schema we will also have a type of that field whether it is a string or number etc.

```javascript
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
```
So this schema tells us what all fields we are gonna store in for a User in Database.

## Using Our Schema:
Once we create our Schema we will create a Model from our Schema.

A model in Mongoose is a JavaScript representation of a MongoDB collection. It provides an interface to interact with the database, allowing us to create, read, update, and delete (CRUD) documents based on a predefined schema.

After creating the schema we will create the model  using : mongoose.model
```javascript
const User = mongoose.model("User",userSchema)
```
Here we have passed the name of our Model inside as "User" and second argument is the name of our schema from which we are creating the model.
So as we have created our Model we can start creating the API's. to interact with the User Collection.

## Creating an API to SignUp a user
To make our users register we can create a sign up api in our __app.js__ and the path will "/signup".
To create a the data in our Resource we use post method.
```javascript 
app.post("/signup",(req,res)=>{
const userObj = {
  firstName:"Krishna",
  lastName:"Tripathi",
  email:"krish@gmai.com",
  password:"krish123",


}
})
```
so suppose in our post request we have user with above details and if we want to save this user into MongoDB DataBase then we have to create 
an instance of our User Model that we have created on userSchema. and then we will add the above data on that User Model and then 
we will save that instance.

To create the new instance of User Model we will import our User Model inside app.js from __models__ then we can create it like 
```javascript
app.post("/signup", (req, res) => {
  const userObj = {
    firstName: "Krishna",
    lastName: "Tripathi",
    email: "krishna@gmail.com",
    password: "krishna123",
  };

  const user = new User(userObj);

user.save();
});
```

So here we have imported our User Model from models and then we have created a new instance of it using __new__ keyword and then we have passed our __userObj__ inside that and assigned it to user variable.
To create the instanc we write the keyword __new__ and then we write the name of the model __User__ in our case then we pass the
in the data of the model that we want to save so here we wanted to save the data of __userObj__ so we have passed that.

Once we create the instance of our Model we do __.save()__ on that created model (user.save()) so that will be saved to our database.
so this user.save() function  will return a promise so we have to use async and await.

```javascript
app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Krishna",
    lastName: "Tripathi",
    email: "krishna@gmail.com",
    password: "krishna123",
  };

  const user = new User(userObj);

{
  await user.save();
}
});
```
So after doing _await user.save()_ and  marking our function as _async_, we have created a post API to save the data to our User Collection
To test this we can go to postman and hit our "http://localhost:3000/signup" sign up API and our database(_devTinder_) will be created inside 
which our user collection will be created and inside our collection our document will be saved. 

Whenever we add a document in MongoDb then MongoDB Automatically gives it a __Id__ fieldand and (__v) field. If we specify a id field in our 
user schema and while passing the data we can also pass the id manually.
__v is used to keep a track of version of the data initially when a document is created the version is 0 and it chaanges according to 
updates we make in document.

we should always wrap our  DB opeartions in try-catch block to catch a potential
error that might occur while saving the data to our database.
```javascript
 const user = new User(userObj);
  try {
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error Sending the data:" + err.message);
  }
  ```

## Diff in JS Object and JSON 
| Feature           | JavaScript Object | JSON (JavaScript Object Notation) |
|------------------|------------------|---------------------------------|
| **Definition**    | A key-value pair structure used in JavaScript code. | A lightweight data-interchange format. |
| **Data Type**     | Can contain functions, symbols, and other complex types. | Only supports primitive data types like strings, numbers ,booleans, arrays, and objects. |
| **Syntax**        | Uses unquoted keys. | Requires keys to be in double quotes. |
| **Example**       | `{ name: "John", age: 30 }` | `{ "name": "John", "age": 30 }` |
| **Usage**         | Used in JavaScript programming as variables or objects. | Used for data transmission between a server and a client. |
| **Parsing**       | Directly usable in JavaScript. | Needs to be parsed with `JSON.parse()` before using in JavaScript. |
| **Stringification** | Not needed, since it’s already an object. | Can be converted to a string using `JSON.stringify()`. |
| **Comments**      | Can include comments. | Does not support comments. |




## Creating an API to send the user Data instead of Hardcoding:
So the above data that we have created for user should also be coming from User.
```javascript
 {
    firstName: "Krishna",
    lastName: "Tripathi",
    email: "krishna@gmail.com",
    password: "krishna123",
  };
  ```
So to Make it dynamic we can pass this from our post API in request Body and to do that we have to go to postman and 
and inside our POST http method select the _BODY_ and select _RAW_ and select _JSON_ and then paste the data in json format and then we can send
it along with the Request Body:
for eg:
```json
{
	"firstName":"KrishnaT",
    "lastName":"Tripathi",
    "email":"krisht@gmail.com",
    "password":"Pwdkrish@678"
}
```
Here we have filled our data in Json format inside request body.

Now when we send the data from our POST API in request body,then we have to read that from that but we cannot do that directly

```javascript
for eg:

// app.post("/signup", async (req, res) => {
//   console.log(req);
//    const userObj = {
//     firstName: "Krishna",
//     lastName: "Tripathi",
//     email: "krishna@gmail.com",
//     password: "krishna123",
//   };

//     const user = new User(userObj);
//     try {
//       await user.save();
//       res.send("Data Saved SucessFully");
//     } catch (err) {
//       res.status(400).send("Error Sending the data:" + err.message);
//     }
// });
```
Here req Body does not contain only data but other things as well so the incoming message is very big which we can see in our 
console as we have logged our _req_ Object in console.

So to read the data we have to do:
```javascript
console.log(req.body)
```
Now as we have done __console.log(req.body)__ but here again it will log _undefined_ in console as the data that we our sending in our request
body is in __JSON__ format and our server is not able to read that __JSON__ data.
So to read that data we will need a middleware (as we are going to use that middleware in ALL API's that's why we will created a middleware)
which will check the incoming request and convert the json into JS object and put it into the req Body so that we can access that data directly.
And we do not need to create that middleware but __Express__ has already given us that middleware directly.
Read More About it Here :__https://expressjs.com/en/5x/api.html#express.json__

So we can use that middleware directly instead of creating our own:
for eg: we can pass the middleware to __app.use()__ method and it will work on all the incoming routes by default.
```javascript
app.use(express.json())
```
So It adds middleware that automatically parses incoming JSON data from the request body and converts it into a JavaScript object that our server can understand. If we do not use this middleware then req.body will be undefined because Express doesn’t parse JSON by default.
So now we do not need to write any middleware to convert json data to server understandable code instead we can just use this middleware 
and everything will work fine.
It is essential for handling __POST__, __PUT__, or __PATCH__ requests with JSON payloads

Now when we log our __console.log(req.body)__ we can see the data in below format in our console as the middleware converts it JS Object.
```javascript
{
  firstName: 'KrishnaT',
  lastName: 'Tripathi',
  email: 'krisht@gmail.com',
  password: 'Pwdkrish@678'
}
```
so now in our app.js in our signup method we have to remove our __userObj__ and just have to replace it with __req.body__.
```javascript
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error Sending the data:" + err.message);
  }
});
```
So Now when someuser sends the json data through signup API request Body our middleware first receives that request and converts that json 
data into JS object and put it into the req.body and then our signup method receives that req.body and Now we are creating the new 
instance of the User Model using the data which we are sending in th API.
and then we are saving that data in DataBase.

## Reading the Data from the Database(Get API).
Read more about how we can make a get request : (__https://mongoosejs.com/docs/api/model.html#Model.find()__)
To get all the user from the DataBase we have to make GET API call on our Database:
```javascript
app.get("/feed", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});
```
Here we are using the find method of the User Model to get all the user from the Database.

To find a single user by __email__ which is coming along with request body we can extract that email from request body then 
we can use _User.find({email:email})_ on user model.
Read it more : __https://mongoosejs.com/docs/api/model.html#Model.findById()__
```javascript
app.get("/user", async (req, res) => {
  const email = req.body.email;
  const user = await User.find({ email: email });
  console.log(user);
  res.send(user);
});
```
Then we can send the response to client using res.send()
We can also send the data along with some string using Template strings:
for eg:
```javascript
res.send(`User Data is ====>> ${JSON.stringify(user)}`);
```
Instead of writing our code like above we should always wrap it inside a __try{}catch()__ block to handle any unexpected Error.
```javascript
  try {
    const user = await User.find({ email: userEmail });
    res.send(user);
  } catch (err) {
    res.status(400).send("Something Went Wrong.");
  }
  ```
and also we should make our find method await as it takes some time to find the user.

## When User Not Found with Provided Mail:
So when a user is not found we can send the appropriate response that user with provided email is not Found in DataBase.
```javascript
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.find({ email: userEmail });
    if (user.length === 0) {
      res.status(404).send("User Not Found with This Email 😐");
    }else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong.");
  }
  console.log(user);
});
```
when a user is not found in DB then we are sending that user with this email is Not Found:

## find-One Method On User Model:
We can use find one method to find a user if a user is registered multiple times with same email:
It returns the Oldest document with that particular value that we have passed inside it. In our Case we are passing _email_.
```javascript
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.findOne({ email: userEmail });
    if (user.length === 0) {
      res.status(404).send("User Not Found with This Email 😐");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong.");
  }
  console.log(user);
});
```
If we do not specify any condition inside __findOne({})__ method then it will return any random document from the database (usually the firstOne) . 

## find By Id And Delete Method On User Model:
We can use find by id method to find a user by id and delete method to delete a user
Refer the Official Documentation : https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
```javascript
app.delete("/user", async (req, res) => {
  const userId = req.body.id;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).send("User Not Found:");
    } else {
      res.send("user Deleted Successfully");
    }
  } catch (err) {
    res.status(400).send("User Not Found");
  }
}
)
```
So Here we have used findByIdAndDelete method on our User Model to delete a user.
In findByIdAndDelete we can either directly pass the id that we want to delete or we can specify 
the __({ _id: userId })__ like this  

## Updating an user using Patch HTTP method :
We can update a user data by using findByIdAndUpdate method on the userId then we can pass the data which we want to update and it will
update the user data with the new data that we have passed.
We are also passing the userId which we want to update but internally mongo DB does not update anything which is not present in Schema.

```javascript
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(userId, data);
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
```
Any other data which is Apart from Schema will not be updated and will be ignored by API's.

We can also pass a third option into "findByIAndUpdate" which will return the document before or after the uddate based on 
the option we provide into it. If we do not pass any option then by default it logs the first document that was before update.
```javascript
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(userId, data,{returnDocument:"before"});
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
```
Read More About it At : https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()

## Data Sanitization & Schema Validation:
We  can add some-checks on our Schema fields 
For Eg: we can keep some fields mandatory etc.
 So If we set required to true for any field then user will have to provide that field else mongoose will not allow that 
 field to be inserted in DataBase.
```javascript
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: 
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});
```
SO here we have set required field to true on __firstName__ , __email__ and __password__ so if the user tries to send the data without these 
fields then mongoose will throw an error and will not allow the data to be inserted in the database.

Read More About it at "https://mongoosejs.com/docs/schematypes.html"

We Should also set a __Unique__ Check on fields like email so that it should not have a user registered with same email multiple times.
So if someone tries to register with duplicate mail Id then it will throw an error.
So to do this we can set our __email__ field with __Unique__ to true.

Suppose We want to set a default value for some field in our User schema then we can set default flag to true for that field.
for eg:
```javascript
  about: {
    type: String,
    default: "This is default about of the User.",
  },
  ```
  We have also set our Skills field to be An empty Array so while creating a User it will set the skills as an empty Array if we do 
  not pass any skills.
  ```javascript
  skills: {
    type: [String],
  },
  ```

  We have also set our PhotoUrl field with a default value so when some user Tries to Register and he does mot provide a photoUrl 
  then it will set the default photoUrl to him.
  ```javascript
   photoUrl: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?t=st=1739680454~exp=1739684054~hmac=38453e5862630ffb2aa2616c560ccfafb430ec93469bf1e36d51560ef465c839&w=740",
  }
  ```
  We can also pass a lowercase flag on our email and set it true so when user tries to send the email in UpperCase it should be converted to lower-case and then it should be stored in data base.

  We can also create a custom validation function on some fields to check if value passed by user into that field is allowed by that 
  validate function or not.
  for eg: Gender of a user can only be male, female or others so we can pass those values into gender.
  ```javascript
  gender:{
    type:String,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Please Enter Valid Gender (male,female,others)")
      }
    }
  }
  ```
  Spo here we have passed a __validate()__ function inside which we have passed if a user's gender is not (male,female or others) then 
  throw an error.
  Refer to documentation for More Details "https://mongoosejs.com/docs/schematypes.html"

  We have defined the custom validator function on gender but by default this validator function will only work on new Records that 
  are being created into the system but it will not work on the records that already exist in the system
  
For eg:
If we have any user in our system and we want to update that user's gender and we pass any value into gender apart from defalut values that we 
have defined into it, So it will still take that gender value for that user. like Instead of updating a user with 
"male" we update him with "BMale" so it will take this value and will not throw an error as validation is only working when we are creating 
a new Record.

So we have to Enable it to Run on the updated method as well for any existing data.
So to do that on our Models we have different options so we can set a one option as to runValidators to true:
Read about it Here "https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()"
```javascript
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Update Failed :" + err.message);
  }
});
```
In our patch method we have set runValidators to true so we now when we try to update some user data like gender then our validator
function in gender will also run on these updated methods as well and it will throw an error for Invalid Gender etc.

So this is how we can add custom validators on our Schema.

To pass the error message along with a string we have to concat our Error message with our string:
for eg:
```javascript
res.status(400).send("Update Failed :" + err.message);
```
So now our Valiadtions will also work on data that we are going to update.

Also we are not storing the TimeStam for when the user was Registered.

To do that we can pass Timestamp:true in our schema 
```javascript
{ timestamps: true }


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Please Enter Valid Gender (male,female,others)");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?t=st=1739680454~exp=1739684054~hmac=38453e5862630ffb2aa2616c560ccfafb430ec93469bf1e36d51560ef465c839&w=740",
    },
    about: {
      type: String,
      default: "This is default about of the User.",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);
```
And it will create the TimeStamp for all the users that will be created on our server by default.
we can also create a Field for createdAt and when we create a user we can also pass the Date but we don't need to do that 
We can just pass the timeStamp to true and by default it will create a timestamp for our user.

So Now when we create a user it will Automatically create createdAt and updatedAt timestamps for that user.
and when we update the user it will show the updated time

## API Level Validations:
We need to also Add API level validations as when creating a user we have a check on our schema but what if a user later update his details later using Update(patch) API.
So that's why we need to add validation at API level so that when a user is Updating his profile he can update certain fields only.
```javascript
const ALLOWED_UPDATES = ["userId","photoUrl","about","gender","age","skills"]
const isUpdateAllowed = Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k))
if(!isUpdateAllowed){
 throw new Error ("Update not allowed on this Field")
}
```
So eher we have created a variable __ALLOWED_UPDATES__ inside which we have passed the fields for which we can update our data later
and if user tries to update any field which is not in ALLOWED_UPDATES Array then it will throw an Error that Update is not allowed on this 
field.
So this is how we can add validation at API level.
But there is an Issue here that we have passed our userId as well inside __ALLOWED_UPDATES__ Array but the user Should not be able to update the userId so we can fetch user Id from our Route Parameters and to do that we have to Pass our userId in our Route. 
and then instead of getting the userId from request Body we can get it from Req params
```javascript
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = [
      "userId",
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed on this Field");
    }

    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Update Failed :" + err.message);
  }
});
```
So here we have passed our userId in our Route and then we have fetched it from our Route Parameters. which we are sending from client
"http://localhost:3000/user/67b17d968ae25f9cbc00bf42" so here in the path we have also sent the userId that we want to udpate (67b17d968ae25f9cbc00bf42) and in this way we can fetch it from our Route. using __req.params?.userId__

We can also add a custom validation for skills as we don't want a user to insert more than 5 skills.
```javascript
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed on this Field");
    }
    if (data.skills.length > 5) {
      throw new Error("You can only add 5 skills");
    }
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Update Failed :" + err.message);
  }
});

```
so here we have added a validation for our skills that it's length cannot be greater than 5.

We have also added a Validation for our PhotoUrl using below REGEX.
```javascript

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed on this Field");
    }

    const isValidUrl = (url) => {
      const urlRegex =
        /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+(?:\/[\w\-_~:/?#[\]@!$&'()*+,;=.]+)?$/;
      return url.match(urlRegex) !== null;
    };

    if (!isValidUrl(data.photoUrl)) {
      throw new Error("Invalid Photo URL");
    }
    if (!data.skills) {
      data.skills;
    } else if (data.skills.length > 5) {
      throw new Error("Skills Cannot be More than 5");
    }
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Update Failed :" + err.message);
  }
});
```

Now to validate our email-Id we can use a library as validating email is not a easy job.

## Using Validator Function :
So to Validate our email we can use __validator__ package from __npm__ and it becomes very easy to validate email with that library.
```javascript
email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email 😎 Please Enter Valid One");
        }
      },
    }
```
  So here we have imported and used our validator function to see if entered email is valid or Not 
Read More About it : "https://www.npmjs.com/package/validator" 
We can also validators on our every field like above like photoUrl;
```javascript
photoUrl: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?t=st=1739680454~exp=1739684054~hmac=38453e5862630ffb2aa2616c560ccfafb430ec93469bf1e36d51560ef465c839&w=740",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error(
            "Invalid Photo URL Please Enter Valid One. This is not accepted ====> " +
              value
          );
        }
      },
    },
  ```
  So here we have used validator to check if entered photoUrl is valid or not. If not
  then it will throw an error. So we can add validators on every field like this.

  ## Encrypting our Password
  Now we are storing our Password in Plain Text and anyone who has access to DB can view our user passwords directly.
  So to prevent this we can use a library called __bcrypt__ from __npm__.

First we will create some helper functions to perform the check on the data which is coming into the Database when a user signs-Up so for this we will create a utils folder and inside that we will create a file named __validation.js__
and inside the file we can check validation for the comming data through our signUp API.
```javascript
const validateSignUpData = () => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please Enter First Or Last Name");
  } else if (firstName.length < 4 || firstName.length > 50) {
    throw new Error("First Name must should be between 4 and 50 characters");
  } else if (lastName.length < 3 || lastName.length > 50) {
    throw new Error("Last Name must should be between 3 and 50 characters");
  }
  
};
```
so here we have set the validation for firstName and lastName ans similarly we set validation for our email as well using the validator package
as we have already installed it.
```javascript 
  else if (!validator.isEmail(email)) {
    throw new Error("Invalid Email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password must be at least 8 characters and should contain speacial Characters."
    );
  }
  ```
  so here we have added validation for our email and password using validator package. So this will validate our email and password for
  mentioned conditions.
But for this validation to work we have to import it inside app.js then we have to use it inside our /signup API to pass the data that is coming
in our request.
for eg:
```javascript
app.post("/signup", async (req, res) => {
  try {
    //Validattion Of Data
    validateSignUpData(req); ///passing our request inside the validateSignUpData function

    //Creating the new Instance of User Model
    const user = new User(req.body);
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});
```

  Now next after adding these validation Checks we wil now Encrypt our password and then store it and the package that we are going to use is 
  __BCRYPT__. We can install it using __npm i bcrypt__
  Now we can extract the password from request body and then we can use brcypt on that password 
  ```javascript
     app.post("/signup", async (req, res) => {
  try {
    //Validattion Of Data
    validateSignUpData(req);
    const { password } = req.body;

    //Encrypt the Password
const passwordHash = bcrypt.hash(password,10)
    //Creating the new Instance of User Model
    const user = new User(req.body);
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});
```
so here to encrypt the password we are using bcrypt and we will use __bcrypt.hash__ to hash our password. Inside the bcrypt.hash
we will pass our extracted password and then we will pass the salt of password.
***What is Salt***
Salt is a random value that is added to the password before hashing. It helps to prevent rainbow table
attacks. A rainbow table is a precomputed table of hash values for common passwords. By adding a
random salt to the password, we make it harder for an attacker to use a rainbow table to crack
the password.
In our password we have given 10 rounds of salt so it will generate a password and perform 10 rounds of hashing with some random gerenarted 
salt.
```javascript
app.post("/signup", async (req, res) => {
  try {
    //Validation Of Data
    validateSignUpData(req);
    const { password } = req.body;

    //Encrypt the Password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //Creating the new Instance of User Model
    const user = new User(req.body);
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});
```
So the password that is Generated is now a Random String of Random Characters which cannot be decoded easily.

Also when we are creating the new instance of User Model and we are passing the __req.body__ inside it instead we should explicitly 
mention the fields which we are going to receive inside the body and then extarct them instead of sending the full Body.
So if someone (Attacker) tries to send some random data it will ignore that as we are specifically extracted somed fields which we are 
going to use.
for eg: 
```javascript
app.post("/signup", async (req, res) => {
  try {
    //Validation Of Data
    validateSignUpData(req);
    const {firstName,lastName, email,password } = req.body;

    //Encrypt the Password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //Creating the new Instance of User Model
    const user = new User({firstName,lastName,email,password:passwordHash});//Extract all the fields that are coming inside the request body and then save them
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});
```
So we have extracted all the fields inside our req body and then we have passed the passwordHash with password so that will be stored in 
the DataBase instead of our normal Password.

So now whenever a request comes we are validating that request with validateSignUpData function and then we are hashing the password
and then we are passing the passwordHash into password and then storing it into DataBase.

So Now our password will Hashed by bcrypt and then we can store that password into DataBase.

## User SignIn API.
```javascript
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); ///checking if user Email Exists in DataBase or Not using User Model.
    if (!user) {
      throw new Error("User Not Found With This Email:");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); // If user exists then checking if the input password is similar to stored password using bcrypt.compare(userInput password, Stored Password)
    if (isPasswordValid) {
      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Password Bhau! ");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});
```
So here we are creating a sign In API so here we will extract our email and password from the request body and then we will check 
if the email exists in our database or not then if the user exists then we will check if the password is valid or not and if all the things are valid then we will send the response Login Successful OR We will send the error message for that particular Error.

##Pull request

## Authentication JWT & Cookies
 When user makes a API call to server that is he want's to communicate with server then he creates a connection and that connection uses the TCP/IP protocol. Then server will send back the data and connection will be closed, Similarly when we hit an API call on the server then 
 server will respond with the data and connection will close.

 So every time the API call is made the server validates that response and sends back the data and connection is closed.
 So Every time we make an API call the user needs to be validated whether the request is coming from Authorized source or Not.
 So for that User Needs to be Logged In.

 So When a user makes a logIn Request he sends his Email and Password and the server verifies the Email and Password and it will generate a JWT Token and Wrap that JWT Token inside the cookie and while sending the response back It also sends the cookie having (JWT Token) to user and now the users browser will Store this JWT, and everytime the user makes an API call for any other Request the JWT will also be sent along with the Request and server verifies that cookie(token) then responds with requested Information.
 We can also send the Expiry of this JWT token along with Response.
 And once the cookie is expired and we still make a API call the verification will fail and we will be redirected to Login Page.

 So Whenever we are sending a response __Expresss__  provides a very Good way to send the response using a cookie.
 __https://expressjs.com/en/5x/api.html#res.cookie__

 We can send the cookie when a user Log's In using __res.cookie__. 
 In our SignIn API we have set.
 for eg:
 ```javascript
 if (isPasswordValid) {
      res.cookie("token", "11132456uhgfdsdfgaxcwetuijhbvc23456789bvc");
      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Password Bhau! ");
    }
```
Here we are sending the JWT token inside the cookie using __res.cookie__ method in express JS.

And to get the cookie from the request when we try to access someother API Data we can use __req.cookies__ method.
Read About it More Here: __https://expressjs.com/en/5x/api.html#req.cookies__
for eg:
```javascript
app.get("/profile", async (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  res.send("Got the Cookie");
});
```
So here we are getting the cookie from request body but when we log this It will show _Undefined_ as we cannot Read the cookie directly 
To do that we will need a __npm package__ _cookie parser_.
Similary like when we were reading the __JSON__ data we used a middleware __express.json()__ similarly we need a middleware to Read cookies
as well.
So we need to install _cookie-parser_ using __npm i cookie-parser__.
After installing it we need to just import it and use it as we have used our Json middleware.
```javascript
const cookieParser = require("cookie-parser");
app.use(cookieParser());
```
So when we hit the Profile Route from postman it will fetch the cookie from request Header and will log the cookie in our Console.

__What is Jwt Token ?__
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 

JWT token is divided into 3 parts Header, Payload and Signature
1. **Header**: It contains the algorithm used to sign the token. For example, HS256.
2. **Payload** : It contains the data that is hidden Inside the token.
3. **Signature**: It is used to check whether this Token is valid or Not.

To create this JWT token we will be using another __NPM__ package known as _jsonwebtoken_
We will install it using __npm i jsonwebtoken__

After installing it we will require it in our __app.js__. Read it more about it's usage (https://www.npmjs.com/package/jsonwebtoken)
we will require it in our __app.js__ 

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); ///checking if user Email Exists in DataBase or Not using User Model.
    if (!user) {
      throw new Error("User Not Found With This Email:");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); // If user exists then checking if the input password is similar to stored password
  ```javascript
    if (isPasswordValid) {
      //Create a Jwt Token

      const token = await jwt.sign({ _id: user._id }, "Web@Secret789Token"); // Creating the JWT token 
      res.cookie("token", token); // sending The token in cookie 

      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Password Bhau! ");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
  ```
});

So after importing it we will sign our jwt token using __jwt.sign__ and inside that we can hide some data so here we will hide the user Id
So here the _id is the same id that is stored in our DataBase. And then we will pass a secret key into our token which only the server
will know and will be used to verify the token. So we have passed the secret key and data inside the token.

And now we will send this token back to the user using __res.cookie__ method
```javascript
res.cookie("token", token,) 
res.send("LogIn Successful")
```
And once we set the cookie we can send the response back and the cookie will also sent along with the response.
So now when we hit the login route from postman it will send the token back to the user.

Now once we have send the cookie successfully we can use that cookie in other methods to verify it.
So to verify our token in our _/profile_ Route we will extract the token from our cookie
```javascript
app.get("/profile", async (req, res) => {
  const cookies = req.cookies;
  const { token } = cookies;

  
  res.send("Got the Cookie");
});
```
So here we are extracting the token from the cookie and storing it in the token variable.
but we can-not read our token from the cookie directly so for that we have to install a middleware named __cookie-parser__
then we will use the method given by __jsonwebtoken__ package which is _jwt.verify_ to verify our token 
```javascript
app.get("/profile", async (req, res) => {
  const cookies = req.cookies;
  const { token } = cookies;

  const decodedMsg = await jwt.verify(token, "Web@Secret789Token");
  console.log(decodedMsg);

  res.send("Got the Cookie");
});
``` 
So here we have verified our Token using __jwt.verify(token,secretKey)__ method.

So next we will extract the id from our decoded message and we will get the info about logged In User.
```javascript
app.get("/profile", async (req, res) => {
  const cookies = req.cookies;
  const { token } = cookies;

  const decodedMsg = await jwt.verify(token, "Web@Secret789Token");
  const { _id } = decodedMsg;
  console.log("Logged In User is ====> ",_id);

  res.send("Got the Cookie");
});
```
After extracting the id from the msg we have logged the user in Console. Next we can find the user with that id on our User Model and we can return the user details.
```javascript  
const user = await User.findById(_id)
res.send(user)
```
We need to also add validations for our cookies if the token exists or not and whether the correct user exists with that id:
```javascript
 const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    const decodedMsg = await jwt.verify(token, "Web@Secret789Token");
    const { _id } = decodedMsg;
    const user = await User.findById(_id);

    if (!user) {
      throw new Error("User Not Found");
    }

    res.send(user);
  ```
## Creating the User Auth MiddleWare :
//Reading the token from req Cookies
//Validate the Token
//Find The User

we will Implement above things in our UserAuth middleware.
```javascript
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    //read the token from req cookies

    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token is not valid!!!");
    }

    //validate the token
    const decodedMsg = await jwt.verify(token, "Web@Secret789Token");
    const { _id } = decodedMsg;

    //Find the User
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Found");
    }
    next();
  } catch (err) {
    res.status(404).send("ERROR" + err.message);
  }
};

module.exports = {
  userAuth,
};
```
Here we have extracted the token from our cookies in our request then we have have checked if token exists in cookies or not if it does not 
exist then throw an error else verify that token using jwt.verify and our secret key and then extract the {_id} from that token then 
find the user with that id on our User Model if user is not found then throw an error and if found then pass the request to next handler.

Now we can import and use this middleware function in any request handler like profile, feed etc.
for eg:
```javascript
app.get("/profile", userAuth, async (req, res) => {
  //Profile Logic Here
})
```
Here we have used __userAuth__ middle before the request proceeds with /profile route So It will not provide the profile Data
if user is not verified.

## Implementing the /sendConnectionRequest Logic.
```javascript
app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  console.log("Sending Connection Request");
  res.send(user.firstName + " sent the Connection Request");
});
```
So here we have implemented the dummy send connection Request Logic and we have used our __userAuth__ middleware before the request proceeds
with sending the connection Request.So if the user is Authenticated then we can get our user from request  and then 
send the request with the firstName of that user.

We can also set our token to expire in sometime : Read More about it Here "https://www.npmjs.com/package/jsonwebtoken"
```javascript
 //Create a Jwt Token
      const token = await jwt.sign({ _id: user._id }, "SecrtetKey", {
        expiresIn: "0d",

      });
```
When signing our JWT token using jwt.sign() with jsonwebtoken package, We can pass various options inside the third argument.
```json
expiresIn: "2h", // Token expires in 2 hours
  notBefore: "10s", // Token starts working after 10 seconds :: Token cannot be used before 10 seconds.
  algorithm: "HS256", // Hashing algorithm
  audience: "cyfhr.com", // Intended audience :: That is it is meant for this website
  issuer: "cyfhr-auth", // Token issuer ::Token was issued by cyfhr-auth.
  subject: "user-auth", // Subject of the token :: Defines the purpose (sub) of the token.
  jwtid: "unique123", // Unique identifier for the token :: Adds a unique identifier (jti) to prevent token reuse
```

## Cookie Expiry 
We can also pass various options into our cookie as well like expiry or httpOnly etc.
Here we set our cookie to expire in 8 hrs
Read it more about it here : "https://expressjs.com/en/api.html#res.cookie"
```javascript
res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
```

## Mongoose Schema Methods:
As a Best Practice followed we should create our Jwt from methods on our userSchema
```javascript
userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({ _id: this._id }, "Web@Secret789Token", {
    expiresIn: "7d",
  });
};
```
Here we are defining a method inside our Mongoose userSchema that will generate a JWT (JSON Web Token) for a user

userSchema.methods → Allows us to add custom methods to a Mongoose schema.
getJWT → The name of the custom method.
async function () {...} → The method is asynchronous, meaning it will return a Promise.
this._id instead of user._id because this refers to the specific user document in our schema

Also here we can-not use arrow functions as this keyword only works with normal functions and not arrow functions.

**Why use methods?**
This makes it easy to call user.getJWT() from any user document to generate a token for that user
Now we can use this getJWT() function on the user 
```javascript
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); 
    if (!user) {
      throw new Error("User Not Found With This Email:");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); 

    if (isPasswordValid) {
      
      const token = await user.getJWT();  //Signing the jwt using our JWT function as we can call the getJWT function on user who is logging In

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Password Bhau! ");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});
```

So here we are signing our JWT token for logged In user using our getJWT() function that we have created on our userSchema method.
By doing this we make are code more Readable,Maintainable by offloading our JWT generation process to userSchema method.

Similarly we can also offload the password verification to userSchema method.
```javascript
userSchema.methods.verifyPwd = async function (passwordInputByUser) {
  const user = this;
  const passWordHash = user.password;

  const isValidPassword = await bcrypt.compare(
    passwordInputByUser,
    passWordHash
  );
  return isValidPassword;
};
```
So here we have created a function verifyPwd on our userSchema and then we are comparing user Input password using bcrypt.compare
and then if the password is valid then return the password and next we will use our verifyPwd() function for verifying password when a user 
Logs-In
```javascript
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); 
    if (!user) {
      throw new Error("User Not Found With This Email:");
    }
    const isPasswordValid = await user.verifyPwd(password); // If user exists then calling our verifypwd function and verifying the password

    if (isPasswordValid) {
      const token = await user.getJWT(); 

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Password Bhau! ");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});
```

## List Of API's For our APP
API's Needed In our App:

/Auth Router
-POST /signup
-POST /login
-POST /logout

profileRouter
-GET/profile/view
-PATCH/profile/edit
-PATCH /profile/password

Connection Request Router
-POST /request/send/interested/:userId
-POST /request/send/ignored/:userId
-POST /request/review/accepted/:requestId
-POST /request/review/rejected/:requestId

User Router
-GET /user/connections
-GET /user/requests/received
-GET /user/feed - gets the profile of other users on platform

status: Ignore,Interested, Accepted,Rejected
status: Ignore,Interested, Accepted,Rejected

So we will creating above API's for in our APP.

For Now we were writing all our API's in a single file which is __app.js__ but Now we are Going to use Express Router to create Our API's

## Express Router :
📌 What is Express Router?
Express Router is a built-in feature in Express.js that allows us to organize our routes efficiently by grouping them into separate modules. It helps us keep our server files clean and makes our application modular and scalable.

🔥 Why Use Express Router?
- Organizes Routes – Instead of defining all routes in app.js, We can separate them into multiple route files.
- Improves Readability – Cleaner and easier to manage large applications.
- Supports Middleware – You can apply middleware to specific route groups.
- Reusable & Modular – Easily export and import routes in different files.

To create a Express Router we import express and then access the inbuilt Router Function  like below
```javascript
const express = require('express')

const authRouter = express.Router()

module.exports = authRouter
```
__express.Router()__ creates a new instance of a router in Express. This authRouter acts like a mini Express app that can handle routes separately.

Now instead of creating our API's like __app.get()__ we will directly use it as ___authRouter.get()__ and it will work exactly like 
the app.get and for other http methods as well

```javascript
authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, email, password } = req.body;

    //Encrypt the Password
    //Creating the new Instance of User Model

    const passwordHash = await bcypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.status(201).send("Profile Created Successfully 😀. Please Log-In");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
```
So here we have created a file for our auth Routers(Sign-In/Sign-Up) and then we have passed the logic for our Sign-In and Sign-Up 
here and we can remove the logic from our app.js as we no longer need it there after creating a separate folder for our auth and other
Routes like profile and Requests.

Now after defining them in Separate Files we can Import them in our __app.js__ file and then we define our route using __app.use()__.
```javascript
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/",authRouter)
app.use("/",profileRouter)
app.use("/",requestRouter)
```
So here we have imported our different routes created using express.Router and then we have defined them using __app.use()__.
This is how we can separate our routes in different files and then import them in our main app.js.

## Creating a Log-Out API
In-side our auth Router we will create a API for Logging-OUT an User.
To create the log-out API we have to just set our token to null and send the response to user 
```javascript
authRouter.post("/logout", (req, res) => {
  res.clearCookie("token", null, {
    expires: new Date(Date.now()),
  });

  res.send("Log-Out Successfull");
});
```
Doing this will set the token null and we have successfully created the Log-Out API.
we can use the __res.clearCookie__ method or we can also use __res.cookie__ method to set our token null.
```javascript
res.cookie("token",null,{
  expires: new Date(Dat.now())
})
```
In Both the ways we can create a Log-Out API in our auth Router.

we can also use chaining instead of writing __res__ everytime.
for eg:
```javascript
res
.clearCookie("token",null,{
  expires:new Date(Date.now())
})
.send("Log-out Successfull")
```
This is also how we can write the log-out API using Chaining.

## Creating the Patch API for our user Profile:
Here we are creating a Patch API for our User Profile.
```javascript
profileRouter.patch("/profile/edit", userAuth, (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      return res.status(400).send("Edit Not Allowed On This Field");
    }
    const loggedInUser = req.user;
    console.log(loggedInUser);
  } catch (err) {
    console.log("Error :" + err);
  }
});

```
so here we have created our __/profile/edit__ API and inside which we have passed our **validateEditProfileData** function which we
have defined in our __validation__ file which checks whether the Body includes the fields which are allowed to edit or Not.
and then if it is allowed to edit then we are getting the loggedInUser from the req.user which we have attached in our __userAuth__
middleware file define in __auth.js__ file.


```javascript
 const validateEditProfileData = (req, res) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "password",
    "phototUrl",
    "about",
    "skills",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};
```
Here we have defined our **validateEditProfileData** function which checks if the user is trying to
edit any of the fields which are allowed to be edited. If the validateEditProfileData function does not include the field the user is
trying to edit then it will throw an Error.
```javascript
 Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
await loggedInUser.save();
```
So here we are going over every field that we are receiving in our req body and then we are updating that in our loggeInUser Body
and then we are saving the loggedInUser in the database using the **save** method of the 
**mongoose** model.

We can send the response back to user in __json__ format so that user can see his updated information instantly.
```javascript
    res.json({ message: `${loggedInUser.firstName}`, data: loggedInUser });
```

## Higher Order Functions :
A function which takes another function as Argument or Returns a function from it is known as Higher Order function.
for eg:
```javascript
function x(){
  console.log("Hello")
}

function y(x){
  x();
}
```
So here function __Y__ is a Higher Order Function which takes __x__ as an Argument.So here X is known as callback function and y is a Higher 
Order function

## Creating a /sendConnectionRequest API.
To create /sendConnectionRequest API wee have to first create a Schema to store these connections separately from __userSchema__ as 
the connection Request that a user sends will have many cases like whether they will be accepted or rejected or they will be still in pending
state.
So for that in our models folder we will add a file to create our connection Request schema.

To create our __connectionRequestSchema__ we will import mongoose and then we will call the Schema method on the mongoose model and then we will pass an Object inside it.
```javascript
const mongoose = require("mongoose")

const connectionRequestSchema = new mongoose.schema({
  fromUserId:{
    type:mongoose.Scehma.Types.ObjectId
  },
  toUserId:{
    type:mongoose.Schema.Types.ObjectId
  },
  status:{
    type:String,
    enum:["Ignore","Interested","Accepted","Rejected"]
    message:`{VALUE} is In-Correct Status Type`
  }
})
```
Here in status we have used __enum__ which takes an Array creates a validator that checks if the value is strictly equal to one of the values in the given array.
If value is not there we can pass a custome error message that the provided value does not exist in our Status.

We can also add this enum validation in our userSchema on gender field or we can also use the validator function that we have passed there.

After Creating the ConnectionRequest schema we will create a Model from that Schema.
```javascript
const ConnectionRequestModel = new mongoose.model("ConnectionRequest",connectionRequestSchema)

module.exports = ConnectionRequestModel;
```
After creating the Model we have exported the model.
Now we can create our connectionRequestApi and we can put some data into it.

## Creating the sendConnectionRequestAPI :
We will creating our sendConnectionRequestApi in request.js file as we have already had a sendConnectionRequest API in that so we can 
modify and create the connection new sendConnectionRequest-API.
```javascript
requestRouter.post("/request/send/interested/:toUserId",async(req,res)=>{
  try {
    const fromUserId = req.user._id
  }
})
```
So here our fromUserId will be the userId of the Logged-In User and we are getting that from our userAuth middleware after we are verifying that
user is Logged in and then we are attaching that user and callinf the next middleware function and after that we are extracting the user._id 
in our sendConnection Request API.
So the fromUserId will be the user Id of the loggedInUser and toUserId will come from 
```javascript
const toUserId = req.params.toUserId
```
and also our status will come from params
```javascript
const status = req.params.status
```
Now After fetching the fromUserId , toUserId and status we will pass it into user Model and then we will call save method on our User
Model.
```javascript
requestRouter.post(
  "/request/send/:status/:touserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.touserId;
      const status = req.params.status;

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();
      res.json({
        message: "Connection Request Sent Successfully",
        data,
      });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);
```
And Once we hit the above post API path with Correct User Details the above connection Request will be sent and save in our connectionRequestSchema as we have called __.save()__ method on our connction Request Schema.

We can also add validation on our sendConnectionRequest API to allow only the status type as either "interested" or "rejected":
for eg:
```javascript
requestRouter.post(
  "/request/send/:status/:touserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.touserId;
      const status = req.params.status;

      const allowedStatus = ["ignored", "interested"];

      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: "Invalid Status Type: " + status });
      }


      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();
      res.json({
        message: "Connection Request Sent Successfully",
        data,
      });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);
```
So here we are only allowing the status to be either interested or rejected as while sending the connection request only these 2 statuses should
be allowed.If the user tries to send any other status then it should be rejected with 400 and status.

And we also need to add other validations like if a user has sent connection Request to another user then he should not be able to send
the connection Request Again to Same user.
So for that we will add one more validation
```javascript
const existingConnectionRequest = await ConnectionRequest.findOne({
  fromUserId,
  toUserId
})
```
So here we are checking on our User Model whether connection Request Already Exists or Not.

And we also have to add the Check for whether the other user has sent the connection Request already to this user or Not.
```javascript
const existingConnectionRequest = await ConnectionRequest.finOne({
  $or:[
    {fromUserId,toUserId},{fromUserId:toUserId,toUserId:fromUserId }
  ]
})
```
So here we are a checking whether fromUserId and toUserId are same using __$or__ method available on mongoose and then we are checking whether the fromUserId is toUserId or toUserId is from user Id.
So here we are checking whether the connection Request Already Exists and was sent by Logged-In User or sent by the other User.

[$or query $and query in mongoose] - [https://www.mongodb.com/docs/manual/reference/operator/query-logical/]

We can add one more check for if the person we are trying to send connection request exists in our DataBase or Not:
```javascript
const toUser = await User.findById(toUserId)
if(!toUser){
  return res.status(404).send("User Not Found 😕")
}
```

There is one more case that we can add is whether the user is trying to send the Connection Request to himself.
We can add this check using __pre__ middleware provided by mongoose: 
[Pre Method][https://mongoosejs.com/docs/middleware.html#pre]

This middleware works before we save the data to DataBase as we are calling it pre - saving And we can define it inside our Connection-Request 
Schema
```javascript
connectionRequestSchema.pre("save",function (){
  const connectionRequest = this;
  //Check if the from User Id is same as To user Id:

  if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
    throw new Error("You cannot send Connection Request to Yourselves !")
  }
})
```

## Creating Indexes on our Data-Base:
Indexes in a database significantly improve the performance of queries by reducing the number of records the database needs to scan. Instead of scanning every document (a full collection scan), an index allows MongoDB to quickly locate relevant documents.

When our Database grows in Size due to many number of Records Inserted into It, It will become slow overtime and to optimize it,
we can create indexes on our DataBase to improve the performance of our queries. 

When we write __unique__ as true for any field in our Schema file the Mongo-DB automatically creates index for that field.
we can also write __index:true__ for the field we want to create index for:

We can also create a compound index (multiple fields) on our connectionRequestSchema to make it more efficient.
```javascript
connectionRequestSchema.index({fromUserId:1,toUserId:1})
```
And this improves the performance of the query when someone tries to find a user using User Id.
[Cerating Indexes on fields Mongoose DOC][https://mongoosejs.com/docs/api/schema.html#Schema.prototype.index()]
[Read this arcticle about compond indexes] [https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/]

If you create an index on email:
```javascript
db.users.createIndex({ email: 1 });
```
MongoDB stores email addresses in a B-tree index (a sorted structure).
When We search for "user@example.com", MongoDB quickly locates the document without scanning all records.
The time complexity is O(log n), which is much faster than O(n).
Result: Even with 1 million users, MongoDB finds the user almost instantly instead of scanning all records.

✅ With an index, MongoDB searches the B-tree structure instead of scanning all documents.
✅ Queries on indexed fields are much faster and more efficient.
✅ Indexes are automatically updated when you insert, update, or delete documents.


## Creating the API for Accepting or Rejecting the Connection Request :
So here We are creating the API to accept or Reject the connection Request.
so first we are gettting the info of the LoggedIn User which is coming from the userAuth.
Then we are getting the status and requestId from our Route Params.
Then we have set a allowed Status Type for this API which is Either the User can Accept or Reject the Connection Request.

So If the status coming in route parameter is other than accepted or Rejected then we will throw the Error that this Status is not Allowed.

But If it is a valid Status then we will check in our ConnectionRequest Model whether the request Id Exists in our __ConnectionRequest__
Model or not if it exists then we are also checking whether the loggedInUser is toUser and also the Status is __interested__.
If any of these details do not match then we will throw an Error that Connection Request Does not Exist.

And If all the details match then we will change the status of in connectionRequest Model by setting __ConnectionRequest.status = status__
connectionRequest.status to the Status coming from our Body.
 And Then we are saving that in our DataBase by calling __.save()__ method on ConnectionRequest Model.
 
 And then sending the Successful Message to Client.
 
```javascript
requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const { status, requestId } = req.params;

      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({ message: "Status Not Allowed Babua 🤨" });
      }

      const connectionRequest = await ConnectionRequest.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "interested",
      });
      if (!connectionRequest) {
        return res
          .status(404)
          .json({ message: "Connection Naikhe Milal Re 😑" });
      }

      connectionRequest.status = status;

      const data = await connectionRequest.save();

      res.json({ message: "Connection Request Accepted SuccessFully", data });
      //validate the status whether it is correct or Not.
      //krishna ==> Elon (when krishna sent the request to Elon)
      //Elon should be Logged In User
      //Status should be Interested
    } catch (err) {
      res.status(400).send("ERROR :" + err.message);
    }
  }
);
```
## Creating the GET API to fetch all the Pending connections requests for Logged In User:

```javascript
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequestModel.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", ["firstName", "lastName"]);

    res.json({
      message: "Data Fetched Successfully",
      data: connectionRequests,
    });
  } catch (err) {
    res.status(400).send("ERROR :" + err.message);
  }
});
```

## Creating Relation between two Collections (Tables)
To create a link between the 2 tables in MongoDB we use a __ref__ field and then we can pass the table Name which we want to Link.
for eg:
```javascript
const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect Status Type`,
      },
    },
  },
  {
    timestamps: true,
  }
);
```
So here In our __fromUserId__ and __toUserId__ field we have specified a __ref:__  reference to our User collection and it creates link between the 2 tables internally and it will fecth the user which is there in User table with that __fromUserID__ and __toUserId__.
And after passing this __ref__ we can now use a __.populate()__ method on our connectionRequest Model and pass the data that we want from
__fromuserId__ field.
```javascript
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequestModel.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", ["firstName", "lastName"]);

    res.json({
      message: "Data Fetched Successfully",
      data: connectionRequests,
    });
  } catch (err) {
    res.status(400).send("ERROR :" + err.message);
  }
});
```
So after passing the __ref__ on our connectionRequestSchema's fromUserId field we can use a __.popoluate__ method on our connection Request
Model and mention the field names.
.populate("fromUserId", ["firstName", "lastName"]) does the following:

"fromUserId" is a reference (ObjectId) to another collection (User model).
Instead of returning just the ObjectId, Mongoose replaces it with the actual user document.
It only includes firstName and lastName from the User collection (excluding other fields).

If we do not specify the field names to fetch for our "fromUserId" then it will fetch all the fields for that __fromUserId__ from __User__ collection.
So we should not allow OverFetching the data from Our API's and to do that we are limiting the number of fields that we are getting from the 
User Collection.

So to filter the fields we are explicitly specifying the field names as an Array that should be returned for that __fromUserId__:
```javascript
.populate("fromUserId", ["firstName", "lastName"]);
```
So For better performance and security: Always fetch only the fields you need instead of the entire document.
Either we can pass an Array like above or we can pass strings as field names which we want to fetch using __.populate()__
for eg:
```javascript
.populate("fromUserId", "firstName lastName photoUrl ");
```
while passing the string we have to just separate them by a Space

And then we are sending that data to client in JSON format so this is how we create a realtion betweeen two collections in Mongoose.
[Read More about ref and populate][https://mongoosejs.com/docs/populate.html]

## Creating the get API to get all the connection Requests which a user has accepted 
To get the connection Request that has been accepted by a user we will use a or method on our ConnectionRequestModel to find the userId of 
logged in User as logged user could be toUserId or fromUserId and then we will fetch only the fields which are there in __USER_SAFE_DATA__ 
Variable which we have created and then we are using map method to fetch the fields from __fromUserId__ or __toUserId__

```javascript

const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills";

userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequestModel.find({
      $or: [
        { toUserId: loggedInUser._id, status: "accepted" },
        { fromUserId: loggedInUser._id, status: "accepted" },
      ],
    }).populate("fromUserId", USER_SAFE_DATA).populate("toUserId",USER_SAFE_DATA);

    const data = connectionRequest.map((row) => row.fromUserId);

    res.json({ data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
```
## Creating the feed API for Users:
To create this API we have to make sure that :
1) User should not see his own Card in his Feed
2) User should not see the cards of users who have already accpeted the connection Request of the user or User has accepted their Connection Req.
3) User should not see the cards of user whom he has ignored or already sent the connection Request to them.

```javascript
userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    //User should see all the user cards except
    //0: his Own Card
    //1: his connections
    //2:ignored people
    //3:already sent the connection Request.

    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequestModel.find({
      $or: [{ fromUserId: loggedInUser._id }, { toUserId: loggedInUser._id }],
    })
      .select("fromUserId toUserId")
      .populate("fromUserId", "firstName")
      .populate("toUserId", "firstName");

    res.send(connectionRequests);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
```
So here we have created a get API to fetch all the the users to whom we have sent the connection Request.
 But we will have to find the unique users with above conditions as true.
 So for that we  will create a data-structure which is set.
 ```javascript
 const hideUsersFromFeed = new set();
 connectionRequests.forEach((req)=>{
  hideUsersFromFeed.add(req.fromUserId);
  hideUsersFromFeed.add(req.toUserId);
 })
console.log(hideUsersFromFeed)
 ```
 So using the set data structure we are hiding the user details to whom we have sent the request or received the request if we are 
connection with them.

So now we will find the users from our dataBase whose id's are not present in our __hideUsersFromFeed__ set.
```javascript
const user = await User.find({
_id:{$nin:Array.from(hideUsersFromFeed)}
})
```
nin- Not In
And we also need to write a and Query to hide our Card as well.
```javascript
const user = await User.find({
  $and:[{_id:{nin:Array.from(hideUsersFromFeed)}},
    {_id:{$ne:loggedInUser._id}},
  ]
})
```
and we will only Select the fields which we have in our __USER_SAFE_DATA__ so for that we will do a select Query on our __User__ Model
```javascript
const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills";

const user = await User.find({
  $and:[{_id:{nin:Array.from(hideUsersFromFeed)}},
    {_id:{$ne:loggedInUser._id}},
  ]
}).select(USER_SAFE_DATA)
```
So here we are selecting only the fields which are there in USER_SAFE_DATA to prevent users from OverFetching the Data.
[Read More About Comparison Parameter nin,ne][https://www.mongodb.com/docs/manual/reference/operator/query/nin/]

## Adding Pagination in Our API.
To create the Pagination We will use __.skip()__ and __.limit()__ functions in MongoDB.

for Eg:
If we do .skip(0) & .limit(10) then it show us first 10 users and skip 0 users.
If we do .skip(10) & .limit(10) then it show us next 10 users and skip 10 users.


so here we are getting our page from our __req.params__ and if it is not specified then we are setting as 1
and for the limit as well we are keeping it 10 if not sepcified.

And we have to calculate skip using a Formula
like skip = (page-1)*limit;
so here if we are on page 4 so it will do 4-1 which will be 3 and then multiply by 10 so it will be equal to 30.
so it will skip 30 records
And then we have passed our skip and Limit into skip and limit functions of Mongoose.
```javascript
userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    //User should see all the user cards except
    //0: his Own Card
    //1: his connections
    //2:ignored people
    //3:already sent the connection Request.
  const loggedInUser = req.user;


    const page = parseInt(req.query.page) || 1;
    let  limit = parseInt(req.query.limit) || 4;
     limit =  limit >50 ? 50 : limit 
     const skip = (page-1)*limit;


  

    const connectionRequests = await ConnectionRequestModel.find({
      $or: [{ fromUserId: loggedInUser._id }, { toUserId: loggedInUser._id }],
    }).select("fromUserId toUserId");

    const hideUsersFromFeed = new Set();
    connectionRequests.forEach((req) => {
      hideUsersFromFeed.add(req.fromUserId.toString());
      hideUsersFromFeed.add(req.toUserId.toString());
    });

    const users = await User.find({
      $and: [
        { _id: { $nin: Array.from(hideUsersFromFeed) } },
        { _id: { $ne: loggedInUser._id } },
      ],
    })
      .select(USER_SAFE_DATA)
      .skip(skip)
      .limit(limit);

    res.send(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
```