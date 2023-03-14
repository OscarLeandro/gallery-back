import mongoose from "mongoose";
import { Photo } from "../models/photo.js";
import { User } from "../models/user.js";

export async function getAll(req, res) {
  try {
    const getUser = await User.find().populate("photos");
    res.status(200).json(getUser);
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}


export async function create(req, res) {
  console.log(req.body);
  try {
    const createUser = await User(req.body).save();
    res.status(201).json(createUser);
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}

export async function updateUser(req, res) {
  console.log(req.params.id);
  console.log(req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}

export async function displayNameExist(req, res) {
  try {
    const exist = await User.findOne({ displayName: req.params.displayName });
    if (exist) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}
export async function findUser(req, res) {
  try {
    const exist = await User.findOne({
      displayName: req.params.displayName,
    }).populate("photos");
    if (exist) {
      res.status(200).json(exist);
    } else {
      res.status(200).json(false);
    }
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}

export async function addPhotoToUser(req, res) {
  try {
    const photoData = req.body;
    const userId = req.params.id;

    const userUpdated = await userPhotoTransaction(photoData, userId)
    res.status(200).json(userUpdated)
    
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}
export async function userPhotoTransaction(photoData, userId) {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const photo = await Photo.create([photoData], { session });
    
    const user = await User.findByIdAndUpdate(
       userId ,
       { $push: { photos: photo[0]._id } },
       { new: true, session }
    );

    await session.commitTransaction();
    session.endSession();
    return user;
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}

export async function deletePhotoToUser(req, res) {
  try {
    const photoData = req.body;
    const userId = req.params.id;

    const userUpdated = await userPhotoTransaction(photoData, userId)
    res.status(200).json(userUpdated)
    
  } catch (error) {
    res.status(404).json({
      code: error.code,
      message: error.message,
    });
  }
}

// try {
//     const updateUser = await User.findByIdAndUpdate(
//         {_id: req.params.id},
//         req.body,
//         {new: true}
//     )
//     res.status(201).json(updateUser);
// } catch (error) {
//     res.status(404).json({
//         code: error.code,
//         message:error.message
//     })
// }
