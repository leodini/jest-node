const routes = require("express").Router();
const { User } = require("./app/models");

async function createUser() {
  const user = await User.create({
    name: "leo",
    email: "leo@leo.com",
    password_hash: "12314124",
  });

  console.log(user);
}

createUser();

module.exports = routes;
