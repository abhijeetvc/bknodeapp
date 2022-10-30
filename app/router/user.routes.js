module.exports=app=>{
    const users=require('../controller/user.controller')

    const router=require("express").Router()

    router.post('/saveData',users.create)

    app.use('/api/users',router)
}

// localhost:8899/api/users/saveData