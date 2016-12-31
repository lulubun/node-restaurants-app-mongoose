exports.DATABASE_URL =  'mongodb://lbatson:thinkful@ds035177.mlab.com:35177/unit2lesson2assignment2' ||
						process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        'mongodb://localhost/restaurants-app';
exports.PORT = process.env.PORT || 8080;