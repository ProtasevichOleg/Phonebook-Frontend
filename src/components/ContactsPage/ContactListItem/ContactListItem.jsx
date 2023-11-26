import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactInfoList,
  ContactInfoItem,
  DeleteButton,
} from './ContactListItem.styled';

const ContactListItem = ({ _id, name, phone, email }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(_id));
  };

  return (
    <ContactItem>
      <ContactInfoList>
        <ContactInfoItem>{name}</ContactInfoItem>
        <ContactInfoItem>{phone}</ContactInfoItem>
        <ContactInfoItem>{email}</ContactInfoItem>
      </ContactInfoList>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default ContactListItem;
