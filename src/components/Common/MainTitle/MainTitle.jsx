import React from 'react';
import PropTypes from 'prop-types';
import { StyledMainTitle } from './MainTitle.styled';

const MainTitle = ({ title, isHidden }) => (
  <StyledMainTitle isHidden={isHidden}>{title}</StyledMainTitle>
);

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
