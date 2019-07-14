const { Model } = require("objection"); 
const Knex = require("knex")


const knex = Knex({
	client: 'pg',
	version: '7.11',
	connection: {
		host: 'localhost',
		user: 'bourbon_app',
		password: 'password',
		database: 'bourbon_db'
	}
});

Model.knex(knex);


module.exports = {
	knex,
	Model
}