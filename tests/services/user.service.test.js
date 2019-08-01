const userService = require("../../services/user.service.js");

test('insert user', async () => {
	

	const user =  await userService.persist({
			fname: "Paul",
			lname: "Murage",
			email: "paul@gmail.com",
			password: "mypass123",
			phonenumber: 3308089940
		});

	expect(user.fname).toBe("Paul");
	expect(user.lname).toBe("Murage");
	expect(user.email).toBe("paul@gmail.com");
	expect(user.phonenumber).toBe(3308089940);
})

test('Delete User', async() => {

	
})