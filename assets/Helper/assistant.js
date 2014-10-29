//if (window.innerWidth && window.innerWidth <= 480)
if(true)
{
	var jQT = $.jQTouch({
        icon: 'kilo.png'
    });
	
	$(document).ready(initialView);
}

function initialView()
{
    //var geolocation = new soso.maps.Geolocation();
    //geolocation.position({}, getLocation);
}

function getLocation(results, status) 
{
	if (status == soso.maps.GeolocationStatus.OK) 
	{
		alert(results.latLng.getLat());
		alert(results.latLng.getLng());
  
		var map = new soso.maps.Map(document.getElementById("map_canvas"), {
            center: new soso.maps.LatLng(results.latLng.getLat(),results.latLng.getLng()),
			//center: new soso.maps.LatLng(31.231706008791804,121.47264405829812),
            zoomLevel: 17
		 });
		//map.setKeyBoard(false); 
        //map.setScrollWheel(false);
	}
	else 
	{
		alert("检索没有结果，原因: " + status);
	}
}


function lostWay()
{
	alert('Your location has been sended! \nWe will call back soon...');
}