import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return <StFooter>footer</StFooter>;
};

export default Footer;

const StFooter = styled.footer`
  box-sizing: border-box;
  background-color: #ffb5b3;
  width: 100%;

  // NOTE height 변경시 Layout div의 margin도 바꿔주어야함
  height: 40px;

  /* position: fixed; */
  /* bottom: 0; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
