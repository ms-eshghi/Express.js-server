"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public/index.html"));
});
app.get("/hello", (_req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req, res) => {
    res.json({ id: req.params.id });
});
app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    const sum = numbers.reduce((a, b) => a + b, 0);
    res.json({ sum });
});
const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
];
app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: "User successfully added" });
});
app.get("/users", (_req, res) => {
    const result = { users };
    res.status(201).json(result);
});
exports.default = app;
