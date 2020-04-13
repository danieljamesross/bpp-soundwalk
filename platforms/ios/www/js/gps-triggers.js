var gpsCircle = function (position){
    var gpsLat = position.coords.latitude;
    var gpsLon = position.coords.longitude;
    var id;
    var jpl = "";
    var d = "";
    var l = "";
    var pf = 999; // make sure this isn't 0 - 9
    var dl = [25, 25, 30, 25, 35, 35, 35, 25, 25, 25];
    for (var i = 0; i < lats.length ; i++){
	var dLat = (gpsLat - lats[i]) * Math.PI / 180;
	// var dLat = (lats[i+1] - lats[i]) * Math.PI / 180;
	var dLon = (gpsLon - lons[i]) * Math.PI / 180;
	// var dLon = (lons[i+1] - lons[i]) * Math.PI / 180;
	var a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lats[i] * Math.PI / 180)
	    * Math.cos(lats[i] * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
	d = Math.round(6371000 * 2 * Math.asin(Math.sqrt(a)));
	jpl = "#jquery_jplayer_" + i;
	//console.log(jpl + " " + i);
	//alert("hello");
	l = dl[i];
	id = $(jpl).data().jPlayer.status.paused;
	console.log(jpl + " " + id + pf);
	if (d < l && pf != i) {
	    //console.log("playing " + jpl);
	    pf = $.inArray(i, pfList);
		pfList.push(i);
	    if ( id == true) {
		navigator.vibrate(300);
		bppPlay(i);
	    }
	} 
    }};


function onError(err) {
    switch(err.code){
    case 0:
	console.warn("There was an error while retrieving your location: " +
                     error.message);
	break;
    case 1:
	console.warn("The user prevented this page from retrieving a location.");
	break;
    case 2:
	console.warn("The browser was unable to determine your location: " +
                     error.message);
	break;
    case 3:
	console.warn("The browser timed out before retrieving the location.");
	break;
    }};

function bppPlay(onButtonNum) {
    var jp = "#jquery_jplayer_" + onButtonNum;
    var onButtCss = "#onButt" + onButtonNum + ".onbutt.onButt" + onButtonNum + "css";
    var pb = "div.pbar.pbar" + onButtonNum;
    $('g.onbutt').css('display','none');
    $(onButtCss).css('display','inline');
    fadeIn(jp);
    $('div.pbar').css('display','none');
    $(pb).slideDown();
};

function bppPause(offButtonNum) {
    var jp = "#jquery_jplayer_" + offButtonNum;
    $('g.onbutt').css('display','none');
    fadeOut(jp);
    $('div.pbar').slideUp();
};
