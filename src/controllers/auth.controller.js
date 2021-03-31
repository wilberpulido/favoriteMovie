const router = require('express').Router()
const User = require('../models/schemesModels/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const schemaRegister = require('../config/schemesValidate/SchemaRegister')
const schemaLogin = require('../config/schemesValidate/SchemaLogin')

router.post('/register', async (req, res) => {
  console.log(req.body)
  const { firstName, lastName, email} = req.body
  let {password} = req.body
  // validate user
  const { error } = schemaRegister.validate(req.body)
  if (error) {
    return res.status(400).json(
      { error: error.details[0].message }
    )
  }
  const isEmailExist = await User.findOne({ email: email })
  if (isEmailExist) {
    return res.status(400).json(
      { error: 'Email ya registrado' }
    )
  }
  const salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password, salt)
  const user = new User({ firstName, lastName, email, password })
  try {
    const userDB = await user.save()
    return res.status(200).json({
      error: null,
      data: userDB
    })
  } catch (error) {
    return res.status(400).json({ error })
  }
})
router.post('/login', async (req, res) => {
  // validaciones
  const { error } = schemaLogin.validate(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const userDB = await User.findOne({ email: req.body.email })
  if (!userDB) return res.status(400).json({ error: 'Usuario no encontrado' })

  const validPassword = await bcrypt.compare(req.body.password, userDB.password)
  if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
  // create toker
  const token = jwt.sign({
    firstName: userDB.firstName,
    lastName: userDB.lastName,
    id: userDB._id
  }, process.env.TOKEN_SECRET)
  return res.header('auth-token', token).json({
    error: null,
    data: { token }
  })
})
module.exports = router
