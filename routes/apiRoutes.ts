import express from "express";
import { GET_MSG } from "../api/GET_MSG";

export const apiRouter = express.Router();

apiRouter.get("/", GET_MSG);
