const User = require('../models/user');

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        const data = {
            name,
            email,
            password
        }

        try {
            const user = await User.create(data);

            return res.status(201).json({user, msg: "User created successfully"});

        } catch (error) {
            return res.status(500).send({error: "Registration failed"})
        }
    }
}