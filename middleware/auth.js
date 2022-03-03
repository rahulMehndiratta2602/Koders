import jwt from 'jsonwebtoken'
const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(401).json({ msg: "UnAuthenticated" })
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId }
        // console.log(payload)

        next()
    } catch (error) {
        res.status(401).json({ msg: "UnAuthenticated" })
    }
}

export default auth