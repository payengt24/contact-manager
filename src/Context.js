import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
            case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
        return state;     
    }
}

export class Provider extends Component{
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
                name: 'John',
                email: 'john-sm@gmail.com',
                phone: '555-555-555'
            },
            {
                id: 3,
                name: 'Mary',
                email: 'mary_smith@gmail.com',
                phone: '111-111-111'
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render () {
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;



