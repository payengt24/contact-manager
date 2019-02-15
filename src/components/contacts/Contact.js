import React, { Component } from 'react'
//short hand impt
import PropTypes from 'prop-types'
import {Consumer} from '../../Context'


class Contact extends Component {

    state= {
        showContactInfor: true
    }

    handleShowClick = (event) => {
        console.log('clicked')
        this.setState({
            showContactInfor: !this.state.showContactInfor
        })
    }

    deleteContact = (id, dispatch) => {
      console.log('object');
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
    
  render(props) {

    const {id, name, phone, email, key} = this.props.contact
    
    return (

      <Consumer>
        {value => {
          const { dispatch } = value
           return(
          <div className="card card-body mb-3">
          <h4>{name} 
          <i onClick={this.handleShowClick} 
          className="fas fa-sort-down" 
          style={{cursor: 'pointer'}}>
          </i>
          <i className="fa fa-times" 
          style={{cursor: 'pointer', float: 'right', color: 'red'}}
          onClick={this.deleteContact.bind(this, id, dispatch)}
          ></i>
          </h4>
        <ul className="list-group" >
            <li className="list-group-item">{email}</li>
            <li className="list-group-item ">{phone}</li>
        </ul>
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
