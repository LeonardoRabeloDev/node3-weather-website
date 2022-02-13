const postmanRequest = require("postman-request");

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=8524aec26270636156488ac37defcf71&query=${latitude},${longitude}&units=m`;

	postmanRequest({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback("Unable to connect to weather service!", undefined);
		} else if (body.error) {
			callback("Unable to find location.", undefined);
		} else {
			callback(
				undefined,
				`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. ${body.current.feelslike} feels like degress, and ${body.current.humidity}% humidity.`,
			);
		}
	});
};

module.exports = forecast;
