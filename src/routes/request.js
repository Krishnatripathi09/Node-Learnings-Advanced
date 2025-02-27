const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const requestRouter = express.Router();
const User = require("../models/user");

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

      //If Connection Request Already Exists:
      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
          { fromUserId, toUserId },
          {
            fromUserId: toUserId,
            toUserId: fromUserId, //For Mutual Connection Request
          },
        ],
      });

      if (existingConnectionRequest) {
        return res
          .status(400)
          .json({ message: "Connection Request Already Exists 😏" });
      }

      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(404).json({ message: "User Not Found 😕" });
      }

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();
      res.json({
        message:
          req.user.firstName +
          " is " +
          status +
          " " +
          " in " +
          toUser.firstName,
        data,
      });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);

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
module.exports = requestRouter;
