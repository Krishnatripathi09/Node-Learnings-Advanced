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
