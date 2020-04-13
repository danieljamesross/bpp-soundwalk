function onButt(onButtonNum) {
    var gfind = "g.offButt" + onButtonNum + "css";
    var jp = "#jquery_jplayer_" + onButtonNum;
    var onButtCss = "#onButt" + onButtonNum + ".onbutt.onButt" + onButtonNum + "css";
    var pb = "div.pbar.pbar" + onButtonNum;
    $(gfind).click(function() {
	$('g.onbutt').css('display','none');
	$(onButtCss).css('display','inline');
	fadeInAudio(jp);
	$('div.pbar').fadeOut();
	$(pb).fadeIn();

    })};


function offButt(offButtonNum) {
    var gfind = "g.onButt" + offButtonNum + "css";
    var jp = "#jquery_jplayer_" + offButtonNum;
    var onButtCss = "#onButt" + offButtonNum + ".onbutt.onButt" + offButtonNum + "css";
    $(gfind).click(function() {
	    $('g.onbutt').css('display','none');
	    fadeOutAudio(jp);
	    $('div.pbar').hide();
    })};

for (var i=0;i<10;i++){
    onButt(i);
    offButt(i);
};

$("g.Helpcss").click(function() {
	//$("div.svgmapcss").css("animation", "fade-out 0.1s ease");
	//$("div.svgmapcss").css("-webkit-animation", "fade-out 0.1s ease");
	$("div.help").css("animation", "from-left 0.3s ease-in");
	$("div.help").css("-webkit-animation", "from-left 0.3s ease-in");
	$("div.svgmapcss").delay(300).hide();
	$("div.help").show();
    });

$("g.Creditscss").click(function() {
	//$("div.svgmapcss").css("animation", "fade-out 0.1s ease");
	//$("div.svgmapcss").css("-webkit-animation", "fade-out 0.1s ease");
	$("div.credits").css("animation", "from-right 0.3s ease-in");
	$("div.credits").css("-webkit-animation", "from-right 0.3s ease-in");
	$("div.svgmapcss").delay(300).hide();
	$("div.credits").show();
    });

$("g.Websitecss").click(function() {
	window.open('http://www.bppsoundwalk.org/', '_system');
    });

$(function(){
	$( "div.help" ).on( "swipe", swipeHandlerHelp )
            function swipeHandlerHelp( ){
	    $("div.help").css("animation", "to-left 0.1s ease");
	    $("div.help").css("-webkit-animation", "to-left 0.1s ease");
	    $("div.help").delay(50).hide();
	    setTimeout(function(){
		    
		    $("div.svgmapcss").css("animation", "fade-in 0.1s ease");
		    $("div.svgmapcss").css("-webkit-animation", "fade-in 0.1s ease");
		    $("div.svgmapcss").show();
		},200);
	}});

$(function(){
	$( "div.credits" ).on( "swipe", swipeHandlerCredits )
	    function swipeHandlerCredits(  ){
	    $("div.credits").css("animation", "to-right 0.1s ease");
	    $("div.credits").css("-webkit-animation", "to-right 0.1s ease");
	    $("div.credits").delay(50).hide();
	   setTimeout(function(){
		    
		    $("div.svgmapcss").css("animation", "fade-in 0.1s ease");
		    $("div.svgmapcss").css("-webkit-animation", "fade-in 0.1s ease");
		    $("div.svgmapcss").show();
	       },200);
	}});

function hidediv(){
    $(".in").finish();
}


function showdiv(d){
    var dir = "#dir" + d;
    $(dir).fadeIn("fast");
    $(".in").delay(45000).fadeOut();
};

function showDiv(d){
    var gfind = "g.dirbutt" + d;
   
    $(gfind).click(function() {
		//console.log(gfind);
		showdiv(d);
	})};

for (var i = 0;i<10;i++){
    showDiv(i);
};
