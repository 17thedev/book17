const express = require("express");
const router = express.Router();

// SMS PLACEHOLDER (Termii / Twilio)
router.post("/send", async (req, res) => {
  res.json({
    msg: "SMS placeholder triggered",
    status: "ready for integration"
  });
});

module.exports = router;
