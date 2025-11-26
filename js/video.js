var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// Grab the video element
	video = document.querySelector("#player1");

	// Turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to", video.autoplay);
	console.log("Loop is set to", video.loop);

	let volumeSpan = document.querySelector("#volume");
	if (volumeSpan) {
		volumeSpan.textContent = "";
	}

	// PLAY
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();

		let slider = document.querySelector("#slider");
		let volumeSpan = document.querySelector("#volume");
		if (slider && volumeSpan) {
			volumeSpan.textContent = slider.value + "%";
		}
	});

	// PAUSE
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	// SLOW DOWN: multiply playbackRate by 0.9
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate = video.playbackRate * 0.9;
		console.log("New speed:", video.playbackRate);
	});

	// SPEED UP: inverse of slower (divide by 0.9)
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate / 0.9;
		console.log("New speed:", video.playbackRate);
	});

	// SKIP AHEAD: jump 10 seconds, wrap to 0 if at or past end
	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Current location before skip:", video.currentTime);
		video.currentTime = video.currentTime + 10;

		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
			console.log("Went past the end, starting over");
		}

		console.log("Current location after skip:", video.currentTime);
	});

	// MUTE / UNMUTE: toggle and change button text
	document.querySelector("#mute").addEventListener("click", function() {
		let muteButton = document.querySelector("#mute");
		video.muted = !video.muted;

		if (video.muted) {
			muteButton.textContent = "Unmute";
			console.log("Muted");
		} else {
			muteButton.textContent = "Mute";
			console.log("Unmuted");
		}
	});

	// VOLUME SLIDER: 0–100 → 0–1, and update text
	let slider = document.querySelector("#slider");
	if (slider) {
		slider.addEventListener("input", function() {
			video.volume = slider.value / 100;
			console.log("Volume:", video.volume);

			let volumeSpan = document.querySelector("#volume");
			if (volumeSpan) {
				volumeSpan.textContent = slider.value + "%";
			}
		});
	}

	// OLD SCHOOL: add oldSchool class
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Old School style applied");
	});

	// ORIGINAL: remove oldSchool class
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Reverted to original style");
	});
});
