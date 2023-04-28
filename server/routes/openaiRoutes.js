const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/chatbot", chatbotController);
router.post("/scifi-image", scifiImageController);

module.exports = router;
