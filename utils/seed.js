const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "Alex",
    email: "secretariuss@ukr.net",
    thought: [],
},
];

console.log(connection);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seed added!");
  process.exit(0);
});