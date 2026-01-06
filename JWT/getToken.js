import JWT from 'jsonwebtoken'
import 'dotenv/config'

export function getToken(id, username) {
    const token = JWT.sign({
        id: id,
        username: username,
    },
        process.env.JWT_SECRET,
        { expiresIn:"1h" }
    )
    return token
}
