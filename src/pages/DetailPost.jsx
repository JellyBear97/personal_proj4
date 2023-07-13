import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const DetailPost = () => {
  const [authUid, setAuthUid] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('user from layout', user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      setAuthUid(user.uid);
    });
  }, []);

  if (authUid === null) {
    return <div>로딩중입니당........</div>;
  }
  return (
    <Layout authUid={authUid}>
      <h1>detail post입니당</h1>
    </Layout>
  );
};

export default DetailPost;
