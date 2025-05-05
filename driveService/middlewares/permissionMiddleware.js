const Organisation = require("../models/OrganisationModel");

const isPermissionAvailable = async (req, res, next) => {
  const { orgName, toOrg, action = "read" } = req.body;
  console.log("Request body:", req.body)
  try {
    const org = await Organisation.findOne({
      name: orgName
    }).populate("permissions");
    if (!org) {
      res.status(400).send({
        status: "failed",
        message: "Incorrect organisation."
      });
    } else if (org.permissions.write.includes(toOrg)) {
      next();
    } else if (org.permissions[action].includes(toOrg)) {
      next();
    } else {
      res.status(401).send({
        status: "failed",
        message: "You dont have permission for this action."
      });
    }
  } catch (err) {
    res.status(400).send({
      status: "failed",
      message: err.message
    });
  }
}

module.exports = {
  isPermissionAvailable
}