const Contact = require('../models/Contact.model')

const contacts = [];

function listContacts(){

    return contacts;
}

function saveContacts(data){

    if(!data.nombre || !data.apellido || !data.telefono){

        return {
            error: true,
            message: "Todos los campos son requeridos"
        };
    }


    const id = contacts.length + 1; 
    const newContact = new Contact(

        id,
        data.nombre,
        data.apellido,
        data.telefono
    );
    
    contacts.push(newContact);
    
    return {
        error: false,
        newContact
    };
}

function searchContact(idS){

     const contact =  contacts.find(x => x.id == idS);    
     return contact != null ? contact : "Contacto no encontrado.";
}   

function deleteContact(idD){

    var index = contacts.findIndex(x => x.id == idD);
    if(index  !== -1){

        contacts.splice(index,1);
        return  `El contacto con ID ${idD} ha sido eliminado.`;
    }

    return `Contacto no encontrado`;
}

module.exports ={
    listContacts,
    saveContacts,
    searchContact,
    deleteContact
};