"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const GET_MSG_1 = require("../api/GET_MSG");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.get("/", GET_MSG_1.GET_MSG);
