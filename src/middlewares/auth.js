const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Use uma chave secreta real aqui

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ message: "Nenhum token fornecido." });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Não autorizado." });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;
