const userService = require("../../services/user.service.js");

test('insert user', () => {
	//TODO: fix test
	const user =  userService.add({
			fname: "Paul",
			lname: "Murage",
			email: "paul@gmail.com",
			phonenumber: 3308089940
		});

	expect(user.fname).toBe("Paul");
	expect(user.lname).toBe("Murage");
	expect(user.email).toBe("paul@gmail.com");
	expect(user.phonenumber).toBe(3308089940);
})