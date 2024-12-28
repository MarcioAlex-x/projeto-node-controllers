const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const Tarefas = require('./models/Tarefas')
const tarefasController = require('./controllers/tarefasController')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req, res)=>{
    res.send('Funcionou!')
})

app.post('/criar-tarefa', tarefasController.criarTarefa)
app.get('/listar-tarefas', tarefasController.listarTarefas)

conn.sync({force:false})
    .then(()=>{
        app.listen(3000,()=>{ console.log('http://localhost:3000')})
    }).catch((err)=>{
        console.log(err)
    })
