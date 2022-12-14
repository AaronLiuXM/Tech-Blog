const router = require("express").Router();
const sequelize = require("../config/config");
const { Post, User, Comment } = require("../models");
//const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "title", "content"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/*router.get(
  "/edit/:id",
  withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
      attributes: [
        "id",
        "post_url",
        "title",
        "created_at",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
          ),
          "vote_count",
        ],
      ],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    })
      .then((dbPostData) => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });

          res.render("edit-post", {
            post,
            loggedIn: true,
          });
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);*/

module.exports = router;
