"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = Number(process.env.PORT || 8000);
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/octofit";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ status: "ok", service: "octofit-backend" });
});
async function start() {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("Connected to MongoDB", MONGO_URI);
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    }
    catch (err) {
        console.error("Failed to start server", err);
        process.exit(1);
    }
}
start();
