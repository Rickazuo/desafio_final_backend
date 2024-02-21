const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ message: "Nenhum token fornecido." });
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7);
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Não autorizado." + err.message });
        }
        req.userId = decoded.userId;
        next();
    });
}

module.exports = verifyToken;
