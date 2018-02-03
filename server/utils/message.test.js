var expect = require('expect');

var {generateMessage} = require('./message.js');

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