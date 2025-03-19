	console.log('Start load');

var domain = 'vokino.github.io';

var PROTOCOL = 'https';

function createBridge(){
	console.log('Create bridge');
	
	document.getElementsByTagName("body")[0].innerHTML = '<iframe src="http://'+domain+'" id="frame"></iframe>';
	
	var frm = document.getElementById('frame');

	window.addEventListener("keydown", function (e) {
		frm.focus();
	});

	frm.focus();
}

function createScript(src,error){
	console.log('Load script:' + src);
	
	var script = document.createElement('script');
		script.onerror = error;
		script.src = src;
		script.type='text/javascript';
	
	document.getElementsByTagName("body")[0].appendChild(script);
}

createScript('https://'+domain+'/js/loader.js?v' + Math.random(), function(){
	PROTOCOL = 'http';
	
	console.log('Protocol https fail');
	
	createScript('http://'+domain+'/js/loader.js?v' + Math.random(), function(){
		console.log('Protocol http fail');
		
		createBridge();
	})
})
