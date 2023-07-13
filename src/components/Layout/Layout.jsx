import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { styled } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

function Layout({ children, authUid }) {
  console.log('레이아웃에서', authUid);
  // const [authUid, setAuthUid] = useState(null);
  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     console.log('user from layout', user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
  //     setAuthUid(user.uid);
  //   });
  // }, []);

  // if (authUid === null) {
  //   return <div>로딩중입니당........</div>;
  // }
  return (
    <StWrapper>
      <Header authUid={authUid} />
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
