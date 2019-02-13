import React, { Component } from 'react'
//short hand impt
import PropTypes from 'prop-types'


class Contact extends Component {
    
  render(props) {

    const {name, phone, email, key} = this.props.contact
    
    return (
      <div className="card card-body mb-3">
          <h4>{name}</h4>
        <ul className="list-group" >
            <li className="list-group-item">{email}</li>
            <li className="list-group-item ">{phone}</li>
        </ul>
      </div>
    )
  }
}

//checking
Contact.prototypes = {
    contact: PropTypes.object.isRequired,

}

export default Contact
