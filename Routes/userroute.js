import express from 'express'
import { add } from '../Controllers/usercontroller.js';

const userRouter=express.Router()

userRouter.post("/add",add);


export default userRouter