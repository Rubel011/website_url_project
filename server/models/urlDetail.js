const mongoose = require("mongoose");

const domainNameSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    domainName: { type: String, required: true, unique: true },
    wordCount: { type: Number, required: true },
    favorite: { type: Boolean, default: false },
    webLinks: { type: [String] },
    mediaLinks: { type: [String], }
});

const Domain = new mongoose.model("domainName", domainNameSchema);
module.exports = { Domain };