const express = require ('express');

const router = express.Router();

const contactServices = require('../services/contact.services');



//rutas get

router.get('/', (req, res) => {
        const contacts = contactServices.listContacts();
        res.json(contacts);
});

router.get('/:id', (req, res) => {

        const contacts = contactServices.searchContact(req.body);
        res.json(contacts);
});

//ruta post

router.post('/', (req, res) => {

        const newContact = contactServices.saveContacts(req.body);
        res.status(201).json(newContact);
});

//delete

router.delete('/:id', (req, res) => {

    const message = contactServices.deleteContact(req.body);
    res.json(message);
});


//exportar
module.exports = router;