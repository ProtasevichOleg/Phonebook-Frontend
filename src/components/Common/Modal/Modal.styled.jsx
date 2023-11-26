import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #55555555;

  z-index: 100;
`;

export const ModalContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
