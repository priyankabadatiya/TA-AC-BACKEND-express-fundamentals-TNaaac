const cookieParser = require("cookie-parser")
var express = require("express")

var logger = require("morgan")

var app = express()
var port = '4k'


app.use(logger("dev"))

app.use(cookieParser)

app.use((req,res,next)=>{
<<<<<<< HEAD
res.cookie("name","Priyanka")

next()
})

app.use(express.json())

app.use(express.urlencoded({extend:false}))

app.use(express.static(__dirname + "/public"))


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
    })

 app.get("/contact", (req,res)=>{
res.send("welcome")
})
            
app.post("/json",(req,res)=>{
    console.log(req.body)
})


app.listen(4000,()=>{
    console.log(`server is listening at port ${port}`)
});