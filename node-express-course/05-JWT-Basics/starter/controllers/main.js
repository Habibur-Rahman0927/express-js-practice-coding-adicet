
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors/index')
const login = async (req, res) => {
    const { username, password } = req.body;
    // mongoose validation
    // joi
    // check in the controller
    if (!username || !password) {
        throw new BadRequestError("Please provide email and password")
    } else {
        const id = new Date().getDate();
        const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        })
        res.json({ msg: 'userCreated', token });
    }

}

const dashboard = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, you r lucky number is ${luckyNumber}` })
}

module.exports = {
    login,
    dashboard
}