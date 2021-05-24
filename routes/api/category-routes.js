const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((rowsupdated) => {
      res.json({
        rowsupdated
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err,
      });
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.del
});

module.exports = router;
