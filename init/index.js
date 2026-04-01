const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

require("dotenv").config({ path: "../.env" });
const MONGO_URL = process.env.ATLASDB_URL;
main().then(()=>{
    console.log("connected to db")
}).catch(err=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB =async () =>{


    

    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>
        ({...obj,owner:"69cbfba28cd6fd965236290c",

        }));
    await Listing.insertMany(initData.data);
    console.log("data was initailized ");
};
initDB();


