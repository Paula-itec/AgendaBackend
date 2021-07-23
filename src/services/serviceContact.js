const Contact = require('../models/contact')


function getContacts() {
    return Contact.find()
}
async function getOneContact(id) {
    const user = await Contact.exists({ _id: id })
    if (user) return Contact.findById(id)
    else throw new Error('El registro no existe')
}
async function deleteOneContact(id) {
    const user = await Contact.exists({ _id: id })
    if (user) return Contact.findByIdAndDelete(id)
    else throw new Error('El registro no existe')
}
function addContact(data) {
    let contact = new Contact({
        date: data.date || new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        favourite: data.favourite || false
    })
    return contact.save()
}
async function updateContact(id, data) {
    const user = await Contact.exists({ _id: id })
    if (user) {
        let contact = {
            date: data.date || new Date().toISOString(),
            name: data.name,
            phone: data.phone,
            favourite: data.favourite
        }
        !contact.name ? delete contact.name : null
        !contact.phone ? delete contact.phone : null
        !contact.favourite ? delete contact.favourite : null
        console.log(contact)
        let options = {
            useFindAndModify: false,
            new: true
        }
        return Contact.findOneAndUpdate(id, contact, options)
    }
    else throw new Error('El registro no existe')
}


module.exports = { getContacts, getOneContact, deleteOneContact, addContact, updateContact }