import express, { Express, Router } from "express";

const router = Router();

router.get("/welcome", (req, res) => {
  res.status(200).json("HELL MY APP");
});

export default router;
