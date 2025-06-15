// import express from "express";
// import "dotenv/config";
// import coer from "cors";
// import connectDB from "./config/db.js";
// import { clerkMiddleware } from "@clerk/express";
// import clerckWebhooks from "./controllers/clerkWebhooks";

// connectDB();

// const app = express();
// app.use(coer());

// // Middleware
// app.use(express.json());
// app.use(clerkMiddleware());

// // API to listen to clerk webhooks
// app.use("/api/clerk", clerckWebhooks);

// app.get("/", (req, res) => res.send("API is working"));

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));






import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerckWebhooks from "./controllers/clerkWebhooks.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to clerk webhooks
app.use("/api/clerk", clerckWebhooks);

app.get("/", (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
