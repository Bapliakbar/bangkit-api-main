import express from "express";
import connectDB from "./database/mongodb.js";

const app = express();

// ENDPOINT
import authRouter from "./routes/authRoute.js";
import articleRouter from "./routes/articleRoute.js";

// MIDDLEWARE
import pageNotFound from "./utils/pageNotFound.js";

// CONFIGURE DATABASE
connectDB()
  .then(() => {
    // PORT AND PATH
    const PORT = process.env.PORT || 8080;
    const VERSION_API = "/api/v1";
    const appendUrl = (url) => `${VERSION_API}${url}`;

    // MIDDLEWARE
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // ROUTER
    app.use(appendUrl("/auth"), authRouter);
    app.use(appendUrl("/article"), articleRouter);

    // ENDPOINT NOT CREATED
    app.use("/", pageNotFound);

    return PORT;
  })
  .then((port) => {
    app.listen(port, function () {
      console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
      );
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
