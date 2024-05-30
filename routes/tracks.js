const router = require("express").Router();
const trackController = require("../controllers/track-controller.js");

router.route("/").get(trackController.index);

modules.exports = router;
