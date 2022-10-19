const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");
async function getContent() {
  try {
    const res = await fetch("https://localhost:7003/api/Clubes");
    console.log(res);
    const data = await res.json();
    show(data);
  } catch (err) {
    console.log("errou");
  }
}
getContent();
function show(users) {
  let output = "";
  for (let users of user) {
    output += `<li>${user.email}</li>`;
  }
  document.querySelector("main").innerHTML = output;
}
app.use(cors());
app.get("/", async (req, res) => {
  const { data } = await axios("https://localhost:7003/api/Clubesgi");
  console.log(data);
  return res.json([{ email: "tati@gmail.com" }, { senha: "123456" }]);
});
app.listen(7003);
