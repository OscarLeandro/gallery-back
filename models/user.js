import { model, Schema } from "mongoose";

const { ObjectId } = Schema;
const userSchema = new Schema({
    fullName:{
        type:String
    },
    displayName:{
        type:String,
        trim:true,
        require:true,
        unique: true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
        trim:true,
    },
    photoURL:{
        type:String,
        require:false,
        trim:true,
    },
    photos:[{
        type: ObjectId,
        ref: 'Photo'

    }]
    
});
export const User = model('User', userSchema );