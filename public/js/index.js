var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	// socket.emit('createEmail', {
	// 	to: 'jen@example.com',
	// 	text: 'Hey, this is Massi'
	// });

	// socket.emit('createMessage', {
	// 	from: 'Andrew',
	// 	text: 'Yep, that works for me'
	// });
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});

// //Custom Event
// socket.on('newEmail', function(email) {
// 	console.log('New Email', email);
// });

//Custom Event
socket.on('newMessage', function(message) {
	console.log('New Message', message);
});