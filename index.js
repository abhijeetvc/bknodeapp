const express=require('express')
const cors=require('cors')

const PORT=8899

const app=express()

const corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

// app.get("/check",(req,res)=>{
//     res.send("Hiii from Server!!!")
// })

// const person={
//     id:1,
//     name:"John",
//     city:"Pune"
// }

// const users=[
//     {
//         id:1,
//         name:"john"
//     },{
//         id:2,
//         name:"peter"
//     }
// ]

// app.get("/person",(req,res)=>{
//     res.send(person)
// })

// app.get("/users",(req,res)=>{
//     res.send(users)
// })

app.use(express.json())

const db=require('./app/model')

db.mongoose.connect(db.url)
    .then(()=>{
        console.log('Connected to Database!!!');
    })

require('./app/router/user.routes')(app)


app.listen(PORT,()=>{
    console.log('Connected to server!!!');
})