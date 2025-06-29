import express, { Router, Request, Response } from "express";
import path from "path";

export type TUser = {
  name: string;
  email: string;
};

const router = Router();
const users: TUser[] = [];

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/hello", (_req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});

app.post("/sum", (req: Request, res: Response) => {
  const numbers: number[] = req.body.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

app.post("/users", (req: Request, res: Response) => {
  const user: TUser = req.body;
  users.push(user);
  res.json({ message: "User successfully added" });
});

app.get("/users", (_req: Request, res: Response) => {
  const result: { users: TUser[] } = { users };
  res.status(201).json(result);
});

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
export default app;
