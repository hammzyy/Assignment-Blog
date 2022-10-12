const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const blogSchema = new Schema({
    content:{type: String,
        required: true

    }
})


const Blog = mongoose.model("blogs", blogSchema)

module.export