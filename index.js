const http = require('http')
const mysql = require('mysql')

const coachs = [
    {
        name:"michel",
        stack : "backend"
    },
    {
        name:"françois",
        stack : "frontend"
    },
    {
        name:"sacré",
        stack : "fullstack"
    },
 
]

const database = mysql.createConnection({
    host:"localhost",
    user:"sirMelka",
    password:"miraETpathy29",
    database:"library"
})

database.connect((err)=>{
    if(err) throw err
    console.log('connected successfully')
})


const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/json"})

    if(req.url === "/"){
        res.write("bienvenue")
    res.end()
    }
    if(req.url === "/coachs"){
        res.write(JSON.stringify(coachs))
    res.end()
    }
    if(req.url==="/author")
    {
        database.query("SELECT * FROM author limit 10",(err,result)=>{
            if(err) console.log("erreur de la requette")
            res.write(JSON.stringify(result))
            console.log(result)
        })
    }

    
})

server.listen(3000,()=>{
    console.log('server is running...')
})
