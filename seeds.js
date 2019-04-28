var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds Rest",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at eleifend elit. Integer a vehicula dui. Donec sit amet ipsum tellus. Praesent vehicula molestie orci, ut imperdiet enim aliquet vel. Cras sit amet mattis sapien. Quisque eu aliquam sem. Ut arcu lorem, ullamcorper vel nibh in, aliquam lobortis ipsum. Sed at risus pellentesque, cursus sem et, sollicitudin nibh."
    },
    {
        name: "Desert Cactus",
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at eleifend elit. Integer a vehicula dui. Donec sit amet ipsum tellus. Praesent vehicula molestie orci, ut imperdiet enim aliquet vel. Cras sit amet mattis sapien. Quisque eu aliquam sem. Ut arcu lorem, ullamcorper vel nibh in, aliquam lobortis ipsum. Sed at risus pellentesque, cursus sem et, sollicitudin nibh."
    },
    {
        name: "Pickled Cucumber",
        image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at eleifend elit. Integer a vehicula dui. Donec sit amet ipsum tellus. Praesent vehicula molestie orci, ut imperdiet enim aliquet vel. Cras sit amet mattis sapien. Quisque eu aliquam sem. Ut arcu lorem, ullamcorper vel nibh in, aliquam lobortis ipsum. Sed at risus pellentesque, cursus sem et, sollicitudin nibh."
    },
    
];
    
function seedDB(){
    //Remove All Campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //Add A Few Campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("Added a campground");
                //create a comment
                Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
            }
        });
        });
    });
    //Add A Few Comments
}

module.exports = seedDB;