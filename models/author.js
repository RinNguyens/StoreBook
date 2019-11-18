const mongoose =  require('mongoose');
const authorSchema = mongoose.Schema({
    title : {
        type : String,
        required : false
    },
    nickname : {
        type : String,
        required: false
    },
    create_at : {
        type : Date,
        default :  Date.now
    }
})

const Author = module.exports = mongoose.model('Author', authorSchema);