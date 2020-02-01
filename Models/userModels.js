const mongoose=require('mongoose')

const userSchema=mongoose.Schema


const userDocs= new userSchema({


'email':{
    type:String,
    // require:true,unique:true,lowercase:true,
    trim:true
},

"name":{
    type:String
},

'password':{
    type:String
},

status:{
type:String,
enum:["ACTIVE","BLOCK","DELETE"],
default:"ACTIVE"
},

userRole:{
    type:String,
    enum:["CUSTOMER","BUSINESS","ADMIN"],
    default:"CUSTOMER"
}

},{timestamps:true})








// module.exports=mongoose.model('user',userDocs,'user')// same name of collection i.e:- 'user'
module.exports=mongoose.model('user',userDocs,'user')
