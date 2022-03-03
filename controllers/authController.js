import User from '../models/User.js'

const register = async (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const user = await User.create({ name, email, password })
        const token = user.createJWT()

        res.status(201).json({
            user: {
                email: user.email,
                lastName: user.lastName,
                location: user.location,
                name: user.name,
            },
            token,
            location: user.location,
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email }).select('+password')
        const isPasswordCorrect = await user.comparePassword(password)
        if (!isPasswordCorrect) {
            res.status(400).json({
                msg: "UnAuthenticated"

            })
        }
        const token = user.createJWT()
        user.password = undefined
        res.status(200).json({ user, token, location: user.location })
    } catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { email, name, lastName, location } = req.body
        if (!email || !name || !lastName || !location) {
            res.status(400).json({ msg: "Please Provide all the values" })
        }
        const user = await User.findOne({ _id: req.user.userId })

        user.email = email
        user.name = name
        user.lastName = lastName
        user.location = location

        await user.save()

        const token = user.createJWT()

        res.status(200).json({ user, token, location: user.location })
    }
    catch (err) {
        next(err)
    }
}

export { register, login, updateUser }