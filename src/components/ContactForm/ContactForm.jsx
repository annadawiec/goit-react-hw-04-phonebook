//import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

//export class ContactForm extends Component {
// state = {
//  name: '',
// number: '',
//};

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //handleChange = event => {
  // const { name, value } = event.currentTarget;
  //this.setState({ [name]: value });
  // };

  //handleSubmit = event => {
  //event.preventDefault();
  //this.props.onSubmit(this.state);
  // this.setState({
  //  name: '',
  //   number: '',
  // });
  //};

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  //render() {
  //const { name, number } = this.state;

  // <form className={css.form} onSubmit={this.handleSubmit}>
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        // onChange={this.handleChange}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        //onChange={this.handleChange}
        placeholder="Number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
