const express=require('express');
const router=express.Router();//cria o router

router.get('/',(req,res,next)=>{

    res.status(200).send({
        mensagem: 'Todos os Contatos'
    });

})

router.post('/',(req,res,next)=>{
    
        res.status(201).send({  
            mensagem: 'Adiciona um Contato'
        });
})

router.get ('/:contatoId',(req,res,next)=>{
    const id=req.params.contatoId; //pega o id do contato
    res.status(200).send({
        mensagem: 'Retorna somente um contato',
        id: id //envia o id do contato
    });
})


router.patch('/:contatoId',(req,res,next)=>{
    const id = req.params.contatoId; //pega o id do contato
    res.status(201).send({
        mensagem: 'Altera um Contato',
        id: id //envia o id do contato  
    });

})
router.delete('/:contatoId',(req,res,next)=>{
    const id = req.params.contatoId; //pega o id do contato
    res.status(201).send({
        mensagem: 'Deleta um Contato',
        id:id //envia o id do contato
    });
})

module.exports = router;