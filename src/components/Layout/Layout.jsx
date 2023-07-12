import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { styled } from 'styled-components';

function Layout({ children }) {
  return (
    <StWrapper>
      <Header />
      <StMain>{children}</StMain>
      <Footer />
    </StWrapper>
  );
}

export default Layout;
const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StMain = styled.main`
  background-color: #fff0d5;
  box-sizing: border-box;

  // main layout을 padding으로 줄지 아니면 width정하고 margin으로 줘야할지 고민된다.
  width: 1200px;
  margin: 40px auto 0;
  min-height: 100vh;
  height: 100%;
`;
