const { Post } = require("../models");

const postData = [
  {
    title: "Windows 11, beneath the hood: A complete guide",
    content:
      "Microsoft had to make the upgrade process to Windows 11 as easy and user-friendly as possible to get widespread adoption, and that is what they achieved. ",
    user_id: 1,
  },
  {
    title: "Developer onboarding for new college grads",
    content:
      "What do employers need to think about when designing an engineer onboarding program for new college hires?",
    user_id: 2,
  },
  {
    title: "From phone sales to six figures: How ACG helped Winston Smith",
    content:
      "Winston Smith’s story is a testament to the real-life benefits upskilling can bring. In a very short time, Winston transitioned from phone sales to a thriving cloud career. He currently works full-time as a cloud architect, does contract work, and manages his own eCommerce brand.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
