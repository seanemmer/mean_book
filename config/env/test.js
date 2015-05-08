module.exports = {
	db: 'mongodb://localhost/mean-book-test',
	sessionSecret: 'testSessionSecret',
	viewEngine: 'ejs',
	facebook: {
		clientID: '366386690230548',
		clientSecret: '1175f7834c83536a19cc99c357c6d0e7',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'AXnbDTiqrrm2iLA0AHazvAyQT',
		clientSecret: 'OttkWYpQtue7kuN82bYCkFte4t7BU2WlUDM5rHidM9N5YlaBXH',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '535626099544-nqkmqtvkd240uq9k6lu4gdabl04m4bh1.apps.googleusercontent.com',
		clientSecret: 'EQYaTeLYTMdJ-XYQMTNHlE6U',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};