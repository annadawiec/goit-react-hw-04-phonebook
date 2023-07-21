//import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

//export class App extends Component {
//state = {
//contacts: [
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
// filter: '',
//};

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contact')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(
      i => i.name.toLowerCase() === name.toLowerCase() || i.number === number
    )
      ? alert(`Contact with name ${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    // const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };
  //this.setState(prevState => ({
  //  contacts: prevState.contacts.filter(contact => contact.id !== id),
  //}));

  //componentDidMount() {
  //const contactsStorage = localStorage.getItem('contacts');
  //const parseContactsStorage = JSON.parse(contactsStorage);
  // if (parseContactsStorage) {
  //this.setState({ contacts: parseContactsStorage });
  //}
  // }

  // componentDidUpdate(prevProps, prevState) {
  // if (this.state.contacts !== prevState.contacts) {
  //localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }
  // }

  // render() {
  // const { filter } = this.state;
  return (
    <section>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList contacts={findContacts()} deleteContact={deleteContact} />
    </section>
  );
};
