const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb+srv://Sreeshanth:sree123@cluster1.bhuhp7a.mongodb.net/?appName=Cluster1";
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


