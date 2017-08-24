function append_city_list(city) {
	$("#store_list").html('');
	var _str = '';
	for(var i in locations){
		if(city == locations[i]['city'])
		{
			_str += '<li>';
			_str += '<h4>'+ locations[i]['name'] + '</h4>';
			_str += '<p class="address">' + locations[i]['address'] + '</p>';
			_str += '<a href="http://maps.google.com/?q=' + locations[i]['address'] + '" class="listitem" target="_blank" onclick="showMapEvent(\'' + locations[i]['address'] +'\')" class="btn_map"><img src="images/btn_map.png" alt="看地圖"></a>';
			_str += '<a href="tel:' + locations[i]['phone'] + '" class="btn_phone"><img src="images/btn_phone.png" alt="通話"></a>';
			_str += '</li>'
		}
	}
	$("#store_list").append(_str);	
}

function cal_distance(lat, lon){

	for(var i in locations)
	{
		var _dis = Math.pow((lat - locations[i]['poi']['Latitude']), 2) + Math.pow((lon - locations[i]['poi']['Longitude']), 2);
		locations[i]['dis'] = _dis;
	}

	//console.log(locations);
}

function sort_distance(){

	var sortable = [];
	for (var i in locations)
    	sortable.push([i, locations[i]['dis']])
	
	sortable.sort(
    	function(a, b) {
        	return a[1] - b[1]
    	}
	);

	return sortable;
}

function append_sorted_stores(){

}


$(function() {

	//initialize
	append_city_list('台北市');
	
	$("#region").change(function() {
  		var _reg = $("#region").val();	
		$("#city_list").empty();

		var _list = region_mapping_table[_reg];

		for(var i in _list){
			//console.log(_list[i]);
			var op = document.createElement("option");
			op.text = _list[i];
			op.value = _list[i];
			$("#city_list").append(op);
		}

	});

	$("#city_list").change(function(){
		var _city = $("#city_list").val();
		append_city_list(_city)
	});

	//geolocation
	if ("geolocation" in navigator) {
  		//console.log("geolocation IS available"); 
  		_str = '<div class="tip"><p>無法取得你目前的位置，<br>請透過下方進行區域、縣市進行尋找喔！</p></div>';
		$("#sorted_store_list").html('');
		$("#sorted_store_list").append(_str);

  		navigator.geolocation.getCurrentPosition(function(position) {
  			//console.log(position.coords.latitude);
  			//console.log(position.coords.longitude);
  			//alert("(" + position.coords.latitude + ", " + position.coords.longitude + ")");

  			cal_distance(position.coords.latitude, position.coords.longitude);
  			sortable = sort_distance();

  			//string append to sorted_stores_list
  			var _str = '';
  			for(var i=0;i<5;i++)
  			{
  				var idx = sortable[i][0];
  				
  				_str += '<li>';
				_str += '<h4>'+ locations[idx]['name'] + '</h4>';
				_str += '<p class="address">' + locations[idx]['address'] + '</p>';
				_str += '<a href="http://maps.google.com/?q=' + locations[idx]['address'] + '" class="listitem" target="_blank" onclick="showMapEvent(\'' + locations[idx]['address'] +'\')" class="btn_map"><img src="images/btn_map.png" alt="看地圖"></a>';
				_str += '<a href="tel:' + locations[idx]['phone'] + '" class="btn_phone"><img src="images/btn_phone.png" alt="通話"></a>';
				_str += '</li>'
  			}
  			$("#sorted_store_list").html('');
  			$("#sorted_store_list").append(_str);	
  		});
	} else {

		_str = '<div class="tip"><p>附近沒有符合的門市，<br>請透過下方進行區域、縣市進行尋找喔！</p></div>';
		$("#sorted_store_list").html('');
		$("#sorted_store_list").append(_str);
  		//console.log("geolocation IS NOT available");
  		 
	}
});