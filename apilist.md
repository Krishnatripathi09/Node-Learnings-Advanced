API's Needed In our App:

/Auth Router
-POST /signup
-POST /login
-POST /logout

profileRouter
-GET/profile/view
-PATCH/profile/edit
-PATCH /profile/password ----- Write the Logic By Your-selves

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