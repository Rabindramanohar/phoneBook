import React from 'react';
import ContactCards from './ContactCards';


function ContactList({contacts}) {

    const  renderContactList  = contacts.map(contact => (
        <ContactCards contact = {contact}/>
    ))
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList
