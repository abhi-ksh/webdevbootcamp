const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
 
const family = new Schema({
  name: String,
  age: Number,
  gender: String,
}, { collection: "family"});

const Member = mongoose.model("family", family);
// const m = new Member( 
//     {name: "A",
//      age: 1,
//      gender: "M"});

// m.save((err, m) =>{
//     if(err){
//         console.log("Error in db");
//     } else{
//         console.log(m);
//     }
// });


Member.find({}, (err, member) => {
    if(err){
        console.log("Error encountered!");
    } else {
        console.log(member);
    }
});

