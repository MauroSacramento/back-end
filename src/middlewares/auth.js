const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({msg: "No token provided"});

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({ msg: "Token error"});

    const [scheme, token] = parts;
    console.log(parts);

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ msg: "Token malformatted"});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ msg: "Token invalid" });

        req.userId = decoded.id;

        return next();
    });
}
