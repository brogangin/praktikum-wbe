var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  return res.send({
    project: "API v1 Web Service Praktikum Back-ENd",
  });
});

var userApi = require("../../api/controller/UserController");
// User
router.get("/user", userApi.get);
router.get("/user/:id", userApi.getById);
router.post("/user", userApi.create);
router.put("/user/:id", userApi.update);
router.delete("/user/:id", userApi.delete);
module.exports = router;
