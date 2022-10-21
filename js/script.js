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
});

