const express = require ('express');

const router = express.Router();

const contactServices = require('../services/contact.services');


//rutas get

router.get('/', (req, res) => {
        const contacts = contactServices.listContacts();
        res.json(contacts);
});

router.get('/:id', (req, res) => {

        const contacts = contactServices.searchContact(req.params.id);
        res.json(contacts);
});

//ruta post

router.post('/', (req, res) => {

        const result = contactServices.saveContacts(req.body);
        if(result.error)  {
                res.status(400).json({message: result.message});
        }      
        res.status(201).json(result.newContact);
});

//ruta delete

router.delete('/:id', (req, res) => {
    const message = contactServices.deleteContact(req.params.id);
    res.json(message);
});


//exportar
module.exports = router;