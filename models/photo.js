import { model, Schema } from "mongoose";
const { ObjectId } = Schema;
const photoSchema = new Schema({
    photoName:{
        type:String
    },
    description:{
        type:String,
        require:false
    },
    photoURL:{
        type:String,
        require:false,
        trim:true,
    },
    imageType: {
        type:String,
        require:true,
        trim:true,
    },
    size: {
        type:String,
        require:true,
        trim:true,
    }

    
});
export const Photo = model('Photo', photoSchema);