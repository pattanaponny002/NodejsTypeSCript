"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/welcome", (req, res) => {
    res.status(200).json("HELL MY APP");
});
exports.default = router;
