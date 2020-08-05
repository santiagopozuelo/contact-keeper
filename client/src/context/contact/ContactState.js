import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "santiago pozuelo",
                email:"sant@gmail.com",
                phone: '12345',
                type: 'professional'
            },
            {
                id: 2,
                name: "diego pozuelo",
                email:"diego@gmail.com",
                phone: '22222',
                type: 'professional'
            },
            {
                id: 3,
                name: "tomas pozuelo",
                email:"tomas@gmail.com",
                phone: '11111',
                type: 'personal'
            }
        ],
        current: null
    };
    //when edit contact is put into current value of state

    const [state, dispatch] = useReducer(contactReducer, initialState);
    
    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact})
    }

    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    //Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    //update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }


    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}>
            { props.children}
        </ContactContext.Provider>
    ) 
};

export default ContactState;