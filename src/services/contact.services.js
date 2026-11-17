const Contact = require('../models/Contact.model')

const contacts = [];

function listContacts(){

    return contact;
}

function saveContacts(data){

    const id = contacts.length + 1;

    const newContact = new Contact(

        id,
        data.nombre,
        data.apellido,
        data.telefono
    );
    contacts.push(newContact);
    return newContact;
}

function searchContact(idS){

     const contact =  contacts.find(x => x.id == idS.id);    
     return contact != null ? contact : "Contacto no encontrado, verifique su consulta.";
}   

function deleteContact(idD){

    contacts.filter(x => x.id == idD.id);
    return  `El contacto con ID ${idD} ha sido eliminado.`;
}

module.exports ={
    listContacts,
    saveContacts,
    searchContact,
    deleteContact
};