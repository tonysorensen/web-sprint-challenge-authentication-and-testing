const db = require('../../data/dbConfig')
module.exports={
    find,
    findByName,
    add,
    findById
}
function find(){
    return db("users")
}
function findByName(username){
    return db("users")
    .where({username})
}


function findById(id){
    return db("users").where({id}).first()
}


async function add(user){
const [id]=await db('users').insert(user, "id")
return findById(id)
}