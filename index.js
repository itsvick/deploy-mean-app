const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
let taskList = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cors());

const findTaskIndex = (id) => taskList.findIndex((item) => item._id === id);

app.get("/", (req, res) => {
  res.send("here is the home page");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const _id = uuidv4();
  const task = { _id, ...req.body };
  taskList.push(task);
  res.send({
    id: _id,
    message: "Task added successfully",
  });
});

app.get("/getList", (req, res) => {
  res.send(taskList);
});

app.get("/getTask/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const index = findTaskIndex(id);
  if (index > -1) {
    res.send(taskList[index]);
  } else {
    res.status(404).send({ message: "Task Not available" });
  }
});

app.patch("/updateTask/:id", (req, res) => {
  const id = req.params.id;
  const index = findTaskIndex(id);
  if (index > -1) {
    taskList[index] = req.body;
    res.send({
      id,
      message: "Task updated successfully!",
    });
  } else {
    res.status(404).send({ message: "Task Not available" });
  }
});

app.delete("/clearList", (req, res) => {
  taskList = [];
  res.send({ message: "All task deleted successfully!" });
});

app.delete("/deleteTask/:id", (req, res) => {
  const id = req.params.id;
  const index = findTaskIndex(id);
  if (index > -1) {
    taskList = taskList.filter((item, itemIndex) => index != itemIndex);
    res.send({ id, message: "Task deleted successfully!" });
  } else {
    res.status(404).send({ message: "Task Not available" });
  }
});

app.listen(port, () => {
  console.log("App listening on port", port);
});
