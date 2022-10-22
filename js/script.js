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

    $("#atWork").mouseover(function(){
	var index=0;
	thumbnails.each(function(){
	    this.src=atWorkPhotos[index].src;
	    index++;
	});
    });
    
    $("#atPlay").mouseover(function(){
	var index=0;
	thumbnails.each(function(){
	    this.src=atPlayPhotos[index].src;
	    index++;
	});	
    });

    $("#takingPictures").mouseover(function(){
	var index=0;
	thumbnails.each(function(){
	    this.src=takingPicturesPhotos[index].src;
	    index++;
	});	
    });
});

