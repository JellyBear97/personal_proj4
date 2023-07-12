import React from 'react';
import { styled } from 'styled-components';

const Modal = ({ children }) => {
  return (
    <StOuter>
      <StInner>{children}</StInner>
    </StOuter>
  );
};

export default Modal;

const StOuter = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StInner = styled.div`
  background-color: white;
  width: 800px;
  height: 500px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
