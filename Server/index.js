const express = require("express");
const api = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};

api.use(cors(corsOptions));

const data = [
  {
    name: "arek",
    id: 1,
    description: "contract tests",
  },
  {
    name: "marek",
    id: 2,
    description: "contract tests 2",
  },
  {
    name: "bartek",
    id: 3,
    description: "contract tests 3",
  },
];

const HOST = "localhost";
const port = 8080;

api.get("/", (req, res) => {
  res.send("test");
});

api.get("/users", (req, res) => {
  res.status(200).json(data);
});

api.listen(port, () => {});
