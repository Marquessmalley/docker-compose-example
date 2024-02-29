const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, exercitationem?",
    },
    {
      id: "2",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, exercitationem?",
    },
    {
      id: "3",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, exercitationem?",
    },
    {
      id: "4",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, exercitationem????",
    },
  ]);
});

app.listen(4000, () => {
  console.log("Listen for requests on port 4000...");
});
