const express=require('express')
const app= express()
const port=2201


// server -->router---->controller---> model



app.use('/user',require('./Routers/userRouter'))
// app.use('/api/v1/admin')
// app.use('/api/v1/chat')



app.listen(port,()=>{
console.log(`Server is running on ${port}`)
})





