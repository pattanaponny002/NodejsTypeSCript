import express, { Express, Request, Response, NextFunction } from "express";
import UserRouter from "./routes/user_route";
const app = express();

app.use(express.json());
app.use("/api", UserRouter);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "messaging" });
});
app.listen(5000, () => console.log("Server is running on port 5000"));
