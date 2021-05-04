const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let results = await db.read();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let results = await db.readOne(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    let results = await db.create(req.body.name, req.body.age, req.body.gender);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let results = await db.update(
      req.params.id,
      req.body.name,
      req.body.age,
      req.body.gender
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db.delete(req.params.id);
    res.json({
      success: "user deleted successfuly",
    });
  } catch (e) {
    console.log(e);
    res
      .json({
        error: e,
      })
      .sendStatus(500);
  }
});

module.exports = router;
