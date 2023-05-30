import mongoose from 'mongoose'

const animeSchema = new mongoose.Schema({
    title : String,
    //To do/ What other fields are useful here 
});

const Anime = mongoose.model("Anime", animeSchema)

export default Anime;