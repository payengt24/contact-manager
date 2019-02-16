import React, { Component } from 'react'
//short hand impt
import PropTypes from 'prop-types'
import {Consumer} from '../../Context'
import axios from 'axios'


class Contact extends Component {

    state= {
        showContactInfor: false
    }

    deleteContact = (id, dispatch) => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}))



      
    }
    
  render(props) {

    const {id, name, phone, email, key} = this.props.contact
    const { showContactInfor } = this.state
    
    return (

      <Consumer>
        {value => {
          const { dispatch } = value
           return(
          <div className="card card-body mb-3">
          <h4>{name} 
          <i onClick={() => { this.setState({
          showContactInfor: !this.state.showContactInfor
        })}}
          className="fas fa-sort-down" 
          style={{cursor: 'pointer'}}>
          </i>
          <i className="fa fa-times" 
          style={{cursor: 'pointer', float: 'right', color: 'red'}}
          onClick={this.deleteContact.bind(this, id, dispatch)}
          ></i>
          </h4>
          {showContactInfor ? (        <ul className="list-group" >
            <li className="list-group-item">{email}</li>
            <li className="list-group-item ">{phone}</li>
        </ul>) : null}

      </div>
           )
        }}
      </Consumer>
    )
  }
}

//checking
Contact.prototypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact
