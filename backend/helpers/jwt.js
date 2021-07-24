const expressJWT = require('express-jwt');

const authJWT = () => {
    const secret = process.env.secret;
    return expressJWT({
        secret,
        algorithms: ['HS256']
    }).unless({
        paths: [
            {url: '/api/v1/posts', methods: ['GET', 'OPTIONS']}
        ]
    })
}

module.exports = authJWT;