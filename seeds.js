var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
            {
                name: "Cloud's Res", 
                image: "https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                
            },
            {
                name: "Desert Mesa", 
                image: "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2012/05/29/BostonGlobe.com/Travel/Images/D_B_Pawtuckaway-campsite.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                
            },
            {
                name: "Canyon Floor", 
                image: "https://c1.staticflickr.com/3/2535/3966014573_1a459a7e5f_b.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                
            }
    ];

function seedDB(){
    //Remove All Campgrounds
    Campground.remove({}, function(err){

        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds");
        // data.forEach(function(seed){
        // Campground.create(seed, function(err,campground){
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log("Added a campground");
        //         //create a comment
        //         Comment.create(
        //             {
        //                 text: "This place is great, but i wish there was interet",
        //                 author: "Homer"
        //             }, function(err,comment){
        //                 if(err){
        //                     console.log(err);
        //                 }else{
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Created new comment");
        //                 }
                        
        //         });
        //     }
        // });
        // });
    });


    

}



module.exports = seedDB;