const mongoose = require('mongoose');
const app = require('./server/server');
const port = process.env.PORT || 3001;
require('dotenv').config();

mongoose.connect(process.env.DEFAULT_CONNECTION, { useNewUrlParser: true })
	.then(() => {
		app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
	});
