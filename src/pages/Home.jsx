import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <h1>Home</h1>
      <button onClick={() => navigate('/my-space')}>→ MY THING PAGE로 이동</button>
    </Layout>
  );
};

export default Home;
