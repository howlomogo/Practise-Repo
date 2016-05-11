require(['jquery', 'message', 'another-module', 'cheese'], function ($, message, anotherModule, cheese) {
	$('#output').html(message + ' ' + anotherModule + ' ' + cheese);
});