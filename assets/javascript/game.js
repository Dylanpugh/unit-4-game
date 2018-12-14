$(document).ready(function(){

    var win = 0;
    var lost = 0;
    var curVal = 0;
    var randResult; 

    //wrapped for loop in function to allow for easy start and reset
    var startAndReset = function(){

        $(".crystals").empty();
        //empties crystal value 

        //i couldn't find free images for download, so i used the links to add my images
        var images = ['http://bereiki.com/wp-content/uploads/2016/02/crystal-amethyst.jpg',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPIKMcUhtiHrD-KmZMMC4FGq_VgdD6_UGZm00TBJFBWAImXQu',
          'https://images-na.ssl-images-amazon.com/images/I/819sOd2ebeL._SY355_.jpg',
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkKxygSsbfWm8d7auadWoTy2WwsSZBNJWfWkNzZFx4AG8yQwhKQ'];

        randResult = Math.floor(Math.random() * 60) + 30;

        $("#result").html("Goal Score: " + randResult);

        for(var i = 0; i < 4; i++){
            

            var randVal = Math.floor(Math.random() * 20) + 1;
            //console.log(randVal);

            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "random-data": randVal
                });
                crystal.css({
                    "background-image":"url('" + (images[i]) +"')"
            
                });
        ;

            $(".crystals").append(crystal);

        }

        $("#counter").html("Current Score: " + curVal);

    }

    startAndReset();

  // Event Delegation, saying to run this when the first function is ran
    $(document).on("click", ".crystal", function() {

        var crystalVal = parseInt($(this).attr("random-data")); 

        curVal += crystalVal

        $("#counter").html("Current Score: " + curVal);

        //console.log(curVal);

        if(curVal > randResult){

            lost++;

            alert("You Lost!");

            $("#lost").html("Losses: " + lost);

            curVal = 0;

            startAndReset();

            

        } 
        else if(curVal === randResult){

            win++;

            alert("You Win!");

            $("#win").html("Win: " + win);

            curVal = 0;

            startAndReset();

            

        }


    });

});

