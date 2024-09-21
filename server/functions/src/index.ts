/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import {
  addEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
} from "./entryController.ts";


const app = express();

// app.use(cors({
//   origin: "*",
// }));

const corsOptions = {
  // added localhost:3000 for development
  origin: ["https://michaelyang.dev", "http://localhost:3000"],
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

//app.get("/", (req, res) => res.status(200).send("Silence is Golden"));
//app.post("/entries", addEntry);
//app.get("/entries", getAllEntries);
//app.patch("/entries/:entryId", updateEntry);
//app.delete("/entries/:entryId", deleteEntry);

exports.app = functions.https.onRequest(app);
