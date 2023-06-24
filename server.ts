import app from "./app";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

//START SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, async () => {
  // await connectToMongo();
  console.log(`Server is running on port ${port}.`);
});

//HANDLE ALL UNHANDLE REJECTON
process.on("unhandledRejection", (err: Error) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err: Error) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
