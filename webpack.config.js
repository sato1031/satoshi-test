const path = require('path')

module.exports = {
	mode:process.env.NODE_ENV || 'development',
	entry: {
		main:'src/main.js'
	},
	optimization:{
		splitChunks:{
			name:'vendor',
			chunks:'install'

		}
	}
}

