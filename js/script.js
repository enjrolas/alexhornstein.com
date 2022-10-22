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

    var thumbnails=$("img.thumbnail");
    var atWorkPhotos=$("img.atWork");
    var atPlayPhotos=$("img.atPlay");
    var takingPicturesPhotos=$("img.takingPictures");

    var categories=['atWork', 'atPlay', 'takingPictures'];
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
	    var index=0;
	    var categoryImages=$("."+category);
	    thumbnails.each(function(){
		this.src=categoryImages[index].src;
		index++;
	    });
	});
    });
    
});

