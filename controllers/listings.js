const Listing = require("../models/listing");
 



//index 
module.exports.index = async (req, res) => {
   const allListings = await Listing.find({});
   res.render("index", { allListings });
};

//new
module.exports.renderNewForm = (req,res)=>{
    res.render("new");
};

//show
module.exports.showListing = async (req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews",populate:{path:"author"}})
    .populate("owner");
    if(!listing){
        req.flash("error","Requested Listing doesn't exist!");
       return res.redirect("/listings");
    }
    console.log(listing);
    res.render("show",{listing});
};

//create
module.exports.createListing = async(req,res)=>{
    const newListing=new Listing(req.body.listing);
    
    let url = req.file.path;
    let filename = req.file.filename;
   
     newListing.owner = req.user._id;
      newListing.image = {url,filename};
     await  newListing.save();
    req.flash("success","New Listing is Added!");
   res.redirect("/listings");
};

//edit
module.exports.editListing = async(req,res)=>{
let {id} =req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Requested Listing doesn't exist!");
     res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
     originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250");

    res.render("edit",{listing, originalImageUrl});
};

//update
module.exports.updateListing = async (req,res)=>{
    let {id}= req.params;

    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

     if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
    }

    req.flash("success","Listing is Updated!");
    res.redirect(`/listings/${id}`);

};
//delete
module.exports.deleteListing = async(req,res)=>{
    let {id}= req.params;
    let deleteListing =await Listing.findByIdAndDelete(id);
   req.flash("success","Listing is Deleted!");
    res.redirect("/listings");
};