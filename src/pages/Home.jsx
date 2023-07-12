import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { auth } from '../firebase';

const Home = () => {
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
