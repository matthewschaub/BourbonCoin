const { Model } = require("./base.js");

class User extends Model {

	static get tableName() {
		return "users";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ['fname','lname','email'],
			properties: {
				id: {type : "integer"},
				fname: {type : "string"},
				lname: {type : "string"},
				email: {type : "string"},
				password: {type : "string"},
				publickey: {type : "string"},
				phonenumber: {type : "integer"}

			}

		}

	}

}


module.exports = User;