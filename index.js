const mongoose = require('mongoose');
const app = require('./server/server');
const port = process.env.PORT || 3000;

mongoose
	.connect("mongodb+srv://***:***@cluster0.m6mqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		app.listen(port, () => {
			console.log(`Server listening on port ${port}...`);
		});
	});
