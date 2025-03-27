const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')


function generateToken(params = {}){
    return jwt.sign( params, authConfig.secret, {
        expiresIn: 86500
    });
}

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        const data = {
            name,
            email,
            password
        }

        try {
            if(await User.findOne({ email })){
                return res.status(400).send({ msg: "User already exists!" })
            }

            const user = await User.create(data);
            user.password = undefined;

            return res.status(201).json({
                user, 
                token: generateToken({ id: user.id}),
                msg: "User created successfully"
            });

        } catch (error) {
            return res.status(500).send({error: "Registration failed"})
        }
    },

    async authentication(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if(!user)
            return res.status(400).send({ msg: "User not found!"})

        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({ msg: "Invalid password." })

        user.password = undefined;

        const token = generateToken({ id: user.id });
        return res.send({ user, token })
    }
}