"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
const apiRoutes_1 = require("./routes/apiRoutes");
// import cookieParser from 'cookie-parser';
// import rateLimit from 'express-rate-limit';
// import helmet from 'helmet';
// import xss from 'xss-clean';
// import hpp from 'hpp';
// import mongoSanitize from 'express-mongo-sanitize';
const app = (0, express_1.default)();
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
app.use((0, compression_1.default)());
app.use(express_1.default.static("public"));
// ROUTES
app.use("/api", apiRoutes_1.apiRouter);
app.use(errorMiddleware_1.default);
exports.default = app;
