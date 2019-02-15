import React, { Component } from 'react'
import {Consumer} from '../../Context'
import uuid from 'uuid';
import TextLayoutGroup from '../layout/TextLayoutGroup'

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}

    }

    handleInputChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmitForm = (dispatch, event) => {
        event.preventDefault()
        const {name, phone, email} = this.state

    //check from errors/empty inputs
    if(name === ''){
        this.setState({errors: {name: 'Name is required'}})
        return;
    }

    if(email === ''){
        this.setState({errors: {email: 'Email is required'}})
        return;
    }

    if(phone === ''){
        this.setState({errors: {phone: 'Phone is required'}})
        return;
    }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        dispatch({type: 'ADD_CONTACT', payload: newContact})

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/')

    }

  render() {

    const {name, email, phone, errors} = this.state

    return (
        <Consumer>
            {value => {
                const { dispatch } = value
                return (
                    <div className='card  mb-3 '>
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmitForm.bind(this, dispatch)}>
                     <TextLayoutGroup 
                        label= "Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange= {this.handleInputChange}
                        errors={errors.name}
                        />   
                    <TextLayoutGroup 
                        label= "Email"
                        type="email"
                        name="email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange= {this.handleInputChange}
                        errors={errors.email}
                        />
                    <TextLayoutGroup 
                        label= "Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange= {this.handleInputChange}
                        errors={errors.phone}
                        />
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                    </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default AddContact
