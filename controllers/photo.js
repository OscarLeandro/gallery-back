import { Photo } from "../models/photo.js";


export async function getAll(req, res){
    try {
        const getPhoto = await Photo.find();
        res.status(200).json(getPhoto);
        
    } catch (error) {
        res.status(404).json({
            code: error.code,
            message:error.message
        })
        
    }

}

export async function create(req,res){
    console.log(req.body);
    try {
        const createPhoto = await Photo(req.body).save()
        res.status(201).json(createPhoto);
    } catch (error) {
        res.status(404).json({
            code: error.code,
            message:error.message
        })
    }
}