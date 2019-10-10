const express = require("express");
const router = express.Router();

// variables
const data = [
  {
    name: "Pie Chart",
    url: "dashboard/piechart"
  },
  {
    name: "Radar Chart",
    url: "dashboard/radar"
  },
  {
    name: "XY Chart 1",
    url: "dashboard/xychart"
  },
  {
    name: "Pie Chart 2",
    url: "dashboard/piechart"
  },
  {
    name: "Radar Chart 2",
    url: "dashboard/radar"
  },
  {
    name: "XY Chart 2",
    url: "dashboard/xychart"
  },
  {
    name: "Table & Chart",
    age: 36,
    url: "dashboard/tablechart"
  }
];

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get("/", async (req, res) => {
  try {
    var text = req.query.text;
    console.log(req.query);
    const newArray = await data.filter(function(el) {
      return el.name.toLowerCase().includes(text.toLowerCase());
    });
    console.log(newArray);
    res.json(newArray);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get("/:text", async (req, res) => {
  try {
    var text = req.param.text;
    console.log(text);
    const newArray = await data.filter(function(el) {
      return el.name.toLowerCase().includes(text.toLowerCase());
    });
    res.json(newArray);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
