import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import style from './Phonebook.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/contacts/contuctsActions';
import Loader from './loader/Loader';

class App extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className={style.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {items.length >= 2 && <Filter />}

        {items.length > 0 && <ContactList />}
        {this.props.loading && <Loader></Loader>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    loading: state.contacts.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
