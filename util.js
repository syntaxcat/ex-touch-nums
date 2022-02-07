'use stirct';

var miliseconds = 0;
var intervalId;

function stopWatch() {
	intervalId = setInterval(() => {
		miliseconds += 20;
		var date = new Date(miliseconds);
		document.getElementById('seconds').innerHTML = `${date.getSeconds()}`;
		document.getElementById('milliseconds').innerHTML = `${date.getMilliseconds()}`;
	}, 20);
}

function stopTime() {
	clearInterval(intervalId);
	miliseconds = 0;
}

function shuffle(items) {
	var randIdx, keep;
	for (var i = items.length - 1; i > 0; i--) {
		randIdx = getRandomInt(0, items.length - 1);

		keep = items[i];
		items[i] = items[randIdx];
		items[randIdx] = keep;
	}
	return items;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
