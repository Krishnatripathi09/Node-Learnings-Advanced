
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

const app = express()


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
for path __/a/__ and __/b/__ as we have used regex in our path to accept only the numbers in our path after (a).

## Query Params :
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

##  Dynamic Routes:
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
So to make our Route handler to go for the next function if we do not provide any response in the first function we have to sepcify one more 
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

We can define as many Route Handlers inside our route as many we want we can also wrap our route handlers inside an array
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

Instead of using middleware like above we can also use it like below if we just single htpp methods.
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
Now to create a database directly in our cluster we can specify the name of the DataBase after our connection string.
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