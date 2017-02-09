document.addEventListener('deviceready', function() {
	var message = document.getElementById("message");
	message.textContent = "Searching for HbbTVs...";

	var dialClient = DIALClient.getDIALClient();
	dialClient.startDiscovery(function (terminals) {
		console.log(terminals);

		var message = document.getElementById("message");
		var deviceList = document.getElementById("device-list");
	
		message.textContent = "Found " + terminals.length + " TVs...";
	
		// Clear device list...
		while(deviceList.firstChild) {
			deviceList.removeChild(deviceList.firstChild);
		}
	
		// Re-populate with discovered devices
		for (var terminal of terminals) {
			var li = document.createElement('li');
			li.textContent = "" + terminal.friendly_name;
			deviceList.appendChild(li);
		}
	});
});
