const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())

// GET all requests
app.get("/requests", (req,res)=>{

let data = JSON.parse(fs.readFileSync("data.json"))

res.json(data)

})

// SAVE service request
app.post("/request-service",(req,res)=>{

let requests = JSON.parse(fs.readFileSync("data.json"))

const newRequest = {

id: Date.now(),
name:req.body.name,
phone:req.body.phone,
service:req.body.service,
location:req.body.location,
status:"Pending"

}

requests.push(newRequest)

fs.writeFileSync("data.json",JSON.stringify(requests,null,2))

res.send("Service Request Submitted")

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})
