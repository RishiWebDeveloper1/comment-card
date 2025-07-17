const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        role: { type: String, required: true },
        comment: { type: String, required: true },
        task: { type: String, required: true },
        review: { type: String, required: true },
        star: { type: String, required: true },
        star: { type: String, required: true }
    }
);

const Usermodel = mongoose.model('user', UserSchema);
module.exports = Usermodel;