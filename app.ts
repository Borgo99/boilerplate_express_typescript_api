import express from "express";
import compression from "compression";
import errorMiddleware from "./middlewares/errorMiddleware";

// import cookieParser from 'cookie-parser';
// import rateLimit from 'express-rate-limit';
// import helmet from 'helmet';
// import xss from 'xss-clean';
// import hpp from 'hpp';
// import mongoSanitize from 'express-mongo-sanitize';

const app = express();

// app.use(cookieParser());
// app.use(helmet());
// app.use(express.json({ limit: '10kb' }));
// app.use(mongoSanitize());
// app.use(xss());
// app.use(hpp({whitelist: []}));
// app.use('/api', rateLimit({
//   max: 400,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many request from this IP'
// }));

app.use(compression());
app.use(express.static("public"));

// ROUTES
app.use("/api");

app.use(errorMiddleware);

export default app;
