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

}

// Update a new identified user by user id
exports.update = (req, res)=>{

}

// Delete a user with specified user id in the request
exports.delete = (req, res) =>{

}