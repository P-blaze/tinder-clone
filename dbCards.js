import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardSchema);
// above we are exporting the collection name cards for our tinderDB
