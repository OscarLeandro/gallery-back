import { Router } from "express";
import { addPhotoToUser, create, displayNameExist, findUser, getAll, updateUser } from "../controllers/user.js";

const userRoutes = Router()


userRoutes.get('/', getAll)
userRoutes.post('/', create)
userRoutes.get('/:displayName',displayNameExist)
userRoutes.get('/name/:displayName',findUser)
userRoutes.put('/:id',updateUser)
userRoutes.patch('/photo/:id',addPhotoToUser)


export default userRoutes;