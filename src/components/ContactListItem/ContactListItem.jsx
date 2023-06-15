import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactInfoList,
  ContactInfoItem,
  DeleteButton,
} from './ContactListItem.styled';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      <ContactInfoList>
        <ContactInfoItem className="name">{name}</ContactInfoItem>
        <ContactInfoItem>{number}</ContactInfoItem>
      </ContactInfoList>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
