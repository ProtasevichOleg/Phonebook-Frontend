import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  fetchContacts,
} from 'redux/contacts';

import { ContactListItem } from 'components/ContactsPage';
import { List } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found.</p>
      )}

      <List>
        {filteredContacts.map(({ _id, name, phone, email }) => (
          <ContactListItem
            key={_id}
            _id={_id}
            name={name}
            phone={phone}
            email={email}
          />
        ))}
      </List>
    </>
  );
};

export default ContactList;
