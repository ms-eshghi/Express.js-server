import express,{Request,Response} from 'express'
import path from 'path'


const app=express();
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.use(express.static(path.join(__dirname, '../public')));

app.get('/hello', (_req: Request, res: Response) => {
  res.json({ msg: 'Hello world!' });
});

app.get('/echo/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});

app.post('/sum', (req: Request, res: Response) => {
  const numbers: number[] = req.body.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

type TUser = { name: string; email: string };
const users: TUser[] = [];

app.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  users.push({ name, email });
  res.json({ msg: 'User successfully added' });
});

app.get('/users', (_req: Request, res: Response) => {
  res.status(201).json(users);
});

export default app;
