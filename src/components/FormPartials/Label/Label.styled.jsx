import styled from 'styled-components';

export const LabelWrapper = styled.div`
  position: relative;
`;

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.label};
`;

export const LabelTitle = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0 0 0 2px
    ${({ theme, validationStatus }) => {
      const type = validationStatus?.type;
      switch (type) {
        case 'error':
          return 'red';
        case 'warning':
          return 'orange';
        case 'success':
          return 'green';
        default:
          return theme.colors.inputBorder;
      }
    }};
  width: 100%;
  box-sizing: border-box;
  padding-left: ${p => (p.type === 'tel' ? '115px' : '5px')};
`;

export const CountrySelector = styled.div`
  line-height: 1.15;
  position: absolute;
  z-index: 1;
  bottom: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ffffff;
  border: 0px solid transparent;

  box-sizing: border-box;
`;

export const CountryMenuToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  padding: 0 5px;
  padding: 5px;
  text-align: center;
  cursor: pointer;

  svg {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }

  span,
  svg {
    pointer-events: none;
    user-select: none;
  }
`;

export const CountryMenu = styled.div`
  position: absolute;
  top: 150%;
  width: 300%;
  background-color: #ffffff;
  display: ${p => (p.isActive ? 'block' : 'none')};
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.inputBorder};
  /* padding: 2px; */
`;

export const SearchBox = styled.input`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  padding: 5px;
  font-size: 1.1rem;
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.mainTextAccent};
  }
`;

export const CountryListWrapper = styled.div`
  padding: 2px;
`;

export const CountryList = styled.ul`
  max-height: 400px;
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 5px;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-color: #bcbcbc; /* Темніший колір для більшої видимості */
    border-radius: 5px; /* Плавні кути для тумби */
    &:hover {
      background-color: #a0a0a0; /* Зміна кольору при наведенні */
    }
  }
`;

export const CountryItem = styled.li`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  display: ${p => (p.isHidden ? 'none' : 'flex')};

  svg {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }

  &:not(:last-child) {
    border-bottom: 0.1rem solid #eee;
  }

  &:hover {
    background-color: lightcyan;
  }
`;

export const CountryName = styled.span`
  margin-left: 0.4rem;
`;
