var Userdb = require('../model/model');

// creade and save new user

exports.create=(req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message: "Conteúdo não pode ser vazio"});
        return;
    }

    // new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        cpf:req.body.cpf,
        telefone:req.body.telefone,
        cep:req.body.cep,
        logadouro:req.body.logadouro,
        numero:req.body.numero,
        bairro:req.body.bairro,
        cidade:req.body.cidade,
        estado:req.body.estado,
    })

    // save user in the database
    user
     .save(user)
     .then(data=>{
         res.send(data)
     })
     .catch(err =>{
         res.status(500).send({
             message: err.message || "Erro na operação 'criar'"
         });
     });
}

// retrieve and return all users/ retrive and return a single user
exports.find=(req, res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error ao encontrar informações do cliente"})
    })
}

// Update a new identified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
         .status(400)
         .send({message: "Os campos de dados não podem estar vazios"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
      .then(data=>{
          if(!data){
              res.status(404).send({message:`O cliente ${id} não pôde ser atualizado. Talvez não foi encontrado!`})
          }else{
              res.send(data)
          }
      })
      .catch(err=>{
          res.status(500).send({message:"Erro ao atualizar as informações do cliente"})
      })
}

// Delete a user with specified user id in the request
exports.delete = (req, res) =>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
     .then(data=>{
         if(!data){
             res.status(404).send({ message: `Não se pôde deletar ${id}. Talvez o id esteja errado`})
         } else{
             res.send({
                 messagem:"Cliente foi deletado com sucesso"
             })
         }
     })
     .catch(err=>{
         res.status(500).send({
             message:"Não pôde deletar Cliente com id=" + id
         });
     });
}