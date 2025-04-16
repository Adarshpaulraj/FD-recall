 let express = require('express')
  let router = express.Router()

let userData = require('../controller/UserData')

router.post('/create',userData.create)
router.get('/',userData.getUsers)
router.put('/edit/:id',userData.editUser)
router.delete('/delete/:id',userData.deleteUser)

module.exports = router