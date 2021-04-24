const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
require("../db/conn");
const hbs = require("hbs");
const Subscribe = require("../models/subscribe");
const UserInformation = require("../models/info");


// Path Of The Folders
const publicPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const Partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(publicPath));

app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(Partials_path);



// Need For Post Requests To Convert The Form to Json Format
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",async(req,res)=>{
    try {
        
        const DataPosted = new Subscribe({
            name : req.body.name,
            email : req.body.email
        });

        const DataSaver = await DataPosted.save();
        console.log(DataSaver);
        res.status(201).render("index");

    } catch (error) {
        res.status(402).render(error);
    }
})



app.get("/products",(req,res)=>{
    res.render("Allproducts");
})

app.get("/product1",(req,res)=>{
    res.render("product1");
})

app.get("/product1info",(req,res)=>{
    res.render("product1info");
})

app.get("/productpay1",(req,res)=>{
    res.render("productpay1");
})

app.post("/product1info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay1");
        
    } catch (error) {
        res.render(error);
    }
})


//product2


app.get("/product2",(req,res)=>{
    res.render("product2");
})

app.get("/product2info",(req,res)=>{
    res.render("product2info");
})

app.get("/productpay2",(req,res)=>{
    res.render("productpay2");
})

app.post("/product2info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay2");
        
    } catch (error) {
        res.render(error);
    }
})


//product3

app.get("/product3",(req,res)=>{
    res.render("product3");
})

app.get("/product3info",(req,res)=>{
    res.render("product3info");
})

app.get("/productpay3",(req,res)=>{
    res.render("productpay3");
})

app.post("/product3info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay3");
        
    } catch (error) {
        res.render(error);
    }
})

//product5


app.get("/product5",(req,res)=>{
    res.render("product5");
})

app.get("/product5info",(req,res)=>{
    res.render("product5info");
})

app.get("/productpay5",(req,res)=>{
    res.render("product5pay5");
})

app.post("/product5info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("product5pay5");
        
    } catch (error) {
        res.render(error);
    }
})

//product6

app.get("/product6",(req,res)=>{
    res.render("product6");
})

app.get("/product6info",(req,res)=>{
    res.render("product6info");
})

app.get("/product6pay6",(req,res)=>{
    res.render("product6pay6");
})

app.post("/product6info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("product6pay6");
        
    } catch (error) {
        res.render(error);
    }
})

//product7


app.get("/product7",(req,res)=>{
    res.render("product7");
})

app.get("/product7info",(req,res)=>{
    res.render("product7info");
})

app.get("/productpay7",(req,res)=>{
    res.render("productpay7");
})

app.post("/product7info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay7");
        
    } catch (error) {
        res.render(error);
    }
})

//product8

app.get("/product8",(req,res)=>{
    res.render("product8");
})

app.get("/product8info",(req,res)=>{
    res.render("product8info");
})

app.get("/productpay8",(req,res)=>{
    res.render("productpay8");
})

app.post("/product8info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay8");
        
    } catch (error) {
        res.render(error);
    }


})

//product9


app.get("/product9",(req,res)=>{
    res.render("product9");
})

app.get("/product9info",(req,res)=>{
    res.render("product9info");
})

app.get("/productpay9",(req,res)=>{
    res.render("productpay9");
})

app.post("/product9info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay9");
        
    } catch (error) {
        res.render(error);
    }
})

//product10


app.get("/product10",(req,res)=>{
    res.render("product10");
})

app.get("/product10info",(req,res)=>{
    res.render("product10info");
})

app.get("/productpay10",(req,res)=>{
    res.render("productpay10");
})

app.post("/product10info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay10");
        
    } catch (error) {
        res.render(error);
    }
})

//product11


app.get("/product11",(req,res)=>{
    res.render("product11");
})

app.get("/product11info",(req,res)=>{
    res.render("product11info");
})

app.get("/productpay11",(req,res)=>{
    res.render("productpay11");
})

app.post("/product11info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay11");
        
    } catch (error) {
        res.render(error);
    }
})

//product12

app.get("/product12",(req,res)=>{
    res.render("product12");
})

app.get("/product12info",(req,res)=>{
    res.render("product12info");
})

app.get("/productpay12",(req,res)=>{
    res.render("productpay12");
})

app.post("/product12info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay12");
        
    } catch (error) {
        res.render(error);
    }
})

//product13
app.get("/product13",(req,res)=>{
    res.render("product13");
})

app.get("/product13info",(req,res)=>{
    res.render("product13info");
})

app.get("/productpay13",(req,res)=>{
    res.render("productpay13");
})

app.post("/product13info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay13");
        
    } catch (error) {
        res.render(error);
    }
})

//14


app.get("/product14",(req,res)=>{
    res.render("product14");
})

app.get("/product14info",(req,res)=>{
    res.render("product14info");
})

app.get("/productpay14",(req,res)=>{
    res.render("productpay14");
})

app.post("/product14info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay14");
        
    } catch (error) {
        res.render(error);
    }
})

//15

app.get("/product15",(req,res)=>{
    res.render("product15");
})

app.get("/product15info",(req,res)=>{
    res.render("product15info");
})

app.get("/productpay15",(req,res)=>{
    res.render("productpay15");
})

app.post("/product15info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay15");
        
    } catch (error) {
        res.render(error);
    }
})

//16


app.get("/product16",(req,res)=>{
    res.render("product16");
})

app.get("/product16info",(req,res)=>{
    res.render("product16info");
})

app.get("/productpay16",(req,res)=>{
    res.render("productpay16");
})

app.post("/product16info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay16");
        
    } catch (error) {
        res.render(error);
    }
})

//17

app.get("/product17",(req,res)=>{
    res.render("product17");
})

app.get("/product17info",(req,res)=>{
    res.render("product17info");
})

app.get("/productpay17",(req,res)=>{
    res.render("productpay17");
})

app.post("/product17info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay17");
        
    } catch (error) {
        res.render(error);
    }
})

//18

app.get("/product18",(req,res)=>{
    res.render("product18");
})

app.get("/product18info",(req,res)=>{
    res.render("product18info");
})

app.get("/productpay18",(req,res)=>{
    res.render("productpay18");
})

app.post("/product18info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })
        

        const dataSaver = await UserData.save();
        res.status(201).render("productpay18");
        
    } catch (error) {
        res.render(error);
    }
})

//19

app.get("/product19",(req,res)=>{
    res.render("product19");
})

app.get("/product19info",(req,res)=>{
    res.render("product19info");
})

app.get("/productpay19",(req,res)=>{
    res.render("productpay19");
})

app.post("/product19info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay19");
        
    } catch (error) {
        res.render(error);
    }
})

//20


app.get("/product20",(req,res)=>{
    res.render("product20");
})

app.get("/product20info",(req,res)=>{
    res.render("product20info");
})

app.get("/productpay20",(req,res)=>{
    res.render("productpay20");
})

app.post("/product20info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay20");
        
    } catch (error) {
        res.render(error);
    }
})

//21


app.get("/product21",(req,res)=>{
    res.render("product21");
})

app.get("/product21info",(req,res)=>{
    res.render("product21info");
})

app.get("/productpay21",(req,res)=>{
    res.render("productpay21");
})

app.post("/product21info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay21");
        
    } catch (error) {
        res.render(error);
    }
})

//22


app.get("/product22",(req,res)=>{
    res.render("product22");
})

app.get("/product22info",(req,res)=>{
    res.render("product22info");
})

app.get("/productpay22",(req,res)=>{
    res.render("productpay22");
})

app.post("/product22info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay22");
        
    } catch (error) {
        res.render(error);
    }
})

//23

app.get("/product23",(req,res)=>{
    res.render("product23");
})

app.get("/product23info",(req,res)=>{
    res.render("product23info");
})

app.get("/productpay23",(req,res)=>{
    res.render("productpay23");
})

app.post("/product23info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay23");
        
    } catch (error) {
        res.render(error);
    }
})

//24

app.get("/product24",(req,res)=>{
    res.render("product24");
})

app.get("/product24info",(req,res)=>{
    res.render("product24info");
})

app.get("/productpay24",(req,res)=>{
    res.render("productpay24");
})

app.post("/product24info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay24");
        
    } catch (error) {
        res.render(error);
    }
})

//25

app.get("/product25",(req,res)=>{
    res.render("product25");
})

app.get("/product25info",(req,res)=>{
    res.render("product25info");
})

app.get("/productpay25",(req,res)=>{
    res.render("productpay25");
})

app.post("/product25info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay25");
        
    } catch (error) {
        res.render(error);
    }
})

//26


app.get("/product26",(req,res)=>{
    res.render("product26");
})

app.get("/product26info",(req,res)=>{
    res.render("product26info");
})

app.get("/productpay26",(req,res)=>{
    res.render("productpay26");
})

app.post("/product26info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay26");
        
    } catch (error) {
        res.render(error);
    }
})

//27


app.get("/product27",(req,res)=>{
    res.render("product27");
})

app.get("/product27info",(req,res)=>{
    res.render("product27info");
})

app.get("/productpay27",(req,res)=>{
    res.render("productpay27");
})

app.post("/product27info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay27");
        
    } catch (error) {
        res.render(error);
    }
})

//28


app.get("/product28",(req,res)=>{
    res.render("product28");
})

app.get("/product28info",(req,res)=>{
    res.render("product28info");
})

app.get("/productpay28",(req,res)=>{
    res.render("productpay28");
})

app.post("/product28info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay28");
        
    } catch (error) {
        res.render(error);
    }
})

//29


app.get("/product29",(req,res)=>{
    res.render("product29");
})

app.get("/product29info",(req,res)=>{
    res.render("product29info");
})

app.get("/productpay29",(req,res)=>{
    res.render("productpay29");
})

app.post("/product29info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay29");
        
    } catch (error) {
        res.render(error);
    }
})

//30


app.get("/product30",(req,res)=>{
    res.render("product30");
})

app.get("/product30info",(req,res)=>{
    res.render("product30info");
})

app.get("/productpay30",(req,res)=>{
    res.render("productpay30");
})

app.post("/product30info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay30");
        
    } catch (error) {
        res.render(error);
    }
})


app.get("/product31",(req,res)=>{
    res.render("product31");
})

app.get("/product31info",(req,res)=>{
    res.render("product31info");
})

app.get("/productpay31",(req,res)=>{
    res.render("productpay31");
})

app.post("/product31info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay31");
        
    } catch (error) {
        res.render(error);
    }
})


app.get("/product32",(req,res)=>{
    res.render("product32");
})

app.get("/product32info",(req,res)=>{
    res.render("product32info");
})

app.get("/productpay32",(req,res)=>{
    res.render("productpay32");
})

app.post("/product32info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay32");
        
    } catch (error) {
        res.render(error);
    }
})


app.get("/product33",(req,res)=>{
    res.render("product33");
})

app.get("/product33info",(req,res)=>{
    res.render("product33info");
})

app.get("/productpay33",(req,res)=>{
    res.render("productpay33");
})

app.post("/product33info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            state : req.body.state,
            pincode : req.body.pincode,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("productpay33");
        
    } catch (error) {
        res.render(error);
    }
})


app.listen(port,()=>{
    console.log(`Your Port Is Running At http://localhost:8000/`)
})
