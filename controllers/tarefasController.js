const Tarefas = require('../models/Tarefas')

module.exports = {
    async criarTarefa(req,res){
        const {titulo, descricao, status} = req.body
        try{
            const tarefa = await Tarefas.create({
                titulo,
                descricao,
                status
            })
            res.status(201).json(tarefa)
        }catch(err){
            res.status(400).json(err)
            console.log(err)
        }
    },

    async listarTarefas(req,res){
        try{
            const tarefas = await Tarefas.findAll()
            res.status(200).json(tarefas)
        }catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    },
}
