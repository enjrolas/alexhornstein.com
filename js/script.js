var debug=true;

$( document ).ready(function() {
    if(debug){  //add bootstrap classes to make borders visible
	$('div').addClass('border');
	$('row').addClass('border');

	//print the breakpoint every five seconds
	var intervalId = window.setInterval(function(){
            console.log(bootstrapDetectBreakpoint())        
	}, 5000);
    }

    var thumbnails=$(".thumbnail");
    var atWorkPhotos=$("img.atWork");
    var atPlayPhotos=$("img.atPlay");
    var takingPicturesPhotos=$("img.takingPictures");

    var categories=['atWork', 'atPlay', 'atHome', 'behindTheLens', 'takingPictures', 'teaching', 'writing', 'tinkering'];
    var photoDictionary={};
    var numPhotos=9;
    categories.forEach(function(category){
	var photoURLs=[];
	for(let i=1;i<=numPhotos;i++)
	{
	    console.log(category);
	    var imageSource="images/"+category+i+".jpg";
	    photoURLs.push(imageSource);
	    //preload image
	    console.log("preloading "+imageSource);
            $('<img />').attr('src',imageSource).appendTo('body').addClass(category).css('display','none');
	}
	photoDictionary[category]=photoURLs;
	
	//add mouseover function to each category
	$("#"+category).mouseover(function(){
	    var categoryImages=$("."+category);
	    thumbnails.each(function(index, element){
		$(element).children().css("display","none").appendTo("#bench");
		$(element).append($(categoryImages[index]).css("display", "initial")).fadeIn(1000);
	    });
	});
    });
    
});

