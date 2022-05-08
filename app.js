const express = require('express'); // importa o express
const app = express();// cria a aplicação
const rotaContatos = require('./routes/contatos');// importa a rota contatos
const morgan = require('morgan');// importa o morgan

app.use(morgan('dev'));// usa o morgan
app.use('/contatos', rotaContatos);// define a rota contatos

//Quando não encontrar a rota
app.use ((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);

})
app.use((error,req,res, next)=>{
    res.status(error.status || 500)
    
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})

module.exports = app;// exporta a aplicação