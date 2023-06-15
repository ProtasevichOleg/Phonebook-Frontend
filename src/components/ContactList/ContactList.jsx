import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  fetchContacts,
} from 'redux/contacts';

import ContactListItem from '../ContactListItem';
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
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
