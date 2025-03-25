const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.SECRET;

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({msg: "No token provided"});

    const parts = authHeader.split(" ");

    if(!parts.length === 2)
        return res.status(401).send({ msg: "Token error"});

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ msg: "Token malformatted"});

    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).send({ msg: "Token invalid" });

        req.userId = decoded.id;

        return next();
    });
}
