import {
  LabelStyled,
  LabelTitle,
  Input,
  LabelWrapper,
  CountryMenuToggler,
  CountrySelector,
  SearchBox,
  CountryMenu,
  CountryListWrapper,
  CountryList,
  CountryItem,
  CountryName,
} from './Label.styled';
import { Icon } from '@iconify/react';

const Label = ({
  id,
  labelTitle,
  type,
  name,
  value,
  onFocus,
  onChange,
  onBlur,
  title,
  validationStatus,
  maxLength,
  handleTogglerMousedown,
  handleTogglerFocus,
  selectedCountry,
  selectOption,
  countrySearchQuery,
  isActive,
  filteredCountries,
  searchCountry,
  countrySelectorRef,
}) => {
  return (
    <LabelWrapper>
      {type === 'tel' && (
        <CountrySelector
          ref={countrySelectorRef}
          validationStatus={validationStatus}
        >
          <CountryMenuToggler
            tabIndex="0"
            onMouseDown={handleTogglerMousedown}
            onFocus={handleTogglerFocus}
            isActive={isActive}
          >
            <Icon icon={`flag:${selectedCountry.code.toLowerCase()}-4x3`} />
            <span>+{selectedCountry.phone}</span>
          </CountryMenuToggler>

          <CountryMenu isActive={isActive}>
            <SearchBox
              type="text"
              placeholder="Search Country Name"
              value={countrySearchQuery}
              onChange={searchCountry}
            />
            <CountryListWrapper>
              <CountryList>
                {filteredCountries.map(country => (
                  <CountryItem
                    key={country.code}
                    onClick={() => selectOption(country)}
                  >
                    <div>
                      <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} />
                      <CountryName>{country.name}</CountryName>
                    </div>
                    <strong>+{country.phone}</strong>
                  </CountryItem>
                ))}
              </CountryList>
            </CountryListWrapper>
          </CountryMenu>
        </CountrySelector>
      )}
      <LabelStyled>
        <LabelTitle>{labelTitle}</LabelTitle>
        <Input
          id={id}
          type={type}
          name={name}
          value={value}
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          title={title}
          validationStatus={validationStatus}
          maxLength={maxLength}
          required
        />
      </LabelStyled>
    </LabelWrapper>
  );
};

export default Label;
