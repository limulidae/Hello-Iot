module.exports = {
	development: {
		connection: 'postgres://sophon:sophon@localhost:5432/sophon',
		//force: true
	},

	production: {
		connection: 'postgres://sophon:sophon@localhost:5432/sophon',
		force: false
	},
};
