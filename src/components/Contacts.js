import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
        state = {
            contacts: [
                {
                    id: 1,
                    name: 'Pa Yeng',
                    email: 'payengt24@gmail.com',
                    phone: '764-447-0589'
                },
                {
                    id: 2,
                    name: 'Yeng',
                    email: 'payeng@gmail.com',
                    phone: '555-555-555'
                },
                {
                    id: 3,
                    name: 'Pa',
                    email: 'pa24@gmail.com',
                    phone: '111-111-111'
                }
            ]
        }
    


  render() {

     const {contacts} = this.state

    return (
      <div>
        {contacts.map(contact => (
            <Contact 
                key = {contact.id}
                contact = {contact} 
                />
        ))}
      </div>
    )
  }
}

export default Contacts
