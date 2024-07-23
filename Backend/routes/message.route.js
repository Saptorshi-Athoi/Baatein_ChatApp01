import {getMessage, sendMessage}  from "../controllers/message.controller.js";
// import getMessage  from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js"
import express from "express";

const router = express.Router();

router.get('/:id', protectRoute, getMessage);
router.post('/send/:id',protectRoute , sendMessage);

export default router