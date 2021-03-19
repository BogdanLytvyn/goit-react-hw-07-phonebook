import React, { Component } from 'react';
import Contact from '../contact/Contact';
import { connect } from 'react-redux';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            <Contact contact={item} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.filter
      ? state.contacts.items.filter(contact =>
          contact.name
            .toLowerCase()
            .includes(state.contacts.filter.toLowerCase()),
        )
      : state.contacts.items,
  };
};

export default connect(mapStateToProps)(ContactList);

//  ============= без reduxjs/toolkit =================
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Contact from '../contact/Contact';
// import { connect } from 'react-redux';

// class ContactList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.contacts.map(item => (
//           <li key={item.id}>
//             <Contact contact={item} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// ContactList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   onDeleteNumber: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.filter
//       ? state.contacts.items.filter(contact =>
//           contact.name
//             .toLowerCase()
//             .includes(state.contacts.filter.toLowerCase()),
//         )
//       : state.contacts.items,
//   };
// };

// export default connect(mapStateToProps)(ContactList);
