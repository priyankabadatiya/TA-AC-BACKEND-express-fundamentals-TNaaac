var express = require("express")

var path = require("path")
const cookieParser = require("cookie-parser")

var logger = require("morgan")

var app = express()

app.use(logger("dev"))


app.use((req,res,next)=>{
res.cookie("name","Priyanka")
next()
})

app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + "/public"))

app.get('/',(req,res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
        })
      

    app.get("/new" ,(req,res)=>{
        console.log('hello')
        res.sendFile(__dirname + '/new.html')
        })
      

        app.get("/users/:username",(req,res)=>{
            var username = req.params.username;
            res.send(username)
        })
        
app.post("/new",(req,res)=>{
   res.json(req.body)
})

app.listen(4000,()=>{
    console.log("server is listening at port 4000")
})