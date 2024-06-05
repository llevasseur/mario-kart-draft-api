const router = require("express").Router();
const prixController = require("../controllers/prix-controller.js");

router.route("/").get(prixController.index);

module.exports = router;