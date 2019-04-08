function init() {
	
document.addEventListener("deviceready",onDeviceReady, false);
}


function onDeviceReady() {
	navigator.notification.beep(1);
}
function showInfo() {
	info = 'Hello, this is my businesscard' + '\n' +
			'=====' + '\n' +
			'Name and surname: Kamil Michalik' + '\n' +
			'Email : kamil.michalik.94@gmail.com' + '\n' +
			'Den group number: 187439 ' + '\n' +
			'Field of study: Applied Computer Science' + '\n';
			navigator.notification.alert(info);

}
