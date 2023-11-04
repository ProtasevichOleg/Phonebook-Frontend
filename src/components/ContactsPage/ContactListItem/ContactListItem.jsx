import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactInfoList,
  ContactInfoItem,
  DeleteButton,
} from './ContactListItem.styled';

const ContactListItem = ({ name, phone, _id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(_id));
  };

  return (
    <ContactItem>
      <ContactInfoList>
        <ContactInfoItem className="name">{name}</ContactInfoItem>
        <ContactInfoItem>{phone}</ContactInfoItem>
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
