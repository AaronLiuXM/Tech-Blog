const sequelize = require("../config/config");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "aaron",
    email: "aaron@email.com",
    password: "password123",
  },
  {
    username: "yating",
    email: "yating@email.com",
    password: "password123",
  },
  {
    username: "john",
    email: "john@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
