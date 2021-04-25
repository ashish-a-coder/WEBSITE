const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Footwear",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true}).then(()=>{
    console.log("We Are Connected guys");
}).catch((err)=>{
    console.log(err);
})

// mongodb+srv://hubspot:welcome2020@cluster0.wq487.mongodb.net/footware