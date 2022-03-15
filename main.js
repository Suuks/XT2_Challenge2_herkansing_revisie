
function achtergrondKleur() {
		var d = new Date();
		var t = d.getHours();
		
		if (t < 15) {
		document.body.style.backgroundColor= "#56e5ff";
		} else if (t < 20) {
		document.body.style.backgroundColor="#f873b1";
		} else {
		document.body.style.backgroundColor= "#30226f";
		}
	}
	
	//bron: https://stackoverflow.com/questions/4358155/changing-background-based-on-time-of-day-using-javascript

	
	
function initClock() {
	renderClock();
	setInterval(renderClock, 1000);	
}

function renderClock() {
	var clock = document.getElementById('time');
	var date  = document.getElementById('date');
	var time  = getCurrentTime(new Date());
	var year = getCurrentYear(new Date());
	var sep   = flashSeperator(time['seconds']);

	date.innerHTML = time['day'] + ' ' +  getCurrentMonth(time['month']) + ' ' + time['year'] ;
	clock.innerHTML = time['hours'] + sep +  time['minutes'] + sep + time['seconds'];


}

function flashSeperator(seconds) {

	const sepClass = (seconds %2 == 0) ? "" : 'class="trans"';
		return '<span' + sepClass + '">:</span>';
	}

function getCurrentTime(date) {
	var time = [];

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();
	time['month']   = date.getMonth();
	time['day']     = date.getDay();
	time['year']	= date.getFullYear();

	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}


	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	if (time['seconds'] < 10) {
		time['seconds'] = '0' + time['seconds'];
	}

	return time;
}


function getCurrentMonth(monthNumber) {
	var months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
	return months[monthNumber];
}

function getCurrentYear() {

	let date =  new Date().getFullYear();
	console.log(date);
}

initClock();





	
