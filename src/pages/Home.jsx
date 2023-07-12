import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { auth } from '../firebase';

// 새로고침시 얘는 어때
import { onAuthStateChanged } from 'firebase/auth';

const Home = () => {
  // 새로고침시 얘는 어때
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('user', user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []);

  const navigate = useNavigate();
  console.log('home에서 auth에 로그인 한 사람 정보가 들어있니?', auth);
  return (
    <Layout>
      <h1>Home</h1>
      <button onClick={() => navigate('/my-space')}>→ MY THING PAGE로 이동</button>
    </Layout>
  );
};

export default Home;
