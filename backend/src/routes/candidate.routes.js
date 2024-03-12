module.exports = app => {
  const candidates = require("../controllers/candidate.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", candidates.create);

  // Retrieve all Tutorials
  router.get("/", candidates.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", candidates.findOne);

  // Update a Tutorial with id
  router.put("/:id", candidates.update);

  // Delete a Tutorial with id
  router.delete("/:id", candidates.delete);

  // Delete all Tutorials
  router.delete("/", candidates.deleteAll);

  app.use("/api/candidates", router);
};
