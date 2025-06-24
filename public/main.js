document
  .getElementById("userForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    alert(result.msg);
    document.getElementById("userForm").reset();
  });

document
  .getElementById("getUsers")
  .addEventListener("click", async function () {
    const response = await fetch("/users");
    const users = await response.json();

    const list = document.getElementById("userList");
    list.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      list.appendChild(li);
    });
  });

document
  .getElementById("sumForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const input = document.getElementById("numbers").value;
    const numberArray = input
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    if (numberArray.length === 0) {
      document.getElementById("sumResult").textContent =
        "Please enter valid numbers.";
      return;
    }

    const response = await fetch("/sum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ numbers: numberArray }),
    });

    const data = await response.json();
    document.getElementById("sumResult").textContent = `Sum: ${data.sum}`;
  });
