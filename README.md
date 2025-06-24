First Express Server

This project is a complete exercise in building your **first Express.js server** with TypeScript. It includes various GET and POST endpoints and connects a static frontend to a backend API for interaction and data handling.

> ✅ Fully working with `tsc-watch` + `nodemon` and designed for beginners in backend development.

---

## 📚 Assignment Tasks Overview

### 1️⃣ Hello World Route

- **Route:** `GET /hello`
- **Response:**
```json
{ "msg": "Hello world!" }

2️⃣ Echo Route
Route: GET /echo/:id

Example: /echo/dog

Response:
json
{ "id": "dog" }

3️⃣ Sum Route (POST)
Route: POST /sum

Request Body:
json
{ "numbers": [1, 2, 3] }

Response:
json
{ "sum": 6 }

4️⃣ Front-End + Back-End Communication
A static frontend (public/index.html) contains a form with:

Name input

Email input

Submit button

Route: POST /users

Backend Actions:

Accepts { name, email }

Stores it in a temporary array

Responds with:
json
{ "msg": "User successfully added" }

5️⃣ Render All Users in Frontend
Route: GET /users

Response:
json

[
  { "name": "Alice", "email": "alice@example.com" },
  { "name": "Bob", "email": "bob@example.com" }
]
In the frontend, the names and emails are shown in a list as:

nginx
Alice - alice@example.com

🧪 How to Run
🛠 Install dependencies\

npm install

▶️ Start the server in dev mode

npm start

This runs tsc-watch and nodemon:
json
"start": "tsc-watch --onSuccess \"nodemon dist/index.js\""

🔧 Technologies Used
Node.js
Express.js
TypeScript
Nodemon + tsc-watch (for development)
HTML + vanilla JS (frontend)

