import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';
import { nanoid } from 'nanoid';
import { FilterInput, FilterLabel } from './Filter.styled';

const searchInputId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const handleSearchInputChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <>
      <FilterLabel htmlFor={searchInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={handleSearchInputChange}
        placeholder="Enter contact name"
        id={searchInputId}
      />
    </>
  );
};

export default Filter;
