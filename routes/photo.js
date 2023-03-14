import { Router } from "express";
import { create, getAll } from "../controllers/photo.js";

const photoRoutes = Router()


photoRoutes.get('/', getAll)
photoRoutes.post('/', create)


export default photoRoutes;