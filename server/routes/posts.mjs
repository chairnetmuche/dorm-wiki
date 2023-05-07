import express from "express";
import db from "../db/conn.mjs";
import objectId from "mongodb";
const ObjectId = objectId;
// import { ObjectId } from "mongodb";

const router = express.Router(); // Not working for some reason, implementation in server.js at the moment

// TODO: update the following with our http requests
// Set up: https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
// https://github.com/mongodb-developer/mongodb-express-rest-api-example/tree/main/server

// Working with Mongodb using node.js: https://www.w3schools.com/nodejs/nodejs_mongodb.asp

// Get dorm list for wiki page
// https://www.digitalocean.com/community/tutorials/nodejs-express-routing
router.get("wiki", async (req, res) => {
  // let collection = await db.collection("Dorm");
  // let results = await collection.find({}, {_id: 1}).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  // });
  // res.json(results).status(200);
  console.log("reached get wiki function");
  res.send("hi").status(200);
  // res.status(200).json("hello");
});


// // Get a list of 50 posts
// router.get("/", async (req, res) => {
//   let collection = await db.collection("posts");
//   let results = await collection.find({})
//     .limit(50)
//     .toArray();

//   res.send(results).status(200);
// });


// // Fetches the latest posts
// router.get("/latest", async (req, res) => {
//   let collection = await db.collection("posts");
//   let results = await collection.aggregate([
//     {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//     {"$sort": {"date": -1}},
//     {"$limit": 3}
//   ]).toArray();
//   res.send(results).status(200);
// });

// // Get a single post
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("posts");
//   let query = {_id: ObjectId(req.params.id)};
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Add a new document to the collection
// router.post("/", async (req, res) => {
//   let collection = await db.collection("posts");
//   let newDocument = req.body;
//   newDocument.date = new Date();
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });

// // Update the post with a new comment
// router.patch("/comment/:id", async (req, res) => {
//   const query = { _id: ObjectId(req.params.id) };
//   const updates = {
//     $push: { comments: req.body }
//   };

//   let collection = await db.collection("posts");
//   let result = await collection.updateOne(query, updates);

//   res.send(result).status(200);
// });

// // Delete an entry
// router.delete("/:id", async (req, res) => {
//   const query = { _id: ObjectId(req.params.id) };

//   const collection = db.collection("posts");
//   let result = await collection.deleteOne(query);

//   res.send(result).status(200);
// });

export default router;