

// global variables 
var video = null;
var canvas = null;



		video = document.getElementById('video');
		canvas = document.getElementById('canvas');


		var emulateDevice =  navigator.mediaDevices.enumerateDevices().then(function(device) {
			
			// camera
			var cam = device.find(function(device){
				return device.kind === "video";
			});

			var constraints = {video:cam && mediaConstraints.video};
			console.log("getUserId" + JSON.stringify(constraints));
			return navigator.mediaDevices.getUserMedia(constraints)
				.then(function(stream) {
					getUserMedia(stream);
				}).catch(function(err) {
					console.log(err);
				});

		});