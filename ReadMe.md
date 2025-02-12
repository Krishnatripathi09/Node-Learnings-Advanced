
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

The second digits (21) represents minor updates which can be installed in our app and wil not do any harm The third digits (2) represents patch updates which are also safe to install in our app and will not do any harm.

__(^)__ symbol means our app can accept minor and patch updates without any issue. __(~)__ symbol means our app avoids version updates that could introduce new features or bugs if it does not have any symbol then it means that project needs exact dependencies to run.

while pacakage.json is flexible with installing new minor updates or patch versions but pacakage.lock.json will install exact version of the dependency and will not accept any changes in its version minor or major
