import React from 'react';
import { styled } from 'styled-components';

const SmallModal = ({ children }) => {
  return (
    <StOuter>
      <StInner>{children}</StInner>
    </StOuter>
  );
};

export default SmallModal;

const StOuter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StInner = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
