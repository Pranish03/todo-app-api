import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
  res.json({
    httpMethod: "GET",
    message: "Get all todos",
  });
});


router.get("/:id", (req, res) => {
  res.json({
    httpMethod: "GET",
    id: req.params.id,
    message: "Get single todo",
  });
});


router.post("/", (req, res) => {
  res.json({
    httpMethod: "POST",
    body: req.body,
    message: "Create todo",
  });
});

router.put("/:id", (req, res) => {
  res.json({
    httpMethod: "PUT",
    id: req.params.id,
    body: req.body,
    message: "Update todo",
  });
});


router.delete("/:id", (req, res) => {
  res.json({
    httpMethod: "DELETE",
    id: req.params.id,
    message: "Delete todo",
  });
});

export default router;