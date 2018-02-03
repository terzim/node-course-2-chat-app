/*jshint esversion: 6 */

var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(typeof(message.createdAt)).toEqual('number');
		expect(message.from).toBeTruthy();
		expect(message.text).toBeTruthy();	
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Deb';
		var latitude = 15;
		var longitude = 19;
		var url = 'https://www.google.com/maps?q=15,19';
		var message = generateLocationMessage(from, latitude, longitude);

		expect(typeof(message.createdAt)).toEqual('number');
		expect(message.url).toEqual(url);

	});
});