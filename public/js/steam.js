	var PROXY = "https://jsonp.nodejitsu.com/?url=";
	var URL = "http://api.steampowered.com/ISteamApps/GetAppList/v0001/";

	$.getJSON(PROXY + URL, function (data) {

		console.log(data);
		$.each(data.applist.apps.app, function (index, item) {
			console.log(item.name);
		});
	});
	
	function generateTable()
	{
		//
	}