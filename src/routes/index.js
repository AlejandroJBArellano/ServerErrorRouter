const express = require("express"), router = express.Router(), indexController = require("../controllers/index");

router.get("/", indexController.index);
router.get("/sessions", indexController.sessions);

module.exports = router;