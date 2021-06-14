const Users = require("../auth/auth-model")

const checkUsernameExists = (req, res, next) => {
    const {username} = req.body

    Users.findByName(username)
    .then(user => {
      console.log("user",user)
      if (user.length > 0) {
        res.status(400).json({message: "username is taken"})
      } else {
        next()
      }
    }).catch(err => res.status(500).json({error: err}))
  //   const exists = Users.findByName({username}) 
  //   console.log('exists',exists)
  //   if(exists){
  //     res.status(400).json({message:"username taken"})
  //   }else{
  //  next()
  //   }
}

module.exports={checkUsernameExists}