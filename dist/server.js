"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user_route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", user_route_1.default);
app.get("/", (req, res, next) => {
    res.json({ message: "messaging" });
});
app.listen(process.env.PORT || 5000, () => console.log("Server is running on port 5000"));
