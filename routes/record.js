const express = require("express");

const recordRoutes = express.Router();
const dbo = require("../db/conn");

recordRoutes.route("/api/games/all").get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  console.log("dbConnect: ", dbConnect);
  dbConnect
    .collection("games")
    .find({})
    .limit(20000)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route("/api/plays/all").get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  console.log("dbConnect: ", dbConnect);
  dbConnect
    .collection("plays")
    .find({})
    .limit(20000)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});
recordRoutes.route("/api/game/:homeTeam").get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { "homeTeamAbbr": "" + _req.params.homeTeam + "" };
  dbConnect
    .collection("games")
    .find(listingQuery)
    .limit(10000)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

module.exports = recordRoutes;
