const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();

// / Initialize Files, File Data
const routesData = `${__dirname}` + "/model/runningRoutes.js";
let Routes = require(routesData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  try {
    Routes.find()
      .sort({ date: 1 })
      .then(route => res.json(route));
  } catch (er) {
    console.log("Error fetching data", er);
    res.json(500).send(er);
  }
});
router.post("/", (req, res) => {
  const newRoute = new Routes({
    name: req.body.name,
    age: req.body.age,
    comment: req.body.comment
  });
  console.log(req.body);

  newRoute.save().then(newRoute => res.json(newRoute));
});
// router.delete("/:id", (req, res) => {
//   console.log(req.params.id);
//   Router.findById(req.params.id).then(route =>
//     route
//       .remove()
//       .then(() =>
//         res
//           .json({ success: true })
//           .catch(er => res.status(404).json({ success: false }))
//       )
//   );
// });
module.exports = router;
