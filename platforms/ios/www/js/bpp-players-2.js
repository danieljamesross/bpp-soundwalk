$( document ).ready(function() {
	$(".ui-loader").hide();
	
   function makeJPlayer(num) {
    var jp = "#jquery_jplayer_" + num;
    var cp = "#jp_container_" + num;
    var titles = ["Introduction","Park Life","Wildlife & Nature","Golf","Mysterious Hand Carving","Estonia Day","Loss","Childhood","War","Lost Dog"];
    var at = titles[num];
    var af4 = "sounds/" + num + ".m4a";
    var snum = num + 1;
    $(jp).jPlayer({
	    ready: function (event) {
		$(this).jPlayer("setMedia", {
			title: at,
			    m4a: af4,
			    });
	    },
		play: function() { // avoid multiple jPlayers playing together.
		$(this).jPlayer("pauseOthers", 0);
	    },
		ended: function() {
		// Repeat the media
		$('g.onbutt').css('display','none');
		$('div.pbar').css('display','none');
		showdiv(snum);
	    },
		swfPath: "js/jplayer",
		supplied: "m4a",
		wmode: "window",
		preload: "auto",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true,
		cssSelectorAncestor: cp
		});
   };

   for(i=0;i<10;i++) {
       makeJPlayer(i);
   };
   
 console.log( "players loaded!" );
});




function fadeInAudio(thisplayer) {
    var vol = 0;
    var fadeInTime = 100;
    $(thisplayer).jPlayer('stop');
    vol = 0;
    $(thisplayer).jPlayer('volume', vol * 0.01);
    $(thisplayer).jPlayer('play');
    
    while(vol < 101) {
        $(thisplayer).jPlayer('volume', vol * 0.01);
        setTimeout(function(){}, fadeInTime * 0.01);
        vol++;
        if (vol == 100){
	    clearTimeout();
        }
    }
};


function fadeOutAudio(thisplayer) {
    var fadeOutTime = 2000;
    var vol = 100;
    setTimeout(function () {
	    $(thisplayer).jPlayer('volume', vol * 0.01);
	    --vol;
	    if (vol > 0){
		fadeOutAudio(thisplayer);
	    }
	}, fadeOutTime * 0.01);
    setTimeout(function(){$(thisplayer).jPlayer('pause', 0)},
	       fadeOutTime + 10);
    clearTimeout();
};
