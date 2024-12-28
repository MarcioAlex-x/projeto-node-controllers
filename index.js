const express = require('express')
const conn = require('./db/conn')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.send('Funcionou!')
})

app.post('/criar-tarefas',async(req,res)=>{
    
})

conn.sync({force:false})
    .then(()=>{
        app.listen(3000,()=>{ console.log('http://localhost:3000')})
    }).catch((err)=>{
        console.log(err)
    })
