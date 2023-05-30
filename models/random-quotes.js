

const { Schema, model } = require("mongoose");

const mongoose = require("../db/connection");

const randomQuoteSchema = new Schema(
{
anime: {
    type: Schema.Types.ObjectId,
     ref: "Anime"
    },
character: String,
quote: String,
},

);

const RandomQuote = model("Random Quote", randomQuoteSchema);

export default RandomQuote